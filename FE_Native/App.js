import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import Home from "./src/pages/Home";
import VideoUpload from "./src/pages/VideoUpload";
import Mypage from "./src/pages/Mypage";
import GuideDetail from "./src/pages/GuideDetail";
import SearchResult from "./src/pages/SearchResult";
import Feedback from "./src/pages/Feedback";
import MyVideoList from "./src/pages/MyVideoList";
import SignIn from "./src/pages/SignIn";
import WebViewScreen from "./src/pages/WebViewScreen";
import { Provider, useSelector } from "react-redux";
import store from "./src/store/index";
import CameraScreen from "./src/pages/CameraScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="GuideDetail" component={GuideDetail} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      {/* <Stack.Screen name="Feedback" component={Feedback}/> */}
    </Stack.Navigator>
  );
}

function MypageStack() {
  return (
    <Stack.Navigator initialRouteName="Mypage">
      <Stack.Screen
        name="Mypage"
        component={Mypage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoListScreen"
        component={MyVideoList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SignInStack() {
  return (
    <Stack.Navigator initialRouteName="signIn">
      <Stack.Screen
        name="signIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <AuthenticatedApp />
      </NavigationContainer>
    </Provider>
  );
}
function AuthenticatedApp() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log(isLoggedIn);
  // const isLoggedIn = true
  return isLoggedIn ? (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="VideoUpload"
        component={CameraScreen}
        options={{
          title: "업로드",
          tabBarIcon: ({ color, size }) => (
            <Icon name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={Feedback}
        options={{
          title: "피드백",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageStack}
        options={{
          title: "마이페이지",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="signIn"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="signIn" component={SignIn} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
}

export default App;
// export default function App() {

//   const isLoggedIn = useSelector(state => state.user.isLoggedIn);

//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <StatusBar />
//         {isLoggedIn  ? (

//         <Tab.Navigator
//           initialRouteName="Home"
//           screenOptions={{ headerShown: false }}
//         >
//           <Tab.Screen
//             name="Home"
//             component={HomeStack}
//             options={{
//               title: "홈",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="home" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="VideoUpload"
//             component={VideoUpload}
//             options={{
//               title: "업로드",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="upload" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Feedback"
//             component={Feedback}
//             options={{
//               title: "피드백",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="person" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Mypage"
//             component={MypageStack}
//             options={{
//               title: "마이페이지",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="person" color={color} size={size} />
//               ),
//             }}
//           />

//           <Tab.Screen
//             name="signIn"
//             component={SignInStack}
//             options={{
//               title: "로그인",
//               tabBarIcon: ({ color, size }) => (
//                 <Icon name="person" color={color} size={size} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//         ) : (
//       <Stack.Navigator initialRouteName="signIn">
//         <Stack.Screen
//           name="signIn"
//           component={SignIn}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen name="home" component={Home} />
//         <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
//       </Stack.Navigator>
//       )}

//       </NavigationContainer>
//     </Provider>
//   );
// }
