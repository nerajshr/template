import React from 'react';
import { View, Text, Button } from 'react-native';
import Axios from 'axios';

function HomeComponent() {
  const ApiGetCall = () => {
    Axios.get('http://ip.jsontest.com/').then((respone) => {
      console.log(JSON.stringify(respone));
    });
  };
  return (
    <View>
      <Text> Global Space here </Text>
      <Button title="ApiTest" onPress={ApiGetCall} />
    </View>
  );
}

export default HomeComponent;
