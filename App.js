import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function FriendZone() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}


function Catalog() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function MessageListScreen({navigation}) {
  return (
      <View>
    {/*<Text>{JSON.stringify(navigation)}</Text>*/}
    {/*      <Button title='nextpage' onPress={navigation.navigate('MessageDetailScreen')} />*/}

    <View >
        <Icon name="whmcs" size={25} color="#00acee" style={{ paddingRight: 10 }} />
    </View>
      </View>
  );
}

function MessageDetailScreen() {
  return (
    <Text>Detail</Text>
  );
}

function MessageStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Message"
        component={MessageListScreen}
        options={{
          headerTitle: "Messages",
          headerLeft: () => (
            <Icon name="user" size={25} color="#00acee" style={{ paddingLeft: 10 }} />
          ),
          headerRight: () => (
            <Icon name="whmcs" size={25} color="#00acee" style={{ paddingRight: 10 }} />
          ),
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'Sans-serif',
            fontSize: 20,
          }
        }}
      />
      <Stack.Screen name="MessageDetailScreen" component={MessageDetailScreen} />
    </Stack.Navigator>
  );
}


const TopTab = createMaterialTopTabNavigator();

function MyTopTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Catalog" component={Catalog} />
      <TopTab.Screen name="FriendZone" component={FriendZone} />
    </TopTab.Navigator>
  );
}


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connection"
        component={MyTopTab}
        options={{
          headerTitle: "Connections",
          headerLeft: () => (
            <Icon name="user" size={25} color="#00acee" style={{ paddingLeft: 10 }} />
          ),
          headerRight: () => (
            <Icon name="whmcs" size={25} color="#00acee" style={{ paddingRight: 10 }} />
          ),
          // headerStyle: {
          //   backgroundColor: '#f4511e',
          // },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'Sans-serif',
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
      initialRouteName="Feed"
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
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Thread',
          tabBarIcon: ({ color, size }) => (
            <Icon name="fire-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={MessageStack}
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
