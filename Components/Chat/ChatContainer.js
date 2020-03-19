import {View, Button, Text, Image} from 'react-native';
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AllChatScreen from './AllChatScreen';
import PinnedChatScreen from './PinnedChatScreen';
import DetailChatScreen from './DetailChatScreen';

const TopTab = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

function ChatTopTab() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="allChat" component={AllChatScreen} />
      <TopTab.Screen name="pinnedChat" component={PinnedChatScreen} />
    </TopTab.Navigator>

  );
}

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="chatTopTab"
        component={ChatTopTab}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="detailScreen"
        component={DetailChatScreen}

        options={{
          headerTitle: () => (
            <Text >
              <Icon name="user" size={25} color="#00acee" />
              <Text> </Text> <Text></Text>
                {/*<Image*/}
                {/*    style={{*/}
                {/*        width: 50, height: 50, borderRadius: 100*/}
                {/*    }}*/}
                {/*    source={require('../../assests/a.jpeg')}*/}
                {/*/>*/}
              <Text style={{}}>@nerajshr</Text>
            </Text>
          ),

          headerRight: () => (
            <Icon name="whmcs" size={25} color="#00acee" style={{ paddingRight: 10 }} />
          ),

          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'Sans-serif',
            fontSize: 20,
          }
        }}
      />
    </Stack.Navigator>
  );
}
