import React from 'react';
import {
  View, ScrollView, Text, Button, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailMessage from './DetailMessage';

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();


function MessageScreen({ navigation }) {
  return (
      <View style={{flex:1, backgroundColor:'white'}}>
    <View style={{
      flex: 1, flexDirection: 'row', marginTop: 5, marginLeft: 5,
    }}
    >
      <View>
        <TouchableOpacity onPress={()=> navigation.navigate('detailMessage')}>
          <Image
            style={{
              marginTop: 5,
              marginLeft: 5,
              width: 75,
              height: 75,
              borderRadius: 100,
            }}
            source={require('../../assests/c.jpeg')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ fontSize: 23, }}>@alice</Text>
        <Text style={{ paddingLeft: 5 }}>
          {' '}
          hello world seen at some point hello world seen at some
          point hello world seen at some point
        </Text>
      </View>

    </View>
          <View style={{ position:'absolute',bottom:5, right:5}}>
              <Icon.Button name="ios-paper-plane" backgroundColor="white" color="#3AA760" size={30} />
          </View>

      </View>
  );
}


// for toptab for all and pinned, but not for now
// function MyTopTab() {
//   return (
//     <TopTab.Navigator tabBarOptions={{
//       activeTintColor: '#3AA760',
//       inactiveTintColor: 'black',
//       labelStyle: { fontSize: 20 },
//       tabStyle: { width: 100 },
//       style: { flexDirection: 'column', paddingLeft: 75, paddingRight: 50 },
//     }}
//     >
//       <TopTab.Screen name="all" component={MessageScreen} />
//       <TopTab.Screen name="pinned" component={MessageScreen} />
//     </TopTab.Navigator>
//   );
// }


function MainMessageScreenStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="mainMessage"
        component={MessageScreen}
        options={{
          headerTitle: () => (<Text style={{ fontSize: 23, fontWeight: 'bold' }}>Messages</Text>),
          headerLeft: () => (
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    // marginTop: 5,
                    // marginBottom: 5,
                    marginLeft: 5,
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                  }}
                  source={require('../../assests/c.jpeg')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{ flex: 1, flexDirection: 'row', }}>
              <View style={{ marginTop: 5 }}>
                <Icon.Button
                  name="ios-search"
                  backgroundColor="white"
                  color="#3AA760"
                  size={30}
                  onPress={() => navigation.navigate('detailMessage')}
                />
              </View>
              <View style={{ marginLeft: 40, marginTop: 5 }}>
                <Icon.Button name="ios-settings" backgroundColor="white" color="#3AA760" size={30} />
              </View>

            </View>
          )
        }}
      />
      <Stack.Screen
        name="detailMessage"
        component={DetailMessage}
        options={{
          headerTitle: () => (
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 0 }}>

              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                  }}
                  source={require('../../assests/c.jpeg')}
                />
              </TouchableOpacity>


              <Text style={{ fontSize: 20, paddingLeft: 10 }}>@ping</Text>

            </View>
          ),
          headerLeft: () => (
            <Icon.Button name="ios-arrow-back" backgroundColor="white" color="#3AA760" size={30} />
          ),
          headerRight: () => (
            <Icon.Button name="ios-settings" backgroundColor="white" color="#3AA760" size={30} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default MainMessageScreenStack;
