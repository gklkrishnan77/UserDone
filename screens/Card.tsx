import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CollapsibleCard from './CollapsibleCard';
import SampleEasing from './SampleEasing';

export function Card() {
    return (
        <View style={styles.app}>
            <CollapsibleCard
                title = {<View style={{backgroundColor:'red' , padding:25, borderRadius: 25,}}>
                    <Text> HI</Text>
                </View>}
                style={{ marginBottom: 16 }}>
                <View style={{ padding: 8 }}>
                    <Text style={styles.paragraph}>Content</Text>
                    <Text style={styles.paragraph}>Hello World</Text>
                </View>
            </CollapsibleCard>

         

            <SampleEasing />
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        padding: 24,
        backgroundColor: '#ddd',
    },
    paragraph: {
        fontSize: 14,
        lineHeight: 19,
    },
});


