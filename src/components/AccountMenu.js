import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import EIcon from 'react-native-vector-icons/EvilIcons'

const AccountMenu = ({ iconname, title }) => {
    return (
        <TouchableOpacity>

            <View style={styles.container}>
                <View style={styles.child1container}>
                    <EIcon name={iconname} size={25} color={'black'} style={styles.iconbackground} />
                    <Text style={styles.text}>{title}</Text>
                </View>
                <EIcon name={'chevron-right'} size={25} color={'black'} style={styles.aRight} />
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        alignContent: 'flex-start',
        justifyContent: 'space-between'
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
export default AccountMenu;