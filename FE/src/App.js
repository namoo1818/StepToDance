<<<<<<< HEAD
import React from "react";
import { View, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Start from "./pages/Start";
import Home from "./pages/Home";
import VideoUpload from "./pages/VideoUpload";
import Mypage from "./pages/Mypage";
import CameraScreen from "./pages/CameraScreen";
=======
import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './pages/Home';
import VideoUpload from './pages/VideoUpload';
import Mypage from './pages/Mypage';
import GuideDetail from './pages/GuideDetail';
import SearchResult from './pages/SearchResult';
import Feedback from './pages/Feedback';
import MyVideoList from './pages/MyVideoList';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack(){
  return (
    <Stack.Navigator screenOptions = {{ headerShown: false }}>
      <Stack.Screen name="home" component={Home}/>
      <Stack.Screen name="GuideDetail" component={GuideDetail}/>
      <Stack.Screen name="SearchResult" component={SearchResult}/>
      {/* <Stack.Screen name="Feedback" component={Feedback}/> */}
    </Stack.Navigator>
  )
}


function MypageStack() {
  return (
    <Stack.Navigator initialRouteName="Mypage">
      <Stack.Screen name="Mypage" component={Mypage} options={{ headerShown: false }} />
      <Stack.Screen name="VideoListScreen" component={MyVideoList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
>>>>>>> 1940e2c5a964ee2be9c85751f859a536c9e12c67

export default function App() {
  
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="홈" component={Home} />
        <Stack.Screen name="업로드" component={VideoUpload} />
        <Stack.Screen name="마이페이지" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    
      <NavigationContainer>
        <StatusBar/>
        <Tab.Navigator initialRouteName="Home" screenOptions = {{ headerShown: false}} >
          <Tab.Screen name="Home" component={HomeStack} options={{title:'홈', tabBarIcon:({color, size})=>(
            <Icon name="home" color={color} size={size}/>
          )}}/>
          <Tab.Screen name="VideoUpload" component={VideoUpload} options={{title:'업로드', tabBarIcon:({color, size})=>(
            <Icon name="upload" color={color} size={size}/>
          )}}/>
          <Tab.Screen name="Feedback" component={Feedback} options={{title:'피드백', tabBarIcon:({color, size})=>(
            <Icon name="person" color={color} size={size}/>
          )}}/>
          <Tab.Screen name="Mypage" component={MypageStack} options={{title:'마이페이지', tabBarIcon:({color, size})=>(
            <Icon name="person" color={color} size={size}/>
          )}}/>
        </Tab.Navigator>
      </NavigationContainer>
>>>>>>> 1940e2c5a964ee2be9c85751f859a536c9e12c67
  );
}
