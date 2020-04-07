import React from 'react';
import {
  View, Text, Image, Button, ScrollView, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
      <Image
        style={{
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 15,
          width: 75,
          height: 75,
          borderRadius: 100,
        }}
        source={require('../../assests/c.jpeg')}
      />
      <Text> @ping</Text>
      </View>
        <DrawerItem label="Help" onPress={() => props.navigation.navigate('meow')} />
    </DrawerContentScrollView>
  );
}


const DrawerScreen = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={(props) => <CustomDrawerContent {...props} />}
  >
    <Drawer.Screen name="Feed" component={MainScreen} />
  </Drawer.Navigator>
);


function MainScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: "white"
      }}
      >
        <View>
          <Icon.Button name="camera" backgroundColor="white" color="#3AA760" size={30} />
        </View>
        {/* <Text style={{ color: '#3AA760', fontSize: 30, fontWeight:'bold' }}>  Connection</Text> */}
        <View>
          <Icon.Button name="affiliatetheme" backgroundColor="white" color="#3AA760" size={30} />
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                marginTop: 5,
                marginBottom: 5,
                marginRight: 5,
                width: 45,
                height: 45,
                borderRadius: 100,
              }}
              source={require('../../assests/c.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 10 }} />
    </ScrollView>

  );
}


function StackScreen() {
  return (<DrawerScreen />);
}

export default StackScreen;
