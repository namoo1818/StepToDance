import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

function GuideDetail({ navigation, route }) {
  const { guide } = route.params;

  useEffect(() => {
    console.log("Guide Title:", guide.song_title);
    navigation.setOptions({
      title: guide.song_title,
    });
  }, []);

  return (
    <View>
      <Text>가이드 영상 상세 화면</Text>
      <Text>Song Title: {guide.song_title}</Text>
    </View>
  );
}

export default GuideDetail;
