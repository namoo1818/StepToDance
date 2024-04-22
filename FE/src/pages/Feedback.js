import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Video, ResizeMode } from 'expo-av';
import { TouchableOpacity } from "react-native";

function Feedback({ navigation, route }) {
  const guide = route.params;
  const guideVideo = useRef(null);
  const myVideo = useRef(null);
  const [status, setStatus] = useState({});
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setPlaying] = useState(false);
  const data = {
    feedback: {
      id: 1,
      score: 90,
      videoUrl: require('../assets/guide.mp4'),
      guideUrl: require('../assets/myVideo.mp4')
    },
    incorrectSectionList: [
      {startAt:'0:00'},
      {startAt:'0:10'},
      {startAt:'0:20'},
      {startAt:'0:30'},
    ],
  }

  useEffect(() => {
    navigation.setOptions({
    });
  }, []);

  guideVideo

  const moveTime = async (time) => {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (guideVideo.current && myVideo.current) {
      await guideVideo.current.setPositionAsync(totalSeconds * 1000); 
      // myVideo.current.setPositionAsync(totalSeconds * 1000);
    }
  }

  return (
    <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <Text style={styles.text}>SCORE</Text>
        <Text style={styles.score}>90</Text>
        <View style={styles.videoList}>
          <Video
              ref={guideVideo}
              style={styles.video}
              source={data.feedback.videoUrl}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={newStatus => setStatus(newStatus)}
            />
          {/* <Video
            ref={myVideo}
            style={styles.video}
            source={data.feedback.guideUrl}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={newStatus => setStatus(newStatus)}
          /> */}
          </View>
        
        <Text style={styles.text}>오답 구간</Text>
        {data.incorrectSectionList.map((item, index)=>(
          <TouchableOpacity key={index} onPress={() => moveTime(item.startAt)}>
            <Text style={styles.text}>{item.startAt}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
  },
  container : {
    alignItems:'center',
  },
  text: {
    color:'white',
    fontSize:20,
  },
  score:{
    color:'white',
    fontSize:50,
  },
  videoList : {
    flexDirection: 'row',
  },
  video: {
    width: '50%', 
    aspectRatio: 9/16,
    margin: 10,
  },
});

export default Feedback;
