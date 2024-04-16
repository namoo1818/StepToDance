import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../Home";
import SearchResult from "../SearchResult";
import GuideDetail from "../GuideDetail";

const Stack = createStackNavigator();

export default function StackNavigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="SearchResult" component={SearchResult}/>
            <Stack.Screen name="GuideDetail" component={GuideDetail}/>
        </Stack.Navigator>
    );
};