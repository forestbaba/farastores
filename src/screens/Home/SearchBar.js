import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import FIcon from 'react-native-vector-icons/Feather';
import Home from '../Home';

const Searchbar = () => {
    return (
        <View>
            <View style={styles.iconholder}>
                <Text style={styles.titleStyle}>Fara</Text>
                <FIcon size={25} name="shopping-cart" color='white' style={styles.titleIcon} />
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder='search here' style={styles.searchInput} />
                <FIcon size={20} name="search" color='gray' style={styles.searchIcon} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#ffa500',
        paddingTop: 10,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row-reverse',

    },
    iconholder: {
        backgroundColor: '#ffa500',
        padding: 1,

        justifyContent: 'center',
        alignContent: 'center',
        flexDirection:'row'
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        paddingRight: 45,
        flex: 1,
    },
    searchIcon: {
        position: 'absolute',
        alignSelf: 'flex-start',
        marginLeft: 30,
        marginTop: 30,
        paddingRight: 30,
        flex: 1

    },
    titleStyle: {
        fontSize:40,
        fontFamily:'Lobster-Regular'
    },
    titleIcon: {
        marginTop:15
    }
})
export default Searchbar;