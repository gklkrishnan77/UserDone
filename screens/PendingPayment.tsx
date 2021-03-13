import * as React from 'react';

import { Ionicons } from '@expo/vector-icons';
import { View, Text, Button, ImageBackground, ScrollView, StyleSheet, TouchableHighlight,Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export function PendingPayment({ navigation }) {
    return (
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageBackground source={require('../assets/images/bg.jpg')} style={{ height: '100%', width: '100%' }}>
                <View style={{ height: '100%', width: '100%', alignItems: 'center', }}>
                    <View>
                        <Text style={{ fontSize: 50, textAlign: 'center', color: 'rgb(250,250,250)', padding: 10 }}>Pending Payment</Text>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.con}>
                            <View>
                                    <View style={{ padding: 10, }}>
                                    <View style={styles.rw}>
                                    <Text style={{ fontSize: 25, color: 'rgb(218,165,32)', padding: 10 }}>AASVA Payment</Text>
                                        <Image style={{ resizeMode: "contain", height: 75, width: 75, }} source={require('../assets/images/logo192.png')}  />
                                    </View>
                                        <View style={styles.rw}>
                                            <Text style={styles.rwhr} >Task Order NO : </Text>
                                            <Text style={styles.rwdata} >RAM001CBE024 </Text>
                                            <Text style={styles.rwhr} >Date : </Text>
                                            <Text style={styles.rwdata} >01-02-2021 </Text>
                                        </View>
                                        <View style={styles.rw}>
                                            <Text style={styles.rwhr}>Payment Paid : </Text>
                                            <Text style={styles.rwdata} >20000 </Text>
                                        <Text style={styles.rwhr} >Payment Pending : </Text>
                                            <Text style={styles.rwdata} >10000 </Text>
                                        </View>
                                    </View>
                                    <TouchableHighlight style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Payment')}>
                                        <View style={{ backgroundColor: 'rgb(0,0,100)', width: 200, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', padding: 10, borderRadius: 25, margin: 5, }}>
                                            <Ionicons name='card-sharp' size={20} color='rgb(218,165,32)' />
                                            <Text style={{ color: 'rgb(218,165,32)', fontSize: 20, marginLeft: 10 }}>Pay Now</Text>
                                        </View>
                                    </TouchableHighlight>
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
        margin: 20,
        padding: 10
    },
    rw: {
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
