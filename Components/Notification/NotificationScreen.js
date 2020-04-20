import React from 'react';
import { ScrollView, View } from 'react-native';
import YouTube from 'react-native-youtube';
import { GiftedChat } from 'react-native-gifted-chat';
import ReactNativeYouTubeExample from './YoutubeExample';


class NotificationExample extends React.Component {
    state = {
      messages: [],
    }

    componentDidMount() {
      this.setState({
        messages: [
          {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'React Native',
              avatar: 'https://placeimg.com/140/140/any',
            },
          },
        ],
      });
    }

    onSend(messages = []) {
      this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, messages),
      }));
    }

    render() {
      return (
        <View style={{flex: 1}}>

          <ReactNativeYouTubeExample/>
          <View style={{flex: 4}}>
          <GiftedChat
            messages={this.state.messages}
            onSend={(messages) => this.onSend(messages)}
            user={{
              _id: 1,
            }}
          />
          </View>
        </View>

      );
    }
}

export default NotificationExample;
