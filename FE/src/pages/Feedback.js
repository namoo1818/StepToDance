import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { Video, ResizeMode } from 'expo-av';
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from 'react-native';
import { getFeedbackDetail } from "../api/FeedbackApis";

function Feedback({ navigation, route }) {
  const guide = route.params;
  const guideVideo = useRef(null);
  const myVideo = useRef(null);
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(true);
  const [data, setData] = useState({});


  // const data = {
  //   feedback: {
  //     id: 1,
  //     score: 90,
  //     videoUrl: require('../assets/guide.mp4'),
  //     guideUrl: require('../assets/myVideo.mp4')
  //   },
  //   incorrectSectionList: [
  //     {startAt:'0:00'},
  //     {startAt:'0:05'},
  //     {startAt:'0:10'},
  //   ],
  // }

  useEffect(() => {
    const fetchFeekbackData = async () => {
      try {
        const data = await getFeedbackDetail();
        console.log(data.data);
        setData(data.data);
      } catch (error) {
        console.error('Error fetching feekback data:', error);
      }
    };
    fetchFeekbackData();
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      guideVideo.current.pauseAsync();
      myVideo.current.pauseAsync();
    } else {
      guideVideo.current.playAsync();
      myVideo.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const moveTime = (time) => {
    const [minutes, seconds] = time.split(':').map(Number);
    const totalSeconds = minutes * 60 + seconds;
    if (guideVideo.current && myVideo.current) {
      guideVideo.current.setPositionAsync(totalSeconds * 1000); 
      myVideo.current.setPositionAsync(totalSeconds * 1000);
      guideVideo.current.playAsync();
      myVideo.current.playAsync();
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
    <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <Text style={styles.text}>SCORE</Text>
        <Text style={styles.score}>90</Text>
        <View style={styles.videoList}>
          {/* <Video
              ref={guideVideo}
              style={styles.video}
              source={data.feedback.videoUrl}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              shouldPlay={isPlaying}
              isMuted={true}
              isLooping
              onPlaybackStatusUpdate={newStatus => setStatus(newStatus)}
            />
          <Video
            ref={myVideo}
            style={styles.video}
            source={data.feedback.guideUrl}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay={isPlaying}
            isLooping
            onPlaybackStatusUpdate={newStatus => setStatus(newStatus)}
          /> */}
          </View>
        <TouchableOpacity onPress={togglePlayPause}>
          <Text style={styles.text}>{isPlaying ? '정지' : '재생'}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>오답 구간</Text>
        {data.incorrectSectionList && data.incorrectSectionList.length > 0 && (
          data.incorrectSectionList.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => moveTime(item.startAt)}>
              <Text style={styles.text}>{item.startAt}</Text>
            </TouchableOpacity>
          ))
        )}

      </View>
    </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0B1338',
  },
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
