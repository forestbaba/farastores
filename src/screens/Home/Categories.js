import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';


const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView horizontal >
                <View style={styles.iconandtitle}>
                    <View style={styles.iconholer}>
                        <FIcon name={'search'} size={20} color={'green'} />
                    </View>
                    <Text>Icon</Text>
                </View>
               
            </ScrollView>
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
    title: {
        color: '#ffa500',
        fontWeight: 'bold'
    },
    iconandtitle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft:0

    },
    iconholer: {
        elevation: 5,
        backgroundColor: 'white',
        padding: 15,
        width: 50,
        borderRadius: 10
    }
})
export default Categories;