import { View, Text, ScrollView } from 'react-native';
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function DetailChatScreen() {
  return (
    <View style={{
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    }}
    >
      <ScrollView style={{
        flex: 1,

        backgroundColor: 'pink',
      }}
      >
        <View>
          <Text>
            write something here
          </Text>
          <Text>12.50pm</Text>
        </View>
        <View>
          <Text style={{ alignSelf: 'flex-end' }}>
            write something here
          </Text>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={{ width: '90%' }} placeholder="write message ..." />
        <Icon name="home" style={35} />
      </View>
    </View>
  );
}

export default DetailChatScreen;
