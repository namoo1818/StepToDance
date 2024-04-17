import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

function Feedback({ navigation, route }) {
  const guide = route.params;

  useEffect(() => {
    navigation.setOptions({
    });
  }, []);

  return (
    <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
      <Button title="뒤로가기" onPress={()=>navigation.goBack()}/>
      <View style={styles.container}>
        <Text style={styles.text}>피드백 화면</Text>
        <Text style={styles.text}>SCORE</Text>
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