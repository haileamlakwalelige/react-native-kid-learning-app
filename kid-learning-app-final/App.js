import * as React from 'react';
import {ScrollView, Text, View, StyleSheet ,Button,TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alphabets from "./Alphabets";
import Numbers from './Numbers';
import Words from './Words';
import Home from './Home';
import About from './About';
import AmharicFidel from './AmharicFidel'
 

export default function App(){
  const Stack=createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Alphabets" component={Alphabets} />
         <Stack.Screen name="AmharicFidel" component={AmharicFidel} />
         <Stack.Screen name="Numbers" component={Numbers} />
          <Stack.Screen name="Words" component={Words} />
           <Stack.Screen name="About" component={About} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
