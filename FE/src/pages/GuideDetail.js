import React, { useEffect } from "react";
import { Text, StyleSheet, Button, View, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Video, ResizeMode } from 'expo-av';
import { SafeAreaView } from 'react-native';

function GuideDetail({ navigation, route }) {
  const { id, song_title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      // Optionally set navigation options here
    });
  }, [navigation]);

  const getVideoSource = () => {
    if (song_title === "Smoke") {
      return require("../assets/Bada_Smoke.mp4");
    }
    return null;
  };

  const videoSource = React.useMemo(getVideoSource, [song_title]);

  const { width } = Dimensions.get('window'); // Get window width for dynamic sizing

  // Example for a known video dimension 1920x1080 or 1280x720 etc.
  const videoAspectRatio = 16 / 9; // Assuming your video is 16:9

  const videoStyle = React.useMemo(() => ({
    width: width, // Use full width of the screen
    height: width / videoAspectRatio, // Calculate height based on the aspect ratio
  }), [width]);

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.scrollView}>
      <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
        <Button style={styles.ButtonText}title="뒤로가기" onPress={() => navigation.goBack()} />
        <Text style={styles.text}>가이드 영상 상세 화면 {id}</Text>
        {videoSource && (
          <View style={styles.videoContainer}>
            <Video
              source={videoSource}
              style={videoStyle}
              resizeMode={ResizeMode.CONTAIN} // Ensure the entire video is visible
              shouldPlay
              useNativeControls
              isLooping
            />
            <Button title="영상 촬영" onPress={() => navigation.goBack()} />
          </View>
        )}
      </LinearGradient>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    flex: 1,
  },
  ButtonText : {
    fontSize: 32,
    marginTop: 30,
    fontWeight: 'bold'
  },
  root: {
    flex: 1,
  },
  text: {
    color: 'white',
    padding: 10,
    marginTop: 30,
    textAlign: 'center', // Ensure text is centered if needed
  },
  videoContainer: {
    width: '100%', // Ensure the container takes full width
    height: 'auto', // Height should adjust based on the aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  }
});

export default GuideDetail;
