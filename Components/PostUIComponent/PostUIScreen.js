import React from 'react';
import {
  View, ScrollView, Text, Buttom, Image, PixelRatio, Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../utils/constants/Colors';
import YoutubeExample from '../Notification/YoutubeExample';
import ToastExample from '../Notification/ToastExample';

function PostUIScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white }}>
      {
            [1, 2].map((item) => (
              <View style={{ flex: 1, paddingBottom: 10 }}>
                <View className="Header" style={{ flex: 1, flexDirection: 'row' }}>
                  <Image
                    style={{
                      marginTop: 5,
                      marginLeft: 5,
                      marginRight: 10,
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                    }}
                    source={require('../../assests/c.jpeg')}
                  />
                  <View style={{
                    flex: 1, height: 35, flexDirection: 'row', justifyContent: 'space-between'
                  }}
                  >
                    <Text style={{
                      fontSize: 17, paddingTop: 8, fontStyle: 'italic', fontWeight: 'bold'
                    }}
                    >
                      @nature_infocus
                    </Text>
                    <Text style={{ fontSize: 15, paddingTop: 8 }}>2d</Text>
                    <Icon name="ios-arrow-down" size={30} style={{ paddingRight: 5 }} />
                  </View>

                </View>
                <View>
                  <Text
                    className="CaptionContainer"
                    style={{
                      fontSize: 15, paddingTop: 5, paddingLeft: 5, paddingRight: 5
                    }}
                  >
                    hundred words caption is here, or 360 character if this is text here hundred words caption
                    hundred words caption is here, or 360 character if this is text here hundred words caption...
                  </Text>
                  <View className="MediaContainer">
                    {
                          (item === 2
                            ? (
                              <Image
                                style={{
                                  marginTop: 5,
                                  marginLeft: 5,
                                  height: PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)),
                                }}
                                source={require('../../assests/c.jpeg')}
                              />
                            )
                            : <YoutubeExample />)
                      }

                  </View>
                </View>
                <View className="footerContainer" style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View>
                    <Icon.Button name="ios-heart" size={25} color={Colors.black} backgroundColor={Colors.white} />
                  </View>
                  {/*<Icon.Button*/}
                  {/*  name="ios-close"*/}
                  {/*  size={45}*/}
                  {/*  color={Colors.black}*/}
                  {/*  backgroundColor={Colors.white}*/}
                  {/*  style={{ paddingTop: 0 }}*/}
                  {/*/>*/}
                  <ToastExample/>
                  <Icon.Button name="ios-copy" size={25} color={Colors.black} backgroundColor={Colors.white} />
                  <View>
                    <Icon.Button name="ios-chatboxes" size={25} color={Colors.black} backgroundColor={Colors.white} />
                  </View>
                </View>
              </View>
            ))
        }


    </ScrollView>
  );
}

export default PostUIScreen;
