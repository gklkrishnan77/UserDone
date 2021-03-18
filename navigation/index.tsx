import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from '../screens/Index';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import Otp from  '../screens/Otp';
import App  from '../screens/Index';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import { Ionicons } from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
function RootNavigator({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: false }}  />
      <Stack.Screen name="OtpScreen" component={Otp}  
      options={{ headerTitle: 'Otp', headerStyle: {backgroundColor: 'rgb(102,0,102)'}, 
      headerTitleStyle: {fontWeight: 'bold',color: 'rgb(255,255,255)', justifyContent:'center'}, }}/>
      <Stack.Screen name="Apps" component={App} options={{ headerShown:false}}/>
    </Stack.Navigator>
  );
}

