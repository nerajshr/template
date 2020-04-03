import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Axios from 'axios';
import HomeComponent from './Components/Home/HomeComponent';

import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import ChatContainer from './Components/Chat/ChatContainer';


const Stack = createStackNavigator();

function AxiosGetRequest(){
    Axios.get('http://ip.jsontest.com/').then((response) => {
        alert(JSON.stringify(response));
    })
}

function Friend() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
        <Button title='clickme' onPress={AxiosGetRequest} />
    </View>
  );
}


function Aquitance() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}


function SearchScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connections"
        component={() => (<View />)}
        options={{
          headerRight:  () => (
              <Icon
                name="search"
                size={Platform.OS === 'ios' ? 22 : 25}
              />
          ),

        }}
      />
    </Stack.Navigator>
  );
}


const TopTab = createMaterialTopTabNavigator();

function MyTopNotificationTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Aquitances" component={Aquitance} />
      <TopTab.Screen name="Friends" component={Friend} />
    </TopTab.Navigator>
  );
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connection"
        component={HomeComponent}
        options={{
          headerTitle: "Connections",
          headerLeft: () => (
            <Icon name="user" size={25} color="#00acee" style={{ paddingLeft: 10 }} />
          ),
          headerRight: () => (
            <Icon name="whmcs" size={25} color="#00acee" style={{ paddingRight: 10 }} />
          ),
          headerTintColor: 'black',
          headerTitleStyle: {
            fontSize: 24,
          }
        }}
      />
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#00acee',
      }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Thread"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Thread',
          tabBarIcon: ({ color, size }) => (
            <Icon name="fire-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={MyTopNotificationTab}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={ChatContainer}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => (
            <Icon name="comment-dots" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
