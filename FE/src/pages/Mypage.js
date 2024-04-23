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

const Mypage = ({ navigation, route }) => {
  const signOut = () => {
    firebaseSignOut(auth)
      .then(() => {
        console.log("Signed out successfully!");
        // Optionally navigate to the login screen
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const goToVideoList = () => {
    navigation.navigate("VideoListScreen");
  };

  return (
    <LinearGradient colors={["#0B1238", "#286ECA"]} style={styles.mainView}>
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
      <TouchableOpacity onPress={signOut} style={styles.Button}>
        <Text style={styles.ButtonText}>로그아웃</Text>
      </TouchableOpacity>
      <View style={styles.view4}>
        <View style={styles.view5}>
          <Image
            resizeMode="auto"
            source={require("../assets/images/ProfileImage.png")}
            style={styles.image2}
          />
          <Text style={styles.pageCenter}>
            김싸피{'\n'}{/* '\n' creates a new line */}
            RANK 9999{'\n'}
            1점
            </Text>
        </View>
      </View>
      <TouchableOpacity onPress={goToVideoList}>
        <Text style={styles.moreText}>더보기</Text>
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
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    padding: "32px 0 12px",
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
    fontWeight: "950",
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
    width: "100%",
    paddingLeft: 18,
    paddingRight: 18,
    marginTop: 200,
  },
  videoContainer: {
    flexDirection: "row",
  },
  videoImage: {
    width: 150, // Smaller width
    height: 100, // Adjusted height
    borderRadius: 15, // Smaller border radius
    marginRight: 10, // Space between images
  },
  moreText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginbottom: -80,
    marginLeft: 300,
  },
});

export default Mypage;
