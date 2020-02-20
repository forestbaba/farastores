import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import Searchbar from './Home/SearchBar';
import Categories from './Home/Categories';
import Section from './Home/Section';

const Home = () => {
    let items = [{ name: 'Masket' }, { name: 'Ronning' }, { name: 'Blueshing' }, { name: 'Crypmson' }]
    return (
        <View>
            <Searchbar />
            <ScrollView style={styles.scroll}>
                <Categories />

                <View>
                    <Text style={styles.categoryTitle}>Top items</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {
                            items.map((item, index) => {
                                return (
                                    <Section />

                                )

                            })
                        }

                    </ScrollView>
                </View>
                <View>
                    <Text style={styles.categoryTitle}>Hot products</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        {
                            items.map((item, index) => {
                                return (
                                    <Section />

                                )

                            })
                        }

                    </ScrollView>
                </View>


                {/* <ScrollView vertical style={styles.scroll}>
                {
                    items.map(item => {
                        return (
                            <ScrollView>  <Section title={'Top items'} /></ScrollView>  
                        )
                    })
                }
               
                <Section title={'Hot Products'} />
            </ScrollView> */}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: '#ffa500',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row-reverse',

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
    scroll: {
        marginBottom: 80
    },
    categoryTitle: {
        color: '#ffa500',
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 15,
        paddingBottom: 5
    },
})

export default Home;