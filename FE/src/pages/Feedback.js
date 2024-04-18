import React, { useEffect, useState, useCallback, useRef } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import Video, {VideoRef} from 'react-native-video'
import YoutubePlayer from "react-native-youtube-iframe";

function Feedback({ navigation, route }) {
  const guide = route.params;
  const videoRef = useRef<VideoRef>(null);

  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    navigation.setOptions({
    });
  }, []);

  return (
    <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <Text style={styles.text}>피드백 화면</Text>
        <View>
          <YoutubePlayer
          height={250}
          width={400}
          play={playing}
          videoId={"hP-ijKLYLR8"}
          onChangeState={onStateChange}
          />
          <YoutubePlayer
          height={250}
          width={400}
          play={playing}
          videoId={"MiNvonMuK94"}
          onChangeState={onStateChange}
          />
          <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
        </View>
        <Text style={styles.text}>SCORE</Text>
        <Text style={styles.text}>90</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
  },
  container : {
    alignItems:'center'
  },
  text: {
    color:'white',
    fontSize:20,
  }
});

export default Feedback;