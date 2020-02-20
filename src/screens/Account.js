import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EIcon from 'react-native-vector-icons/EvilIcons';
import AccountMenu from '../components/AccountMenu'

const Account = () => {
    return (
        <View style={styles.container}>
            <AccountMenu iconname={'location'} title={'Shipping Address'}/>
            <AccountMenu iconname={'heart'} title={'Saved items'}/>
            <AccountMenu iconname={'cart'} title={'My Orders'}/>
            <AccountMenu iconname={'external-link'} title={'Log out'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    child1container: {
        flexDirection: 'row'
    },
    text: {
        marginLeft: 20,
        paddingTop: 3,
        fontSize: 17
    },
    aRight: {
        alignSelf: "flex-end"
    },
    iconbackground: {
        backgroundColor: '#ffa500',
        paddingLeft: 3,
        paddingRight: 3,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 3
    }

})
export default Account;