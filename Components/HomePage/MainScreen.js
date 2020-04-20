import React from 'react';
import {
  View, Text, Image, Button, ScrollView, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import PostUIScreen from '../PostUIComponent/PostUIScreen';
import Colors from '../../utils/constants/Colors';
import Icon3 from 'react-native-vector-icons/Ionicons';


const Drawer = createDrawerNavigator();


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View>
          <View style={{ flex:1, justifyContent:'center', marginLeft:40}}>
        <Image
          style={{
            marginTop: 5,
            marginBottom: 5,
            width: 100,
            height: 100,
            borderRadius: 100,
          }}
          source={require('../../assests/c.jpeg')}
        />
        <Text style={{ fontSize: 15, paddingTop:2, fontWeight:'bold' }}> Neeraj Sharma</Text>
          <Text style={{ color:Colors.darkGrey }}>@nerajshr</Text>
          </View>
          <View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Icon3.Button name="ios-person" size={25} color={Colors.appColor} backgroundColor={Colors.white} />
                  <Text style={{ fontSize: 15, paddingTop: 8 }}>View Profile </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Icon3.Button name="ios-school" size={25} color={Colors.appColor} backgroundColor={Colors.white} />
                  <Text style={{ fontSize: 15, paddingTop: 8 }}> /Aiactr </Text>
              </View>
              <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Icon3.Button name="ios-settings" size={25} color={Colors.appColor} backgroundColor={Colors.white} />
                  <Text style={{ fontSize: 15, paddingTop: 8 }}> Settings </Text>
              </View>
          </View>
      </View>
      <DrawerItem label="Contact Us" onPress={() => props.navigation.navigate('meow')} />
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
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.white
      }}
      >
        <View>
          <Icon.Button
            name="camera"
            backgroundColor="white"
            color="#3AA760"
            size={30}
            // onPress={() => ImagePicker.showImagePicker(options, (response) => {
            //   console.log('Response = ', response);
            //
            //   if (response.didCancel) {
            //     console.log('User cancelled image picker');
            //   } else if (response.error) {
            //     console.log('ImagePicker Error: ', response.error);
            //   } else if (response.customButton) {
            //     console.log('User tapped custom button: ', response.customButton);
            //   } else {
            //     const source = { uri: response.uri };
            //     // You can also display the image using data:
            //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            //     this.setState({
            //       avatarSource: source,
            //     });
            //   }
            // })}
          />
        </View>
        <View>
          <Icon2.Button name="twitter" backgroundColor="white" color="#3AA760" size={30} />
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                marginTop: 5,
                marginBottom: 5,
                marginRight: 5,
                width: 35,
                height: 35,
                borderRadius: 100,
              }}
              source={require('../../assests/c.jpeg')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{ flex: 10 }}>
        <PostUIScreen/>
      </ScrollView>
    </ScrollView>

  );
}


function StackScreen() {
  return (<DrawerScreen />);
}

export default StackScreen;
