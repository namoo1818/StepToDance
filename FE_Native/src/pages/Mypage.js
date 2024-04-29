import React from "react";
import {
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from "../store/UserSlice";


const Mypage = ({ navigation, route }) => {
  
  const user = useSelector(state => state.user);
  console.log(user.nickname, user.profileImgUrl);
  const dispatch = useDispatch();
  
  const signOut = async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      console.log(accessToken)
      const requestTokenUrl = "https://k10a101.p.ssafy.io/api/v1/auth/logout";
      const response = await axios.post(requestTokenUrl, {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
  
      if (response.status === 204) {
        console.log("Logout successful:", response.data.message);
        await AsyncStorage.removeItem('accessToken');
        await AsyncStorage.removeItem('refreshToken');
        dispatch(logout());  // Reset Redux state to initial

      }
    } catch (error) {
      // 에러 정보를 출력할 때 에러 객체의 내용을 확인할 수 있도록 수정
      console.error("Error logging out:", error.response ? error.response.data.message : error.message);
    }
  };
  


  const goToVideoList = () => {
    navigation.navigate("VideoListScreen");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <LinearGradient colors={["#0B1238", "#286ECA"]} style={styles.mainView}>
    <Image
      resizeMode="contain"
      source={{ uri: user.profileImgUrl}}
      style={styles.profileImage}
    />
      <View style={styles.view2}>
        <Image
          resizeMode="auto"
          source={{
            uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/80a342fa41b06f49eb4ae5a6b364aa90a2f6e483cd7b5cb338a70bcb93d9e50b?",
          }}
          style={styles.logo}
        />
        <View style={styles.myPageView}>
          <Text style={styles.myPageText}>MYPAGE</Text>
        </View>
      </View>
      <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>로그아웃</Text>
        </TouchableOpacity>
      <View style={styles.view4}>
        <View style={styles.view5}>
          <Image
            resizeMode="auto"
            source={require("../assets/images/ProfileImage.png")}
            style={styles.image2}
          />
        </View>
        <View style={styles.headerView}>
          <Text style={styles.username}>{user.nickname || "No Name"}</Text>
          <Text style={styles.rankAndPoints}>RANK 9999{'\n'}1 point</Text>
        </View>
      </View>
      <TouchableOpacity onPress={goToVideoList} style={styles.moreButton}>
          <Text style={styles.moreButtonText}>더보기</Text>
        </TouchableOpacity>
      <ScrollView horizontal={true} style={styles.videoScroll}>
        <View style={styles.videoContainer}>
          {/* Example images repeated; replace with actual image sources */}
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
            }}
            style={styles.videoImage}
          />
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
            }}
            style={styles.videoImage}
          />
          <Image
            resizeMode="auto"
            source={{
              uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d0d802c93619d330c11a6b36e3d6ff9e8575ab8dfa07e52cc8d66e9572f88d6?",
            }}
            style={styles.videoImage}
          />
        </View>
      </ScrollView>
    </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B1238',
  },
  mainView: {
    flex: 1,
    alignItems: "center",
    padding: "32px 0 12px",
  },
  headerView: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 100,
    position: 'absolute',
    borderRadius: 150, // Circular profile image
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 110,
  },
  rankAndPoints: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#0B1238',
    fontSize: 16,
    fontWeight: '600',
  },
  moreButton: {
    marginTop: 10,
    marginLeft: 250
  },
  moreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  Button: {
    width: "90%",
    color: "#fff",
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
  },
  ButtonText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  view2: {
    display: "flex",
    width: "100%",
    alignItems: "stretch",
    gap: 20,
    fontSize: 35,
    color: "#FFF",
    fontWeight: "900",
    whiteSpace: "nowrap",
  },
  logo: {
    position: "relative",
    width: 94,
    flexShrink: 0,
    aspectRatio: "1.52",
    marginTop: 20,
  },
  myPageView: {
    marginRight: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  myPageText: {
    fontFamily: "Inter",
    fontStyle: "italic",
    alignSelf: "end",
    color: "white",
    fontSize: 35,
    fontWeight: "950",
    marginTop: -60,
    marginRight: 30,
  },
  pageCenter: {
    fontFamily: "Inter",
    fontStyle: "italic",
    fontSize: 35,
    position: 'absolute',
    fontWeight: "950",
    marginTop: 60,
    color: "white",
    textAlign: "center",
  },
  view4: {
    display: "flex",
    marginTop: 122,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "0 18px",
  },
  view5: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
  },
  image2: {
    height: 200,
    width: 180,
    borderRadius: 30,
  },
  videoScroll: {
    flexDirection: "row",
    width: "90%",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 20,
  },
  videoContainer: {
    flexDirection: "row",
  },
  videoImage: {
    width: 150, 
    height: 150,
    marginRight: 10, // Space between images
  },
});

export default Mypage;
