import * as React from 'react';
import { View, Text, Button, ScrollView, TouchableHighlight,StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 0.3, width: '100%', }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
            <TouchableHighlight>
              <View style={styles.card}>
                <Text style={styles.cardtext}>Company</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='business-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>10</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.card}>
                <Text style={styles.cardtext}>Task</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='document-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>10</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.card}>
                <Text style={styles.cardtext}>Paymet</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='cash-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>10</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.card}>
                <Text style={styles.cardtext}>Customercare</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='headset-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>10</Text> 
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('TasksTracking') }>
              <View style={styles.cardpro}>
                <Text style={styles.cardtext}>Processing Task</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='document-outline' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>5</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('PendingPayment') }  >
              <View style={styles.cardpro}>
                <Text style={styles.cardtext}>Pending Paymet</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='cash-outline' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>5</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.carddone}>
                <Text style={styles.cardtext}>Done Task</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='document' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>5</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.carddone}>
                <Text style={styles.cardtext}>Done Paymet</Text>
                <View style={styles.cardrow}>
                  <Ionicons name='cash' size={50} color='rgb(218,165,32)' />
                  <Text style={styles.cardrowtext}>5</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 0.7, backgroundColor: 'rgb(102,0,102)', width: '100%', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'rgba(255,255,255,0.2)', margin: 25, padding: 25, borderRadius: 25, }}>
          <View style={{ alignContent: 'center', justifyContent: 'space-between', }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableHighlight onPress={() => navigation.navigate('Company')}><View style={styles.cardcr}>
                <Ionicons name='business-sharp' size={50} color='rgb(218,165,32)' />
                <Text style={{ color: 'rgb(218,165,32)', textAlign: 'center' }}>Create Company</Text>
              </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigation.navigate('Tasks')} ><View style={styles.cardcr}>
                <Ionicons name='document-sharp' size={50} color='rgb(218,165,32)' />
                <Text style={{ color: 'rgb(218,165,32)', textAlign: 'center' }}>Create Task</Text>
              </View>
              </TouchableHighlight>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight onPress={() => navigation.navigate('Payment')} >
                <View style={styles.cardcr}>
                  <Ionicons name='cash-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={{ color: 'rgb(218,165,32)', textAlign: 'center' }}>Create Payment</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => navigation.navigate('CustomerCare')} >
                <View style={styles.cardcr}>
                  <Ionicons name='headset-sharp' size={50} color='rgb(218,165,32)' />
                  <Text style={{ color: 'rgb(218,165,32)', textAlign: 'center' }}>Create Enqurie</Text>
                </View>
              </TouchableHighlight>
            </View></View>
          <Button title="Balck" onPress={() => navigation.openDrawer()} />
        </View>
      </View>
    </View>
  );
}


export const styles = StyleSheet.create({
    card: {
      padding:20,
      backgroundColor:'rgb(102,0,102)',
      borderRadius:20, 
      margin:20,
    },
    cardpro: {
      padding:20,
      backgroundColor:'rgb(128,0,0)',
      borderRadius:20, 
      margin:20,
    },
    carddone: {
      padding:20,
      backgroundColor:'rgb(0,128,0)',
      borderRadius:20, 
      margin:20,
    },
    cardcr: {
      padding:20,
      backgroundColor:'rgba(255,255,255,0.1)',
      borderRadius:20, 
      margin:20,
      alignItems:'center',
      justifyContent:'center',
      alignSelf:'center',
      alignContent:'center'
    
    },
    cardtext: {
      flexWrap:'wrap',
      fontSize:20,
      textAlign:'center', 
      color:'rgb(218,165,32)'
    },
    cardrow: {
      flexDirection:'row', 
      alignItems:'baseline', 
      marginTop:20
    },
    cardrowtext:{
      fontSize:60,
      color:'rgb(255,204,0)',
    },
  });