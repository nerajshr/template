import React from 'react';
import {
  View, ScrollView, Text, Button, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

function DetailMessage() {
  return (
      <View style={[styles.balloon, { backgroundColor: '#1084ff' }]}>
        <Text style={{ paddingTop: 5, color: 'white' }}>Hey!</Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View style={styles.arrowLeft} />
        </View>
      </View>
  );
}

const styles = {

  item: {
    marginVertical: 14,
    flexDirection: 'row'
  },
  itemIn: {
    marginLeft: 10
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 10
  },
  balloon: {
    maxWidth: '70%',
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
    // backgroundColor: 'red'
  },
  arrowLeftContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'green'
  },

  arrowLeft: {
    left: -20,
  }
};

export default DetailMessage;
