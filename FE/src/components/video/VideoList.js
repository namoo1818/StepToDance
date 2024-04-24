import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getGuideList } from "../../api/GuideApis";

export default function VideoList() {
  const [guideList, setGuideList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchGuideData = async () => {
      try {
        const data = await getGuideList();
        setGuideList(data);
      } catch (error) {
        console.error('Error fetching guide data:', error);
      }
    };

    fetchGuideData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("GuideDetail", { guideId: item.id })}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={guideList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}