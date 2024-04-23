import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from "react-native";
import SearchResultList from "../components/video/SearchResultList";
import SearchBar from "../components/video/SearchBar";
import { LinearGradient } from "expo-linear-gradient";

export default function SearchResult({navigation, route}){
    return (
        <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
            <SearchBar params={route.params}/>
            <ScrollView>
                <SearchResultList/>
            </ScrollView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    root: {
      flex:1,
    },
  });