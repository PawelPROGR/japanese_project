import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './components/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator } from 'react-native';
import forgotpasswordScreen from './components/forgotpasswordScreen';
import registerScreen from './components/RegisterScreen';

// Screens
import Main from './components/Main';
import Settings from './components/settings';
import Language from './components/Lang';
import Profile from './components/Profile'

//Screen names
const home = "Home";
const language = "Lang";
const settings = "Settings";
const profile = "Profile";

//Screens without Tab
import LoginScreen from './components/LoginScreen';

export const Navigate = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password, token) => {
      try {
        setUserToken(token);
        console.log("LOOK - ", token);
        await AsyncStorage.setItem('userToken', token);
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGIN', id: userName, userToken: token });
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {

    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 500);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const TabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === home) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === language) {
              iconName = focused ? 'apps' : 'apps-outline';

            } else if (rn === settings) {
              iconName = focused ? 'settings' : 'settings-outline';

            } else if (rn === profile) {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#999999',
          tabBarStyle: {
            height: 60,
            paddingTop: 10,
            paddingBottom: 10,
            borderTopWidth: 0,
            backgroundColor: '#000',
            backgroundColor: '#353535',
            shadowColor: "#000",
            shadowOpacity: 0.3,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: 0
            },
          }
        })}>
        <Tab.Screen options={{ headerShown: false }} name={home} component={Main} />
        <Tab.Screen options={{ headerShown: false }} name={language} component={Language} />
        <Tab.Screen options={{ headerShown: false }} name={settings} component={Settings} />
        <Tab.Screen options={{ headerShown: false }} name={profile} component={Profile} />
      </Tab.Navigator>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      {loginState.userToken !== null ? (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="App">
          <Stack.Screen name="Tab" component={TabStack} /*options={{ animationEnabled: false, }}*/ />
        </Stack.Navigator>
      )
        :
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="App">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="forgot" component={forgotpasswordScreen} />
          <Stack.Screen name="Register" component={registerScreen} />
        </Stack.Navigator>
      }
    </AuthContext.Provider>
  )
};