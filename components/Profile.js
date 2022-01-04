import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { MainScreen } from './styles/GL';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './context'; // состояние входа/выхода
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';

const Profile = () => {

  const navigation = useNavigation();

  const { signOut } = React.useContext(AuthContext); // чтобы изменить состояние userToken и выйти на экран логина

  const handleSignOut = () => {
    signOut()
      .then(() => {
        //navigation.replace("Login")
        signOut()
      })
      .catch(error => alert(error.message))
  }

  return (
    <View style={MainScreen.container}>
      <View style={MainScreen.textViewCont}>
        <Text style={[MainScreen.text, { fontSize: 14 }]}>Профиль</Text>
      </View>

      {/* <TouchableOpacity
          onPress={onPresstoLoginScreen}
          style={styles.loginScreenButton}
        >
        <Text style={styles.loginText}>Войти</Text>
      </TouchableOpacity> */}

      {/*Статистика по пройденому материалу*/}
      <View style={MainScreen.statCont}>
        <Text style={MainScreen.TextStyleStat}>Статистика</Text>
        <View style={[MainScreen.StatWindowPoints]}>

        </View>
      </View>

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.loginOutScreenButton}
      >
        <Ionicons name="exit-outline" size={24} color='#999999' />
        <Text style={[styles.textSignOut, styles.loginText]}>Выйти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.6,
    //fontFamily: 'RobotoLight'
  },
  loginOutScreenButton: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 15,
    marginLeft: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSignOut: {
    marginLeft: 5
  }
});

export default Profile;