import React, { useState } from 'react';
import App from '../App';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../components/LoginScreen';
import Profile from '../components/Profile';


const Stack = createStackNavigator();

export default function NavigateScreens() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}