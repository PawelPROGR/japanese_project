import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { LoginStyles } from './styles/LoginStyles';
import { AuthContext } from './context';
import Users from '../model/users';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = React.useContext(AuthContext);

    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // firebase auth
    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Account created!')
                const user = userCredential.user;
                console.log(user)
            })
            .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Signed in!')
                const user = userCredential.user;
                const token = user.refreshToken;
                console.log(user)
                signIn(email, password, token)
            })
            .catch(error => alert(error.message))
    }

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                //navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const loginHandle = (userName, password) => {
        const foundUser = Users.filter(item => {
            return userName == item.username && password == item.password;
        });
        if (data.username.length == 0 || data.password.length == 0) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);
            return;
        }
        if (foundUser.length == 0) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                { text: 'Okay' }
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (
        <View style={LoginStyles.container}>
            <KeyboardAvoidingView
                style={LoginStyles.containerIn}
                behavior="padding"
            >
                <View style={LoginStyles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'#A4A4A4'}
                        //onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        style={[LoginStyles.input, LoginStyles.inputMarginBottom]}
                        autoCapitalize="none"
                        onChangeText={text => setEmail(text)}
                    />
                    <View style={styles.ContainerPassword_Forgot}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'#A4A4A4'}
                            style={LoginStyles.input}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity
                            onPress={() => null}
                            style={LoginStyles.buttonFORGOT}
                        >
                            <Text style={LoginStyles.buttonTextFORGOT}>Forgot?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={LoginStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={[LoginStyles.button, LoginStyles.buttonOutline]}
                    >
                        <Text style={LoginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={LoginStyles.button}
                    >
                        <Text style={LoginStyles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default LoginScreen;