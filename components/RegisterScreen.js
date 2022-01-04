import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
//import { auth } from '../firebase';
import {LoginStyles} from './styles/LoginStyles';


const registerScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [prop, setprop] = useState('Send the code to email')

    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate("Main");
    }

    const handleLogin = () => {
        if (prop === 'Login')
        {
            //navigation.navigate("Login");
        }
        setprop('Login')
    }

    return (
        <KeyboardAvoidingView
        style={LoginStyles.containerIn}
        behavior="padding"
        >
            <View style={LoginStyles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={[LoginStyles.input, LoginStyles.inputMarginBottom]}
                />
                <View style={LoginStyles.ContainerPassword_Forgot}>
                    <TextInput
                        placeholder="Code"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={LoginStyles.input}
                        secureTextEntry
                    />
                </View>
            </View>
            <View style={LoginStyles.buttonContainer}> 
                <TouchableOpacity
                        onPress={prop == "Login" ? () => navigation.navigate("Login") : handleLogin}
                        style={LoginStyles.button}
                    >
                    <Text style={LoginStyles.buttonText}>{prop}</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default registerScreen;

const styles = StyleSheet.create({
    
})
