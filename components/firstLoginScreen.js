import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, TouchableOpacityBase } from 'react-native';
import { AuthContext } from './context';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { FontAwesome } from '@expo/vector-icons';
import { LoginStyles } from './styles/LoginStyles';


const firstLoginScreen = () => {

    const { signIn } = React.useContext(AuthContext);

    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const handleFacebook = () => {

    };

    const handleGoogle = () => {

    };

    const handleLoginScreen = () => {
        navigation.navigate("Register");
    };

    const handleLoginIn = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#ffffff" }}>
            <View style={styles.ImageJapan}>
                <Image
                    style={{ height: 215, resizeMode: "contain", backgroundColor: "#ffffff" }}
                    source={require('../assets/fuji.png')}
                />
            </View>
            <Text style={{ fontSize: 18, marginTop: 26, color: '#494949', marginBottom: 3 }}>JAPAN
                <Text style={{ color: 'red', fontFamily: 'RobotoBold' }}>GO</Text>
            </Text>
            <Text style={{ fontSize: 20, marginTop: 0, color: '#494949', marginBottom: 45 }}>日本語</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.Fasebook} onPress={handleFacebook}>
                    <View style={styles.styleIcon}>
                        <FontAwesome name="facebook" size={20} color="#4596EC" />
                    </View>
                    <Text style={styles.TextFasebook}>Register with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Googlis} onPress={handleGoogle}>
                    <FontAwesome name="google" size={24} color="#4596EC" />
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.WithEmail} onPress={handleLoginScreen}>
                    <Text style={styles.emailText}>Or register with email</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Text style={styles.PolicyText}>By register, you agree to our Terms, Data Policy and Cookies Policy.</Text>
            </View>
            <View style={styles.container3}>
                <Text style={styles.LogInText}>Already a member?</Text>
                <TouchableOpacity style={styles.LogInHundle} onPress={handleLoginIn}>
                    <Text style={[styles.LogInText, { color: '#4596EC' }]}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
    },
    container2: {
        flexDirection: 'column',
        // backgroundColor: 'yellow',
        marginTop: 27,
        marginRight: 20,
        marginLeft: 20,
    },
    container3: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginTop: 50,
        marginRight: 20,
        marginLeft: 20,
        flexWrap: 'wrap'
    },
    Fasebook: {
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: '#4596EC',
        borderRadius: 50,
        //paddingLeft: 20
    },
    TextFasebook: {
        fontSize: 15,
        color: 'white',
        marginLeft: 40
    },
    Googlis: {
        height: 50,
        width: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        borderRadius: 50,
        borderColor: '#4596EC',
        borderWidth: 2,
        //alignContent: 'center'
    },
    styleIcon: {
        alignItems: 'flex-start',
        marginLeft: 0,
        left: '5%',
        position: 'absolute',
        marginLeft: 0,
        backgroundColor: 'white',
        height: 32,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    ImageJapan: {
        marginTop: 71,
        justifyContent: 'center'
    },
    emailText: {
        color: '#A4A4A4',
        fontSize: 16,
        fontFamily: "RobotoBold"
    },
    WithEmail: {

    },
    PolicyText: {
        fontSize: 10,
        color: '#A4A4A4',
        fontFamily: 'RobotoRegular'
    },
    LogInText: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: '#A4A4A4',
        marginLeft: 4
    },
    LogInHundle: {

    }
});

export default firstLoginScreen;