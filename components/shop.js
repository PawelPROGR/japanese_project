import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { MainScreen } from './styles/GL';


const Shop = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={MainScreen.container}>
        <View style={MainScreen.textViewCont}>
          <Text style={[MainScreen.text, { fontSize: 14 }]}>Магазин</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default Shop;