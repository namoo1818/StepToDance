import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from './Carousel';

const screenWidth = Math.round(Dimensions.get('window').width);
const guideList = [
  {
    id: 1,
    video_url: 'https://example.com/guide_video_1',
    thumbnail_img_url: require('../../assets/thumbnail.png'),
    song_title: 'Yesterday',
    singer: 'The Beatles',
    genre: 'Rock',
    rank: 1,
    uploader: 'user123',
    count_feedback: 5,
    created_at: '2024-04-15T08:00:00Z',
  },
  {
    id: 2,
    video_url: 'https://example.com/guide_video_2',
    thumbnail_img_url: require('../../assets/thumbnail.png'),
    song_title: 'Shape of You',
    singer: 'Ed Sheeran',
    genre: 'Pop',
    rank: 2,
    uploader: 'user456',
    count_feedback: 3,
    created_at: '2024-04-14T10:30:00Z',
  },
  {
    id: 3,
    video_url: 'https://example.com/guide_video_3',
    thumbnail_img_url: require('../../assets/thumbnail.png'),
    song_title: 'Bohemian Rhapsody',
    singer: 'Queen',
    genre: 'Rock',
    rank: 3,
    uploader: 'user789',
    count_feedback: 7,
    created_at: '2024-04-13T15:45:00Z',
  },
  {
    id: 4,
    video_url: 'https://example.com/guide_video_4',
    thumbnail_img_url: require('../../assets/thumbnail.png'),
    song_title: 'Yesterday',
    singer: 'The Beatles',
    genre: 'Rock',
    rank: 4,
    uploader: 'user123',
    count_feedback: 5,
    created_at: '2024-04-15T08:00:00Z',
  },
  {
    id: 5,
    video_url: 'https://example.com/guide_video_5',
    thumbnail_img_url: require('../../assets/thumbnail.png'),
    song_title: 'Yesterday',
    singer: 'The Beatles',
    genre: 'Rock',
    rank: 5,
    uploader: 'user123',
    count_feedback: 5,
    created_at: '2024-04-15T08:00:00Z',
  },
];

export default function Hot5Videos() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // const renderItem = ({ item }) => (
  //   <View style={styles.slide}>
  //     <Image source={item.thumbnail_img_url} style={styles.image} />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HOT 5</Text>
      <Carousel
        // renderItem={renderItem}
        gap={16}
        offset={36}
        pages={guideList}
        pageWidth={screenWidth - (16 + 36) * 2}
        onPageChange={handlePageChange}
      />
      <Text style={styles.text}>
        {guideList[currentPage].rank}위 {guideList[currentPage].song_title} - {guideList[currentPage].singer}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'floralwhite',
    borderRadius: 5,
    height: 250,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    color: 'white',
    margin: 20,
  },
  text: {
    color: 'white',
  },
  image: {
    // width: 200,
    // height: 200,
  },
});
