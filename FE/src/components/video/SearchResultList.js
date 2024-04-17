import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const guideList = [{
    "id": 1,
    "video_url": "https://example.com/guide_video_1",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Yesterday",
    "singer": "The Beatles",
    "genre": "Rock",
    "rank": 1,
    "uploader": "user123",
    "count_feedback": 5,
    "created_at": "2024-04-15T08:00:00Z"
},
{
    "id": 2,
    "video_url": "https://example.com/guide_video_2",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Shape of You",
    "singer": "Ed Sheeran",
    "genre": "Pop",
    "rank": 2,
    "uploader": "user456",
    "count_feedback": 3,
    "created_at": "2024-04-14T10:30:00Z"
},
{
    "id": 3,
    "video_url": "https://example.com/guide_video_3",
    "thumbnail_img_url": "../../assets/thumbnail.png",
    "song_title": "Bohemian Rhapsody",
    "singer": "Queen",
    "genre": "Rock",
    "rank": 3,
    "uploader": "user789",
    "count_feedback": 7,
    "created_at": "2024-04-13T15:45:00Z"
}
];

export default function SearchResultList(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {guideList.length>0?
            (Object.keys(guideList).map((key)=> (
                <TouchableOpacity style={styles.guide} onPress={()=>{navigation.navigate("GuideDetail", guideList[key])}} key={key}>
                    <Image style={styles.image} source={require("../../assets/thumbnail.png")} />
                    <Text style={styles.text}>{guideList[key].song_title} - {guideList[key].singer}</Text>
                </TouchableOpacity>
            ))):(<Text style={styles.text}>검색 결과가 없습니다.</Text>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text :{
        color:'white',
        fontSize:20,
        margin:10,
        textAlignVertical: 'center',
    },
    image : {
        width: 100,
        height: 100,
    },
    guide:{
        flexDirection: 'row',
        marginTop:10,
        marginBottom:10,
    },
})