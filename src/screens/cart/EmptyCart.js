import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import FIcon from 'react-native-vector-icons/FontAwesome5'
const Empty = () => {
    return (
        <View style={styles.container}>
            <FIcon name={'box-open'} size={50} color={'#ffa500'}/>
            <Text style={styles.title}>Your cart is empty</Text>
            <Text style={styles.body}>Items remain in your bag for 60 minutes and then they are moved to your saved items</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        textAlign:'center'
    },
    title: {
        fontWeight: "bold",
        padding: 5,
        alignContent: 'center',
        fontSize:18
    },
    body: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign:'center'
    }

})

export default Empty;