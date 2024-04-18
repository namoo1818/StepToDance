import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

function GuideDetail({ navigation, route }) {
  const guide = route.params;

  useEffect(() => {
    navigation.setOptions({
    });
  }, []);

  return (
    <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <Text style={styles.text}>가이드 영상 상세 화면 {guide.id}</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
  },
  text: {
    color:'white'
  }
});

export default GuideDetail;
