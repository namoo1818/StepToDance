import React from "react";
import {View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import SearchBar from "../components/video/SearchBar";
import VideoList from "../components/video/VideoList";
import Hot5Videos from "../components/video/Hot5Videos";


function Home(){
    return(
      <View style={styles.root}>
        <SearchBar/>
        <ScrollView>
            <Hot5Videos/>
            <VideoList/>
        </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    root: {
      flex:1,
      backgroundColor:'black',
    },
  });

export default Home;