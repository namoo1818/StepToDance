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
    width: '100%', // 페이지의 전체 너비를 차지하도록 설정
    aspectRatio: 1 / 1, // 페이지의 가로 세로 비율을 설정하여 가로 방향으로 스크롤되도록 함
    backgroundColor: 'white', // 페이지의 배경색을 설정 (필요에 따라 변경 가능)
    marginHorizontal: 8, // 좌우 여백을 설정하여 페이지 간 간격을 조절
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
