import React from "react";
import {View, Text, Button, StyleSheet, ScrollView} from "react-native";
import SearchResultList from "../components/video/SearchResultList";
import SearchBar from "../components/video/SearchBar";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from 'react-native';

export default function SearchResult({navigation, route}){
    return (
        <SafeAreaView style={styles.safeArea}>
        <LinearGradient colors={['#0B1338', '#0B1338', '#245DA5']} style={styles.root}>
            <SearchBar params={route.params}/>
            <ScrollView>
                <SearchResultList/>
            </ScrollView>
        </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0B1338',
      },
    root: {
      flex:1,
    },
  });