import * as React from 'react';
import { View, Text, ScrollView, TextInput, ImageBackground, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export function Payment({ navigation }) {
  return (
    <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
      <ImageBackground source={require('../assets/images/bg.jpg')} style={{ height: '100%', width: '100%' }}>

        <Text style={{ fontSize: 50, textAlign: 'center', color: 'rgb(250,250,250)', padding: 10 }}>Payment</Text>

        <ScrollView style={{ display: 'flex' }} showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', overflow: 'hidden', margin: 25, padding: 35, borderRadius: 25, justifyContent: 'space-around', }}>
            <View style={styles.row}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgb(218,165,32)', padding: 10 }}>CardName</Text>
              <Ionicons name='card' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'CardHoldername'} />
            </View>
            <View style={styles.row}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgb(218,165,32)', padding: 10 }}>CardNumber</Text>
              <Ionicons name='card' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textboxn} maxLength={4} keyboardType={'number-pad'} />
              <TextInput style={styles.textboxn} maxLength={4} keyboardType={'number-pad'} />
              <TextInput style={styles.textboxn} maxLength={4} keyboardType={'number-pad'} />
              <TextInput style={styles.textboxn} maxLength={4} keyboardType={'number-pad'} />
            </View>
            <View style={styles.row}>
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgb(218,165,32)', padding: 10 }}>Expiry Date</Text>
              <Ionicons name='card-outline' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textboxn} maxLength={2} keyboardType={'number-pad'} />
              <TextInput style={styles.textboxn} maxLength={2} keyboardType={'number-pad'} />
              <Text style={{ fontSize: 20, textAlign: 'center', color: 'rgb(218,165,32)', padding: 25 }}>CVV</Text>
              <Ionicons name='card-outline' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textboxn} placeholder={'Code'} />
            </View>
          </View>
        </ScrollView></ImageBackground>
    </View>
  );
}


export const styles = StyleSheet.create({
   
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: "100%",
        color: "rgb(21,0,43)"
    },
  textbox: {
    margin: 10,
    padding: 10,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(218,165,32)",
    color: "rgb(218,165,32)",
    fontSize: 20,
    fontWeight: "bold",
    width: 300,
  },
    textboxn: {
        margin: 10,
        padding: 10,
        textAlign: "left",
        borderBottomWidth: 1,
        borderBottomColor: "rgb(218,165,32)",
        color: "rgb(218,165,32)",
        fontSize: 20,
        fontWeight: "bold",
        width: 75,
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: "center",
        margin: 10,

    }

});