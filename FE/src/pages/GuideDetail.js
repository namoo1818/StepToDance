import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";

function GuideDetail({ navigation, route }) {
  const guide = route.params;

  useEffect(() => {
    navigation.setOptions({
    });
  }, []);

  return (
    <View style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <Text style={styles.text}>가이드 영상 상세 화면 {guide.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:'black',
  },
  text: {
    color:'white'
  }
});

export default GuideDetail;
