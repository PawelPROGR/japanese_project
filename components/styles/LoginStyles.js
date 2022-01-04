import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export const LoginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292929',
    },
    containerIn: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: '80%',
        position: 'relative',
        //backgroundColor: '#EAC3AB',
    },
    input: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 0,
        fontSize: 14,
        backgroundColor: '#353535',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0
        },
    },
    inputMarginBottom: {
        marginBottom: 7,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    button: {
        backgroundColor: '#353535',
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 8,
        color: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 0
        },
        width: '100%',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
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
        color: '#FF8B00',
        fontWeight: '700',
        fontSize: 14
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
        color: '#FF8B00',
        fontSize: 14,
        paddingTop: 15
    },
    ContainerPassword_Forgot: {
        //backgroundColor: '#EAC3AB',
    }
})