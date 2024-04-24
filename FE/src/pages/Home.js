import React from "react";
import {View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import SearchBar from "../components/video/SearchBar";
import VideoList from "../components/video/VideoList";
import Hot5Videos from "../components/video/Hot5Videos";
import { SafeAreaView } from 'react-native';


function Home(){
    return(
      <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
        <SearchBar/>
        <Hot5Videos/>
        <VideoList/>
      </LinearGradient>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
      flex:1,
    },
    safeArea: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
  });

export default Home;