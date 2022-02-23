import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { AuthContext } from './context';
import { LoginStyles } from './styles/LoginStyles';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({ email: '', password: '' })

    const { signIn } = React.useContext(AuthContext);

    const navigation = useNavigation();

    const handleRegister = () => {
        navigation.navigate("Register");
    };

    const hundleForgot = () => {
        navigation.navigate("forgot");
    };

    const handleLogin = () => {
        signIn(user.email, user.password, 'RegisterIn');
        console.log(user)
    };

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });


    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <KeyboardAvoidingView
                style={LoginStyles.containerIn}
                behavior="padding"
            >
                <View style={{ alignItems: 'center' }}><Text style={LoginStyles.RegisterText}>Log in</Text></View>
                <View style={LoginStyles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'#A4A4A4'}
                        //onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        style={[LoginStyles.input, LoginStyles.inputMarginBottom]}
                        autoCapitalize="none"
                        name='email'
                        onChangeText={(text) => setUser({ ...user, email: text })}
                    />
                    <View style={LoginStyles.ContainerPassword_Forgot}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor={'#A4A4A4'}
                            style={LoginStyles.input}
                            secureTextEntry={data.secureTextEntry ? true : false}
                            autoCapitalize="none"
                            name='password'
                            onChangeText={(text) => setUser({ ...user, password: text })}
                        />
                        <TouchableOpacity
                            onPress={hundleForgot}
                            style={LoginStyles.buttonFORGOT}
                        >
                            <Text style={LoginStyles.buttonTextFORGOT}>Forgot?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={LoginStyles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleLogin}
                        style={LoginStyles.button}
                    >
                        <Text style={LoginStyles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        onPress={handleSignUp}
                        style={LoginStyles.button}
                    >
                        <Text style={LoginStyles.buttonText}>Register</Text>
                    </TouchableOpacity> */}
                </View>
                <View style={LoginStyles.container}>
                    <Text style={LoginStyles.PolicyText}>By register, you agree to our Terms, Data Policy and Cookies Policy.</Text>
                </View>
                <View style={LoginStyles.container3}>
                    <Text style={LoginStyles.LogInText}>Not a member yet?</Text>
                    <TouchableOpacity onPress={handleRegister}>
                        <Text style={[LoginStyles.LogInText, { color: '#4596EC' }]}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerIn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    inputContainer: {
        width: '80%',
        position: 'relative',
        marginBottom: 16
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 0,
        fontSize: 14,
        backgroundColor: '#F2F2F4',
        color: 'black'
        // shadowColor: "#000",
        // shadowOpacity: 0.5,
        // shadowRadius: 8,
        // color: '#FFFFFF',
        // shadowOffset: {
        //     width: 0,
        //     height: 0
        // },
    },
    inputMarginBottom: {
        marginBottom: 16,
    },
    buttonContainer: {
        width: '60%',
        marginTop: 16,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#8086B9',
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        color: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0
        },
        width: '100%',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        marginBottom: 16
    },
    buttonOutline: {
        backgroundColor: '#353535',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0
        },
        marginBottom: 10,
        borderColor: '#EAC3AB',
        borderWidth: 2,
    },
    buttonOutlineText: {
        color: '#FF8B00',
        fontWeight: '700',
        fontSize: 14
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14
    },
    container: {
        marginBottom: 16
    },
    buttonFORGOT: {
        alignItems: 'flex-end',
        //marginRight: 10,
        //backgroundColor: '#EAC3AB',
        marginLeft: 240,
        position: 'absolute',
        right: '5%',
        height: 47
    },
    buttonTextFORGOT: {
        color: '#4596EC',
        fontSize: 14,
        paddingTop: 15
    },
    ContainerPassword_Forgot: {
        //backgroundColor: '#EAC3AB',
    },
    RegisterText: {
        marginTop: 174,
        marginBottom: 33,
        fontFamily: 'RobotoBold',
        fontSize: 28,
        color: '#4596EC',
        // backgroundColor: 'yellow'
    },
    PolicyText: {
        fontSize: 10,
        color: '#A4A4A4',
        fontFamily: 'RobotoRegular'
    },
    container3: {
        flexDirection: 'row',
        // backgroundColor: 'yellow',
        marginRight: 20,
        marginLeft: 20,
    },
    LogInText: {
        fontFamily: 'RobotoBold',
        fontSize: 14,
        color: '#A4A4A4',
        marginLeft: 4
    },
});

export default LoginScreen;