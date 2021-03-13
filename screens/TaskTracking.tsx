import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import CollapsibleCard from './CollapsibleCard';
import setCollapsed from './CollapsibleCard';
import { View, Text, Button, ImageBackground, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';

export function TaskTracking({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImageBackground source={require('../assets/images/bg.jpg')} style={{ height: '100%', width: '100%' }}>
        <View style={{ height: '100%', width: '100%', alignItems: 'center',}}>
          <View>
            <Text style={{ fontSize: 50, textAlign: 'center', color: 'rgb(250,250,250)', padding: 10 }}>TaskTracking</Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.con}>
              <CollapsibleCard style={{ marginBottom: 16, color: 'rgb(218,165,32)' }}
                title={<View>
                  <View style={{ padding: 10, }}>
                    <Text style={{ fontSize: 25, color: 'rgb(218,165,32)', padding: 10 }} >Task Processing 1 </Text>
                    <View style={styles.rw}>
                      <Text style={styles.rwhr} >Task Order NO : </Text>
                      <Text style={styles.rwdata} >RAM001CBE024 </Text>
                      <Text style={styles.rwhr} >Date : </Text>
                      <Text style={styles.rwdata} >01-02-2021 </Text>
                    </View>
                    <View style={styles.rw}>
                      <Text style={styles.rwhr}>Task Assign : </Text>
                      <Text style={styles.rwdata} >RAM </Text>
                      <Text style={styles.rwhr} >Emp ID : </Text>
                      <Text style={styles.rwdata} >CBE024EMP04 </Text>
                    </View>
                    <ProgressBar progress={.8} color={'rgb(0,255,30)'} style={{ borderRadius: 20 }} > </ProgressBar>
                  </View>
                  <View style={styles.rw}>
                    <Ionicons name='document-outline' size={20} color='rgb(0,255,30)' />
                    <Ionicons name='business' size={20} color='rgb(0,255,30)' />
                    <Ionicons name='man' size={20} color='rgb(0,255,30)' />
                    <Ionicons name='document' size={20} color='rgb(0,255,30)' />
                  </View>
                  
                  <TouchableHighlight style={{ alignItems: 'center' }} onPress={() => navigation.navigate('CustomerCare')}>
                    <View style={{ backgroundColor: 'rgb(0,0,100)', width: 200, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', padding: 20, borderRadius: 25, margin: 5, }}>
                      <Ionicons name='headset-sharp' size={20} color='rgb(218,165,32)' />
                      <Text style={{ color: 'rgb(218,165,32)', fontSize: 20, marginLeft: 10 }}>Enqurie</Text>
                    </View>
                  </TouchableHighlight>
                  </View>
                }>
                <View style={{ padding: 25 , alignItems:'baseline', }}>
                  <View style={styles.rw}>
                    <Text style={styles.rwhr}>Client Name: </Text>
                    <Text style={styles.rwdata} >RAM Kumar </Text>
                  </View>
                  <View style={styles.rw}>
                    <Text style={styles.rwhr}>Client Company Name : </Text>
                    <Text style={styles.rwdata} >TataComService </Text>
                  </View>
                  <View style={styles.rw}>
                    <Text style={styles.rwhr}>Client City : </Text>
                    <Text style={styles.rwdata} >Chennai </Text>
                  </View>
                  <View style={styles.rw}>
                    <Text style={styles.rwhr}>Task Staus : </Text>
                    <Text style={styles.rwdata} >Processing On Side Client </Text>
                  </View>
                  <View style={styles.rw}>
                    <Text style={styles.rwhr}>Date Updated : </Text>
                    <Text style={styles.rwdata} >08.03.2021</Text>
                  </View>
                </View>
              </CollapsibleCard>
            </View>

            <View style={styles.con}>
              <View style={{ padding: 10, }}>
                <Text style={{ fontSize: 25, color: 'rgb(218,165,32)', padding: 10 }} >Task Processing 2 </Text>
                <View style={styles.rw}>
                  <Text style={styles.rwhr} >Task Order NO : </Text>
                  <Text style={styles.rwdata} >RAM002CBE024 </Text>
                  <Text style={styles.rwhr} >Date : </Text>
                  <Text style={styles.rwdata} >05-02-2021 </Text>
                </View>
                <View style={styles.rw}>
                  <Text style={styles.rwhr} >Task Assign : </Text>
                  <Text style={styles.rwdata} >RAM </Text>
                  <Text style={styles.rwhr} >Emp ID : </Text>
                  <Text style={styles.rwdata} >CBE024EMP04 </Text>
                </View>
                <ProgressBar progress={.8} color={'rgb(0,255,30)'} style={{ borderRadius: 20 }} > </ProgressBar>
              </View>
              <View style={styles.rw}>
                <Ionicons name='document-outline' size={20} color='rgb(0,255,30)' />
                <Ionicons name='business' size={20} color='rgb(0,255,30)' />
                <Ionicons name='man' size={20} color='rgb(0,255,30)' />
                <Ionicons name='document' size={20} color='rgb(0,255,30)' />
              </View>
            </View>
          </ScrollView>
        </View>
        <Button title="Balck" onPress={() => navigation.openDrawer()} />
      </ImageBackground>
    </View>
  );
}

export const styles = StyleSheet.create({
  con: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    overflow: 'hidden',
    borderRadius: 25,
    justifyContent: 'space-around',
    shadowColor: 'rgba(218,165,32,0.1)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    

  },
  rw:{
    flexDirection: 'row',
    justifyContent: 'space-around', 
    alignItems: 'center'
  },
  rwhr: {
    fontSize: 10, 
    color: 'rgba(225,225,225,.8)', 
    padding: 10,
  },
  rwdata: {
    fontSize: 15, 
    color: 'rgb(218,165,32)',
  }
})