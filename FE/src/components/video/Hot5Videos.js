import React from "react";
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "./Carousel";

const thumbnail = require("../../assets/thumbnail.png");
const screenWidth = Math.round(Dimensions.get('window').width);
const guideList = [
    {
      id: 1,
      video_url: "https://example.com/guide_video_1",
      thumbnail_img_url: "guide1_thumbnail.png",
      song_title: "Yesterday",
      singer: "The Beatles",
      genre: "Rock",
      rank: 1,
      uploader: "user123",
      count_feedback: 5,
      created_at: "2024-04-15T08:00:00Z",
    },
    {
      id: 2,
      video_url: "https://example.com/guide_video_2",
      thumbnail_img_url: "guide2_thumbnail.png",
      song_title: "Shape of You",
      singer: "Ed Sheeran",
      genre: "Pop",
      rank: 2,
      uploader: "user456",
      count_feedback: 3,
      created_at: "2024-04-14T10:30:00Z",
    },
    {
      id: 3,
      video_url: "https://example.com/guide_video_3",
      thumbnail_img_url: "guide3_thumbnail.png",
      song_title: "Bohemian Rhapsody",
      singer: "Queen",
      genre: "Rock",
      rank: 3,
      uploader: "user789",
      count_feedback: 7,
      created_at: "2024-04-13T15:45:00Z",
    },
    {
      id: 4,
      video_url: "https://example.com/guide_video_4",
      thumbnail_img_url: "guide4_thumbnail.png",
      song_title: "Yesterday",
      singer: "The Beatles",
      genre: "Rock",
      rank: 4,
      uploader: "user123",
      count_feedback: 5,
      created_at: "2024-04-15T08:00:00Z",
    },
    {
      id: 5,
      video_url: "https://example.com/guide_video_5",
      thumbnail_img_url: "guide5_thumbnail.png",
      song_title: "Yesterday",
      singer: "The Beatles",
      genre: "Rock",
      rank: 5,
      uploader: "user123",
      count_feedback: 5,
      created_at: "2024-04-15T08:00:00Z",
    },
  ];
export default function Hot5Videos(){
  const navigation = useNavigation();
  const _renderItem = ({ item }) => (
    <TouchableOpacity style={styles.slide} onPress={()=>{navigation.navigate("GuideDetail", item)}} key={item.id}>
      <Image source={thumbnail} style={styles.image} />
      <Text style={styles.text}> {item.rank}위 {item.song_title} - {item.singer}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOT 5</Text>
      <Carousel gap={16} offset={36} pages={guideList} pageWidth={screenWidth}/>
      {/* <Carousel
        layout={"stack"}
        data={guideList}
        sliderWidth={300}
        itemWidth={300}
        renderItem={_renderItem}
        loop={true}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
  text: {
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
  },
});