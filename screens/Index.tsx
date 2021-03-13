import * as React from 'react';
import { View, Text, Button, Image, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '../navigation';
import { HeaderTitle } from '@react-navigation/stack';
import { Home } from './Home';
import { Company } from './Company';
import { Task } from './Task';
import { Payment } from './Payment';
import { TaskTracking } from './TaskTracking';
import {Card} from './Card';
import { PendingPayment } from './PendingPayment';



function CustomerCare({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>CustomerCare Screen</Text>
      <Button title="Balck" onPress={() => navigation.openDrawer()} />
    </View>
  );
}
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.userbar} >
        <LinearGradient
          // Background Linear Gradient
          colors={['rgba(108,36,170,.80)', 'rgb(21,0,43)']}
          style={styles.background}
        />
       <Image source={require('../assets/images/user.png')} style={styles.img}/>
        <View>
          <Text style={styles.username}>UserName</Text>
        </View>
      </View>
      
      <DrawerItemList {...props} />
      
      <DrawerItem
      
        label="Close"
       
        onPress={() => props.navigation.closeDrawer()}
      />
      </ScrollView>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} drawerContentOptions={{activeTintColor: 'rgb(108,36,170)',}} >
      <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: (({ focused }) => <Ionicons name="business" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'} />) }} />
      <Drawer.Screen name="Company" component={Company} options={{ drawerIcon: (({ focused }) => <Ionicons name="business" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'}  />)}}/>
      <Drawer.Screen name="Tasks" component={Task} options={{ drawerIcon: (({ focused }) => <Ionicons name="clipboard" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'}  />) }} />
      <Drawer.Screen name="Payment" component={Payment} options={{ drawerIcon: (({ focused }) => <Ionicons name="card" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'} />) }} />
      <Drawer.Screen name="TasksTracking" component={TaskTracking} options={{ drawerIcon: (({ focused }) => <Ionicons name="clipboard" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'} />) }} />
      <Drawer.Screen name="PendingPayment" component={PendingPayment} options={{ drawerIcon: (({ focused }) => <Ionicons name='card-outline' size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'} />) }} />
      <Drawer.Screen name="CustomerCare" component={CustomerCare} options={{ drawerIcon: (({ focused }) => <Ionicons name="headset" size={20} color={focused ? 'rgb(108,36,170)' : 'rgb(200,200,200)'} />) }} />
    </Drawer.Navigator>
  );
}


export const styles = StyleSheet.create({
  img:{
    height:100,
    width:100,
    marginBottom:10,
    borderRadius:25,
    
  },
  userbar: {
    padding: 10,
    marginTop: 0, 
    flexDirection: 'row',
    alignItems: 'center',
   height:"25%",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    color: "rgb(21,0,43)"
  },
  username:{
    padding: 20,
    fontSize: 20, 
    color: "rgb(225,255,255)", 
    
  },
  car: {
    padding: 20,
    backgroundColor: 'rgb(102,0,102)',
    borderRadius: 20,
    margin: 20,
  },
  textbox: {

    padding: 20,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(218,165,32)",
    color: "rgb(218,165,32)",
    fontSize: 20,
    fontWeight: "bold",
    width: 250

  },

  textboxn: {
    margin:10,
    padding: 10,
    textAlign: "left",
    borderBottomWidth: 1,
    borderBottomColor: "rgb(218,165,32)",
    color: "rgb(218,165,32)",
    fontSize: 20,
    fontWeight: "bold",
    width:75,
  },
  row: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    margin: 10,

  }

});


export default function App() {
  return (
    
      <MyDrawer />
    
  );
}
