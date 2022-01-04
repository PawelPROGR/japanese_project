import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { MainScreen } from './styles/GL';

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 0 : StatusBar.currentHeight; //отдельно высота для ios формочки
// const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ height: STATUS_BAR_HEIGHT, backgroundColor: "white" }}>
        <StatusBar
                translucent
                backgroundColor="#5E8D48"
                barStyle="light-content"
              />
      </View>
      <View style={{ backgroundColor: "#79B45D", height: HEADER_HEIGHT }} /> */}
      <View style={MainScreen.containerAll}>
        <Text style={MainScreen.text}>Добро пожаловать в мир Japan</Text>
        <View style={MainScreen.trainerContainer}>
          <View style={[MainScreen.trainer, { marginRight: 20 }]}>
            <View><Image style={MainScreen.img2} source={require('../resources/img/hiragana.jpg')} /></View>
            <Text style={MainScreen.trainerText}>Хирагана</Text>
          </View>
          <View style={MainScreen.trainer}>
            <View><Image style={MainScreen.img2} source={require('../resources/img/katakana.jpg')} /></View>
            <Text style={MainScreen.trainerText}>Катакана</Text>
          </View>
        </View>
        {/* <View><Image style={MainScreen.img1} source={require('../resources/img/photo.jpg')}/></View> */}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({

});

export default Main;