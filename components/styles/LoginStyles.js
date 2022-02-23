import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const LoginStyles = StyleSheet.create({
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
})