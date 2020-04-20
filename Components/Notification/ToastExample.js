import React, { Component, useState } from "react";
import {
  Alert, Dimensions,
  Modal,
  StyleSheet, PixelRatio,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/constants/Colors';

const ToastExample = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View >
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      {/*<TouchableHighlight*/}
      {/*  style={styles.openButton}*/}
      {/*  onPress={() => {*/}
      {/*    setModalVisible(true);*/}
      {/*  }}*/}
      {/*>*/}
        {/*<Text style={styles.textStyle}>Show Modal</Text>*/}
        <Icon.Button
          name="ios-close"
          size={45}
          color={Colors.black}
          backgroundColor={Colors.white}
          style={{paddingTop:0}}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      {/*</TouchableHighlight>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: Colors.lightGreyColor,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    position: 'absolute',
    bottom: 0,
    marginBottom: 60,
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    width: Dimensions.get('window').width,
    height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)),
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ToastExample;
