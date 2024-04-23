import React from "react";
import { Text,View,ActivityIndicator,StyleSheet } from "react-native";
import { Overlay } from 'react-native-elements';
import SuccessIcon from 'react-native-vector-icons/MaterialIcons';

const FormSuccess = (props) => {
    return(
        props.successMessage?
        <Overlay
            overlayStyle={styles.Overlay}
            isVisible={true}
            onBackdropPress={()=>props.close('')}
            >
            <View style={styles.successContent}>
                <SuccessIcon name="check-circle" size={60} color={'#2FBBF0'}/>
                <Text style={styles.successMessage}>{props.successMessage}</Text>
            </View>
        </Overlay>
        :
        <Overlay
            overlayStyle={styles.Overlay}
            isVisible={true}
            >
            <ActivityIndicator 
            size={"large"}
            color={"#2FBBF0"}/>
        </Overlay>
    )
}
const styles = StyleSheet.create({
    Overlay: {
        width: '90%',
        height: 320,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    successContent: {
        alignItems: 'center',
        padding: 20,
    },
    successMessage: {
        color: '#black',
        textAlign: 'center',
        marginTop: 20,
    },
});
export default FormSuccess;