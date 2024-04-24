import React, { useEffect, useRef, useState } from 'react';
import { 
    Text, 
    View,
    StyleSheet,
    Animated, 
    TextInput,
    TouchableOpacity,
    Image
    } 
    from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { KAKAO_AUTH_URL } from '../contexts/OAuth';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [displayFormErr, setDisplayFormErr] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const fadeAnim = useRef(new Animated.Value(1)).current;  
    const colorAnim = useRef(new Animated.Value(0)).current; 
    function navigate(){
        navigation.navigate("signUp")
    }

    const handleKakaoLogin = () => {
        navigation.navigate('WebViewScreen', { uri: KAKAO_AUTH_URL });
    };

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 3000,
                useNativeDriver: false
            }),
            Animated.timing(colorAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false
            })
        ]).start();
    }, []);

    const barWidth = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', '50%'] // 너비가 50%에서 0%로 줄어듬
    });

    const barColor = colorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['blue', 'white'] // 색상이 파란색에서 흰색으로 변함
    });

    const validateInput = () => {
        var form_input = [email,password];
        
        if(form_input.includes('') || form_input.includes(undefined)){
            setErrorMessage('Please Fill in all fields')
            return setDisplayFormErr(true);
        }
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            setIsLoading(false)
            console.log('로그인 됨')

        })
        .catch(err =>{
            console.log(err)
            setErrorMessage(err.message)
            setIsLoading(false)
            return setDisplayFormErr(true);
        
        })
    }
    return (
        <View style={styles.mainView}>
            <LinearGradient
                colors={['black', '#737373']}
                style={styles.gradientView}>
                <Animated.View style={{ width: barWidth, height: 20, backgroundColor: barColor }} />
                <Text style={styles.appTitle}>STEP</Text>
            </LinearGradient>
            <View style={styles.middleView}>
                <Text style={styles.appSubtitle}>TO</Text>
            </View>
            <LinearGradient
                colors={['#737373', 'black']}
                style={styles.gradientView}>
                <Text style={styles.appTitle}>DANCE</Text>
            </LinearGradient>
            <View
            style={styles.BottomView}>
                <Text style={styles.Heading}>
                    Welcome{'\n'}
                    Back
                </Text>
                <View style={styles.FormView}>
                    <TextInput
                    value={email} onChangeText={(val => setEmail(val))}
                    placeholder={"Email Address"}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TextInput 
                    value={password} onChangeText={(val => setPassword(val))}
                    placeholder={"Password"}
                    secureTextEntry={true}
                    placeholderTextColor={"#fff"}
                    style={styles.TextInput}/>
                    <TouchableOpacity style={styles.Button} onPress={handleKakaoLogin}>
                        <Image
                        source={require('../assets/images/kakao_login_medium_narrow.png')} // 카카오 로그인 버튼 이미지 파일 경로
                        style={styles.kakaoLoginButton}
                    />
                    </TouchableOpacity>
                </View>
                {/* <TouchableOpacity 
                style={styles.TextButton}
                onPress={navigate}>
                    <Text style={styles.SignUpText}>
                        회원 가입
                    </Text>
                </TouchableOpacity> */}
            </View>
            {/* {displayFormErr == true?
            <FormError 
            hideErrOverlay={setDisplayFormErr}
            err={errorMessage}
            />
            :
            null
            }
            {isLoading == true?
            <FormSuccess/>
            :
            null

            } */}
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    gradientView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    middleView: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        backgroundColor: '#737373'
    },
    appTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },
    appSubtitle: {
        fontSize: 20,
        color: 'white',
    },
    BottomView: {
        width: '100%',
        height: "30%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    ImageStyle: {
        width: '60%',
        resizeMode:'contain'
    },
    Heading: {
        color:'#fff',
        fontSize: 36,
        fontWeight:'bold',
        marginLeft:30,
        marginTop: 60
    },
    FormView : {
        width:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 40
    },
    TextInput : {
        width:'90%',
        borderWidth: 1,
        borderColor: '#fff',
        height: 22,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
        marginLeft: 15,
        color:'#fff'
    },
    Button : {
        width: '90%',
        height: 32, 
        borderRadius: 10,
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    ButtonText: {
        fontWeight: 'bold',
        fontSize: 18
    },
    SignUpText:{
        color:'gray',
    },
    TextButton: {
        width: '100%',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        marginTop: 20
    },
    kakaoLoginButton: {
        width: 200,
        height: 45,
        resizeMode: 'contain' // 이미지 비율 유지
    }
});

export default SignIn;