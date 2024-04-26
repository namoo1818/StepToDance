import React from 'react';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/UserSlice';


const WebViewScreen = ({ route,navigation }) => {
  const dispatch = useDispatch();
  
  const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('message from webView')`;
  const { uri } = route.params;
  const getCode = (target) => {
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
        const requestCode = target.substring(condition + exp.length);
        console.log('code = ', requestCode);
        requestToken(requestCode);
    }
};
const requestToken = async (code) => {
    const requestTokenUrl = `https://k10a101.p.ssafy.io/api/v1/auth/login?code=${code}`;

    try {
      const response = await axios.get(requestTokenUrl, {}, );

      if (response.status === 201) {
        const accessToken = response.data.data.access_token;
        const refreshToken = response.headers['refresh_token'];
        const { access_token, nickname, profile_img_url } = response.data.data;

        if (accessToken) {
          await AsyncStorage.setItem('accessToken', accessToken);
        }

        if (refreshToken) {
          await AsyncStorage.setItem('refreshToken', refreshToken);
        }
        dispatch(setUserData({
          accessToken: access_token,
          nickname: nickname,
          profileImgUrl: profile_img_url,
          isLoggedIn: true,
      }));
        navigation.navigate('signIn');
      }
      console.log(response.data);
    } catch (e) {
      console.error("Error requesting token:", e.response ? e.response.data : e.message);
    }
  };

  return <WebView 
    source={{ uri }}
    style={{ flex: 1 }}
    injectedJavaScript={INJECTED_JAVASCRIPT}
    javaScriptEnabled
    onMessage={event => {
      const data = event.nativeEvent.url;
      getCode(data);
    }}
    />;
};

export default WebViewScreen;
