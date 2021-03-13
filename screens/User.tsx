import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, Image, TextInput,Button, ScrollView, TouchableHighlight, } from "react-native";
import AnimatedProgressWheel from 'react-native-progress-wheel';
import EditScreenInfo from '../components/EditScreenInfo';
import { HeaderBackground } from '@react-navigation/stack';

function User() {
  return (
    <View style={styles.container}>
        <HeaderBackground>
       <LinearGradient
        // Background Linear Gradient
        colors={['rgba(108,36,170,.75)', 'rgb(21,0,43)']}
        style={styles.background}
      /></HeaderBackground>
      <View >
   
       
      </View>
        
       
       </View>
        
        
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scr:{
    display: "flex",
    },
    box:{
      backgroundColor: "rgba(21,0,43,.2)", 
      borderRadius:25, 
      padding:25,
      marginTop:60,
      marginBottom: 10,
      
    },
    textbox: {
      marginBottom: 10,
      padding: 10,
      justifyContent: "space-around",
      alignItems: "center",
      textAlign: "left",
      borderBottomWidth:1,
      borderBottomColor: "rgb(200,200,200)",
      color:"rgb(200,200,200)",
      fontSize:20,
      fontWeight: "bold",
      width: 250,
      
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
      color: "rgb(21,0,43)"
    },
    button: {
      alignItems: "center",
      margin:10, 
    },
  
});

export default Otp;