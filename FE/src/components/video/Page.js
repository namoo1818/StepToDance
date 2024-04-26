import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Page({ item, style }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.pageItem, style]} onPress={()=>{navigation.navigate("GuideDetail", item)}} key={item.id}>
      <Image source={item.thumbnail_img_url} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: '100%', 
    aspectRatio: 1 / 1, 
    backgroundColor: 'white', 
    marginHorizontal: 8, 
  },
  pageNum: {},
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20, 
  },
  text:{
    color:'white',
  },
});
