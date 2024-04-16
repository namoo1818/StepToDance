import React from "react";
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card({content, navigation}){
    return(
        <TouchableOpacity style={style.card} onPress={()=>{navigation.navigate('GuideDetail',contnet)}}>
            <Image style={styles.cardImage} source={require("../../assets/thumbnail.png")}/>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        marginTop:10,
        marginBottom:10,
    },
    image : {
        width: 100,
        height: 100,
    },
    text :{
        color:'white',
        fontSize:20,
        margin:10,
        textAlignVertical: 'center',
    },
})