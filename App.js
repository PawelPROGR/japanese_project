import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Navigate } from './navigate';
import { useFonts } from 'expo-font';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from './components/context';

const App = () => {

  const [loaded] = useFonts({
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
  });
  
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Navigate/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;