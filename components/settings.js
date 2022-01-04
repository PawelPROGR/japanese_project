import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { MainScreen } from './styles/GL';


const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={MainScreen.container}>
        <View style={MainScreen.textViewCont}>
          <Text style={[MainScreen.text, { fontSize: 14 }]}>Настройки</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default Settings;