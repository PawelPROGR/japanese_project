import { useNavigation } from '@react-navigation/native';
import React, { useState, useCallback } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { AuthContext } from './context'; // !

const registerScreen = () => {
    const [user, setUser] = useState({ email: '', password: '', confirmPassowrd: '', name: '', userName: '' });
    const [InputText, setInputText] = useState('')

    const { signIn } = React.useContext(AuthContext);

    const navigation = useNavigation();

    const handleSignUp = () => {
        {
            user.confirmPassowrd === user.password && user.email !== '' && user.password !== '' && user.confirmPassowrd !== '' & user.name !== '' & user.useName !== '' ?
                (
                    // Alert.alert('user', user, [
                    //     { text: 'Okay' }
                    // ]),
                    console.log(user),
                    signIn(user.email, user.password, 'RegisterIn')
                )
                :
                Alert.alert('Пароли не совпадают', 'Введите пароль снова', [
                    { text: 'Okay' }
                ]),
                console.log(user);
        }
    }

    const handleLoginIn = () => {
        navigation.navigate("Login");
    };

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff" }}>
            <KeyboardAvoidingView
                style={styles.containerIn}
                behavior={Platform.OS === "ios" ? "padding" : 1000}
            >
                <View style={{ alignItems: 'center' }}><Text style={styles.RegisterText}>Register</Text></View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor={'#B7B6BB'}
                        name='name'
                        onChangeText={(text) => setUser({ ...user, name: text })}
                        style={[styles.input, styles.inputMarginBottom]}
                    />
                    <TextInput
                        placeholder="Username"
                        placeholderTextColor={'#B7B6BB'}
                        name='userName'
                        onChangeText={(text) => setUser({ ...user, userName: text })}
                        style={[styles.input, styles.inputMarginBottom]}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor={'#B7B6BB'}
                        name='email'
                        onChangeText={(text) => setUser({ ...user, email: text })}
                        style={[styles.input, styles.inputMarginBottom]}
                    />
                    <View>
                        <TextInput
                            placeholder="Password"
                            name='password'
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            style={[styles.input, styles.inputMarginBottom]}
                            secureTextEntry
                        />
                        <TextInput
                            placeholder="Confirm password"
                            name='confirmPassowrd'
                            onChangeText={(text) => setUser({ ...user, confirmPassowrd: text })}
                            style={[styles.input, styles.inputMarginBottom]}
                            secureTextEntry
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Submit</Text>
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
            </KeyboardAvoidingView>
        </View>
    )
}

export default registerScreen;

const styles = StyleSheet.create({
    RegisterText: {
        marginTop: 110,
        marginBottom: 33,
        fontFamily: 'RobotoBold',
        fontSize: 28,
        color: '#4596EC',
        // backgroundColor: 'yellow'
    },
    inputContainer: {
        width: '80%',
        position: 'relative',
    },
    containerIn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
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
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14
    },
    container: {
        marginBottom: 16
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
    LogInHundle: {

    }

})
