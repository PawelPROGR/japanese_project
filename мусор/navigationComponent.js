import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'; 
import { TouchableHighlight } from 'react-native-gesture-handler';


//Вроде мусорный компонент
export default function NavigationComponent () {

    const navigation = useNavigation();

    const handleHome = () => {
        navigation.navigate('Home');
    }

    const handleLang = () => {
        navigation.navigate('Lang');
    }

    const handleSettings = () => {
        navigation.navigate('Settings');
    }

    let state = { active: null };
    return (
        <View style={{backgroundColor: "#B9B7B7"}}>
            <View style={styles.borderNavigation}>

                <TouchableHighlight style={styles.TB_style} onPress={ handleHome } activeOpacity={1} underlayColor="#B9B7B7">
                    <View style={styles.borderNavigationIcon}>
                        <AntDesign name="home" size={28} color='black'/>
                        <Text style={styles.textTB}>Home</Text>
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight style={styles.TB_style} onPress={ handleLang } activeOpacity={1} underlayColor="#B9B7B7"> 
                    <View style={styles.borderNavigationIcon}>
                        <MaterialIcons name="language" size={28} color='black'/>
                        <Text style={styles.textTB}>Lang</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.TB_style} onPress={ handleSettings } activeOpacity={1} underlayColor="#B9B7B7">
                    <View style={styles.borderNavigationIcon}>
                        <Feather name="settings" size={28} color='black'/>
                        <Text style={styles.textTB}>Setting</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    borderNavigation:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        height: 60,
        opacity: 0.5,
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 0,
        //width: '100%'
    },
    TB_style:{
        //paddingLeft: '33%',
        //paddingRight: '33%',
        //justifyContent: 'space-between',
        //display: 'flex',
        alignItems: 'center',
        //backgroundColor: 'yellow',
        paddingLeft: '11%',
        paddingRight: '11%',
        width: '100%',
        height: '100%',
        paddingBottom: 5,
        paddingTop: 5
    },
    textTB: {
        //color: "black",
        paddingTop: 5,
        fontFamily: 'RobotoBold'
    },
    borderNavigationIcon:{
        alignItems: 'center',
    },
});