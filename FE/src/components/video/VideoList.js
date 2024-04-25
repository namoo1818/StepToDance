import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getGuideList } from "../../api/GuideApis";

export default function VideoList() {
  const [guideList, setGuideList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchGuideData = async () => {
      try {
        const data = await getGuideList();
        console.log(data.data.guide_list);
        setGuideList(data.data.guide_list);
      } catch (error) {
        console.error('Error fetching guide data:', error);
      }
    };

    fetchGuideData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.guide} onPress={() => navigation.navigate("GuideDetail", item)}>
      <Image style={styles.image} source={require("../../assets/thumbnail.png")} />
      <Text style={styles.text}>{item.song_title} - {item.singer}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>민지님이 좋아하는 케이팝 안무</Text>
      <FlatList
        data={guideList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlignVertical: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  guide: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
});
