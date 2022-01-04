import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { MainScreen } from './styles/GL';

// const HEADER_HEIGHT = Platform.OS === "ios" ? 44 : 56;

const Language = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={MainScreen.container}>
        <View style={MainScreen.textViewCont}>
          <Text style={[MainScreen.text, { fontSize: 14 }]}>Lang</Text>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({

});

export default Language;