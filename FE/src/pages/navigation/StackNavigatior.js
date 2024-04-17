import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import VideoList from "../../components/video/VideoList";
import SearchResult from "../SearchResult";
import GuideDetail from "../GuideDetail";
import CameraScreen from "../CameraScreen";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="VideoList" component={VideoList} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="GuideDetail" component={GuideDetail} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
