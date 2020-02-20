import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import Home from './src/screens/Home';
import Cart from './src/screens/Cart';
import Account from './src/screens/Account';
import AccountStack from './src/components/AccountStack';


const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      labelStyle={{ fontSize: 18 }}
      barStyle={{ backgroundColor: '#ffa500' }}


      tabBarOptions={{
        labelStyle: { fontSize: 12 },
        tabStyle: { width: 100 },
        headerShown: true,
        style: { backgroundColor: 'powderblue' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          title: 'JUst',
          headerShown: true,

          tabBarIcon: ({ color, size }) => (
            <EIcon name="home" size={20} color='white' />),

        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}

        options={{
          titlr: 'Checker',
          tabBarLabel: 'Cart',
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
          tabBarIcon: ({ color, size }) => (
            <EIcon name="shopping-cart" size={25} color='white' />),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarLabel: 'Account',
          headerShown: true,
          tabBarVisible:true,
          tabBarIcon: ({ color, size }) => (
            <FIcon name="user" size={20} color='white' />),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs style={{ backgroundColor: 'green' }} />
//     </NavigationContainer>
//   );
// }
