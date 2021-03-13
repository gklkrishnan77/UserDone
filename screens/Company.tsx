import * as React from 'react';
import { View, Text, TextInput, TouchableHighlight,StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';


export function Company({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('../assets/images/bg.jpg')} style={{  height:'100%',width:'100%'}} >
      <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
        
        <View>
          <Text style={{ fontSize: 50, textAlign: 'center', color: 'rgb(250,250,250)', padding: 10 }}>Company Registration</Text>
        </View>
        <ScrollView style={{ display: 'flex' }} showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', overflow: 'hidden', margin: 25, padding: 35, borderRadius: 25, justifyContent: 'space-around', }}>
            <View style={styles.row}>
              <Ionicons name='business-sharp' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'Companyname'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='business-sharp' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'Companytype'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='business-sharp' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'BusinessType'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='phone-portrait' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'Phone'} maxLength={12} keyboardType={'number-pad'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='map-outline' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'Address'} multiline={true} numberOfLines={3} />
            </View>
            <View style={styles.row}>
              <Ionicons name='map-sharp' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'city'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='map-sharp' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'Satate'} />
            </View>
            <View style={styles.row}>
              <Ionicons name='map' size={20} color='rgb(218,165,32)' />
              <TextInput style={styles.textbox} placeholder={'country'} />
            </View>
            <View style={styles.row}>
              <TouchableHighlight>
                <View style={{ backgroundColor: 'rgb(0,0,100)', width: 200, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', padding: 20, borderRadius: 25, }}>
                  <Ionicons name='exit-outline' size={20} color='rgb(218,165,32)' />
                  <Text style={{ color: 'rgb(218,165,32)', fontSize: 20, marginLeft: 10 }}>Submit</Text>
                </View>
              </TouchableHighlight></View>
          </View>
        </ScrollView>
      </View></ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
   
    textbox: {
      
      padding: 20,
      textAlign: "left",
      borderBottomWidth:1,
      borderBottomColor: "rgb(218,165,32)",
      color:"rgb(218,165,32)",
      fontSize:20,
      fontWeight: "bold",
      width:250
      
    },
    row:{
      flexDirection:"row", 
      justifyContent:'center', 
      alignItems: "center" ,
      margin:10,
      
    }
  });