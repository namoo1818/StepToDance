import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const guideList = [
  {
    "id": 1,
    "video_url": "https://example.com/guide_video_1",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Yesterday",
    "singer": "The Beatles",
    "genre": "Rock",
    "rank": 1,
    "uploader": "user123",
    "count_feedback": 5,
    "created_at": "2024-04-15T08:00:00Z"
  },
  {
    "id": 2,
    "video_url": "https://example.com/guide_video_2",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Shape of You",
    "singer": "Ed Sheeran",
    "genre": "Pop",
    "rank": 2,
    "uploader": "user456",
    "count_feedback": 3,
    "created_at": "2024-04-14T10:30:00Z"
  },
  {
    "id": 3,
    "video_url": "https://example.com/guide_video_3",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Bohemian Rhapsody",
    "singer": "Queen",
    "genre": "Rock",
    "rank": 3,
    "uploader": "user789",
    "count_feedback": 7,
    "created_at": "2024-04-13T15:45:00Z"
  }
];

export default function VideoList() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.guide} onPress={() => navigation.navigate("GuideDetail", item)}>
      <Image style={styles.image} source={require("../../assets/thumbnail.png")} />
      <Text style={styles.text}>{item.song_title} - {item.singer}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>민지님이 좋아하는 케이팝 안무</Text>
      <FlatList
        data={guideList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlignVertical: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  guide: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});
