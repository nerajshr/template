import {
  ScrollView, View, Text, Image
} from 'react-native';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DetailChatScreen from './DetailChatScreen';

const Stack = createStackNavigator();

export default function AllChatScreen({ navigation }) {
  const temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5];
  return (
    <ScrollView>
      { temp.map((value, index) => (
        <View
          className="chatList"
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            marginTop: 10,
          }}
        >
          <Image
            style={{
              width: 50, height: 50, marginRight: 10, borderRadius: 100
            }}
            source={require('../../assests/a.jpeg')}
          />
          <View style={{ flex: 1, height: 50 }}>
            <Text onPress={() => navigation.navigate('detailScreen')}>@nerajshr</Text>
            <Text>
              Chat, Profile and Catalog , make first the twiiter, with backend
              {JSON.stringify(navigation)}
              {' '}
              ...
            </Text>
          </View>
        </View>

      ))}

      <View style={{
        width: '20%',
        height: 50,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', // Here is the trick
        bottom: 0, // Here is the trick
        right: 0,
        borderRadius: 100,
      }}
      >
        <Icon name="home" size={35} />
      </View>
    </ScrollView>
  );
}

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="allChat"
//         component={AllChatScreen}
//         options={{
//           headerShown: false
//         }}
//       />
//       <Stack.Screen name="detailScreen" component={DetailChatScreen} />
//     </Stack.Navigator>
//   );
// }
//
// export default MyStack;
