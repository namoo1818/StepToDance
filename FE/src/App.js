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

export default function App() {
  
  return (
    
      <NavigationContainer>
        <StatusBar/>
        <Tab.Navigator initialRouteName="Home" screenOptions = {{ headerShown: false}} >
          <Tab.Screen name="Home" component={HomeStack} options={{title:'홈', tabBarIcon:({color, size})=>(
            <Icon name="home" color={color} size={size}/>
          )}}/>
          <Tab.Screen name="VideoUpload" component={VideoUpload} options={{title:'업로드', tabBarIcon:({color, size})=>(
            <Icon name="upload" color={color} size={size}/>
          )}}/>
          {/* <Tab.Screen name="Mypage" component={Mypage} options={{title:'마이페이지', tabBarIcon:({color, size})=>(
            <Icon name="person" color={color} size={size}/>
          )}}/> */}
          <Tab.Screen name="Feedback" component={Feedback} options={{title:'피드백', tabBarIcon:({color, size})=>(
            <Icon name="person" color={color} size={size}/>
          )}}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}