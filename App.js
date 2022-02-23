import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Navigate } from './navigate';
import { useFonts } from 'expo-font';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';
import { AuthContext } from './components/context';

const App = () => {
  LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"]);

  const [loaded] = useFonts({
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf')
  });

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Navigate />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;