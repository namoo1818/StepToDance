import React from "react";
import {View, Text, TextInput, StyleSheet } from "react-native";

export default function SearchBar(){
    const [text, setText] = React.useState('');

    const onChangeText = (payload) => {
        setText(payload);
    }

    const onSumit = () => {
        if(text===""){
            return;
        }
        setText("");
    };


    return(
        <View>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text} onSubmitEditing={onSumit} returnKeyType="done" placeholder="노래 검색"/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        paddingVertical:15,
        paddingHorizontal: 20,
        borderRadius:30,
        marginTop:10,
        fontSize:18,
    }
})