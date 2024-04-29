import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Overlay } from 'react-native-elements';
import ErrorIcon from 'react-native-vector-icons/MaterialIcons';

const FormError = (props) => {
    return (
        <Overlay
            overlayStyle={styles.Overlay}
            isVisible={true}
            onBackdropPress={()=>props.hideErrOverlay}
            >
            <View style={styles.errorContent}>
                <ErrorIcon name="error" size={60} color={'red'}/>
                <Text style={styles.errorMessage}>{props.err}</Text>
            </View>
            <TouchableOpacity 
            style={styles.Button}
            onPress={()=>props.hideErrOverlay(false)}>
                <Text style={styles.buttonText}>Okay</Text>
            </TouchableOpacity>
        </Overlay>
    );
};

const styles = StyleSheet.create({
    Overlay: {
        width: '90%',
        height: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContent: {
        alignItems: 'center',
        padding: 20,
    },
    errorMessage: {
        color: '#black',
        textAlign: 'center',
        marginTop: 20,
    },
    buttonText : {
        color:'white',
    },
    Button : {
        width: 200,
        color:'#000',
        height: 51, 
        backgroundColor: '#000',
        borderRadius: 5,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
});

export default FormError;
