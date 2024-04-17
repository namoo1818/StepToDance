import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from "react-native";
import SearchResultList from "../components/video/SearchResultList";
import SearchBar from "../components/video/SearchBar";

export default function SearchResult({navigation, route}){
    return (
        <View style={styles.root}>
            <SearchBar params={route.params}/>
            <ScrollView>
                <SearchResultList/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
      flex:1,
      backgroundColor:'black',
    },
  });