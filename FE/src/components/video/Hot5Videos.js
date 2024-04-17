import React from "react";
import {View, Text, Image, StyleSheet } from "react-native";

const thumbnail = require("../../assets/thumbnail.png");
guide_list: [
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
    return(
        <View style={styles.container}>
            <Text style={styles.text}>HOT 5</Text>
            <Image source={thumbnail} style={{ width:200, height:300}}/>
            <Text style={styles.text}>1</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text :{
        color:'white',
        fontSize:30,
        fontWeight: "500",
        margin:20,
    },
    video:{

    }
})