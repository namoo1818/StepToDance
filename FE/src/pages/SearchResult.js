import React from "react";
import {View, Text, Button, ScrollView} from "react-native";
import VideoList from "../components/video/VideoList";

export default function SearchResult({navigation, route}){
    return (
        <View style={styles.root}>
            <SearchBar/>
            <ScrollView>
                <VideoList/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
      backgroundColor:'black',
    },
  });