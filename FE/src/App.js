import React from 'react';
import { View, StyleSheet } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Start from './pages/Start';
import Home from './pages/Home';
import VideoUpload from './pages/VideoUpload';
import Mypage from './pages/Mypage';

export default function App() {
  const Stack = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="홈" component={Home}/>
          <Stack.Screen name="업로드" component={VideoUpload}/>
          <Stack.Screen name="마이페이지" component={Mypage}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}