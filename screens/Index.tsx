import * as React from 'react';
import { View, Text, Button, Image, ScrollView,StyleSheet, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Navigation from '../navigation';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flex:0.3,  width:'100%',  }}>
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row', justifyContent:'space-around', }}>
        <TouchableHighlight >
        <View  style={styles.card}>    
          <Text style={styles.cardtext}>Company</Text>
          <View style={styles.cardrow}>
          <Ionicons name='business-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.card}>    
          <Text style={styles.cardtext}>Task</Text>
          <View style={styles.cardrow}>
          <Ionicons name='document-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight>
        <View  style={styles.card}>    
          <Text style={styles.cardtext}>Paymet</Text>
          <View style={styles.cardrow}>
          <Ionicons name='cash-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.card}>    
          <Text style={styles.cardtext}>Customercare</Text>
          <View style={styles.cardrow}>
          <Ionicons name='headset-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.cardpro}>    
          <Text style={styles.cardtext}>Processig Task</Text>
          <View style={styles.cardrow}>
          <Ionicons name='document-outline'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>5</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.cardpro}>    
          <Text style={styles.cardtext}>Pending Paymet</Text>
          <View style={styles.cardrow}>
          <Ionicons name='cash-outline'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>5</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.carddone}>    
          <Text style={styles.cardtext}>Done Task</Text>
          <View style={styles.cardrow}>
          <Ionicons name='document'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>5</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.carddone}>    
          <Text style={styles.cardtext}>Done Paymet</Text>
          <View style={styles.cardrow}>
          <Ionicons name='cash'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>5</Text>
          </View>
        </View>
        </TouchableHighlight>
         </View>
         </ScrollView>  
      </View>
    <View style={{flex:0.7, backgroundColor:'rgb(102,0,102)',width:'100%',alignItems:'center'}}>
      <View  style={{flex:1,backgroundColor:'rgba(255,255,255,0.2)',width:'75%',margin:'25px',padding:'25px',borderRadius:'25px', }} >
      <View style={{flexDirection:'row'}}>
      <TouchableHighlight >
        <View  style={styles.cardcr}>    
          <Text style={styles.cardtext}>Company</Text>
          <View style={styles.car}>
          <Ionicons name='business-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.cardcr}>    
          <Text style={styles.cardtext}>Task</Text>
          <View style={styles.card}>
          <Ionicons name='document-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableHighlight>
        <View  style={styles.cardcr}>    
          <Text style={styles.cardtext}>Paymet</Text>
          <View style={styles.card}>
          <Ionicons name='cash-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        <TouchableHighlight >
        <View  style={styles.cardcr}>    
          <Text style={styles.cardtext}>Customercare</Text>
          <View style={styles.card}>
          <Ionicons name='headset-sharp'  size='50px'color='rgb(218,165,32)'/>
          <Text style={styles.cardrowtext}>10</Text>
          </View>
        </View>
        </TouchableHighlight>
        </View>
      <Button title="Balck" onPress={() => navigation.openDrawer()}/>
      </View>
    </View>
  </View>
  );
}

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View >
      <Text>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View></View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{padding:25,  backgroundColor:"red", marginTop:0, }}>
        <Text>UserName</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Userdrawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    
      <MyDrawer />
    
  );
}


const styles = StyleSheet.create({
  card: {
    padding:'20px',
    backgroundColor:'rgb(102,0,102)',
    borderRadius:'20px', 
    margin:'20px',
  },
  cardpro: {
    padding:'20px',
    backgroundColor:'rgb(128,0,0)',
    borderRadius:'20px', 
    margin:'20px',
  },
  carddone: {
    padding:'20px',
    backgroundColor:'rgb(0,128,0)',
    borderRadius:'20px', 
    margin:'20px',
  },
  cardcr: {
    padding:'20px',
    backgroundColor:'rgb(255,255,255)',
    borderRadius:'20px', 
    margin:'20px',
  },
  cardtext: {
    flexWrap:'wrap',
    fontSize:'20px',
    textAlign:'center', 
    color:'rgb(218,165,32)'
  },
  cardrow: {
    flexDirection:'row', 
    alignItems:'baseline', 
    marginTop:'20'
  },
  cardrowtext:{
    fontSize:'60px',
    color:'rgb(255,204,0)',
  },
});
