import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import profilepic from './13_300.png';

const Section = ({ title, array }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.categoryTitle}>{title}</Text>
                <View style={styles.itemHolder}>
                    <Image source={profilepic} style={styles.image} />
                    <Text style={styles.description}>descrio</Text>
                    <Text style={styles.name}>name</Text>
                    <Text style={styles.price}>Price</Text>
                </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        paddingRight: 15
    },
    categoryTitle: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 16
    },
    itemHolder: {
        paddingTop: 0,
        paddingBottom: 0

    },
    image: {
        width: 150,
        height: 200,
        borderRadius: 10
    },
    description: {
        fontSize: 16,
        color: 'black'
    },
    name: {
        color: 'gray',
        fontSize: 14
    },
    price: {
        fontSize: 14,
        color: 'black'
    }
})
export default Section;