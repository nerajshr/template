import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';


class Example extends React.Component {
    //to use react-native-parsed-text
    static displayName = 'Example';

    handleUrlPress(url, matchIndex /*: number */) {
      Linking.openURL(url);
    }

    handlePhonePress(phone, matchIndex /*: number */) {
      alert(`${phone} has been pressed!`);
    }

    handleNamePress(name, matchIndex /*: number */) {
      alert(`Hello ${name}`);
    }

    handleEmailPress(email, matchIndex /*: number */) {
      alert(`send email to ${email}`);
    }

    renderText(matchingString, matches) {
      // matches => ["[@michel:5455345]", "@michel", "5455345"]
      const pattern = /\[(@[^:]+):([^\]]+)\]/i;
      const match = matchingString.match(pattern);
      return `^^${match[1]}^^`;
    }

    render() {
      return (
        <View style={styles.container}>
          <ParsedText
            style={styles.text}
            parse={
                        [
                          { type: 'url', style: styles.url, onPress: this.handleUrlPress },
                          { type: 'phone', style: styles.phone, onPress: this.handlePhonePress },
                          { type: 'email', style: styles.email, onPress: this.handleEmailPress },
                          { pattern: /Bob|David/, style: styles.name, onPress: this.handleNamePress },
                          {
                            pattern: /\[(@[^:]+):([^\]]+)\]/i, style: styles.username, onPress: this.handleNamePress, renderText: this.renderText
                          },
                          { pattern: /42/, style: styles.magicNumber },
                          { pattern: /#(\w+)/, style: styles.hashTag },
                        ]
                    }
            childrenProps={{ allowFontScaling: false }}
          >
            Hello this is an example of the ParsedText, links like http://www.google.com or http://www.facebook.com are clickable and phone number 444-555-6666 can call too.
            But you can also do more with this package, for example Bob will change style and David too. foo@gmail.com
            And the magic number is 42!
            #react #react-native
          </ParsedText>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  url: {
    color: 'red',
    textDecorationLine: 'underline',
  },

  email: {
    textDecorationLine: 'underline',
  },

  text: {
    color: 'black',
    fontSize: 15,
  },

  phone: {
    color: 'blue',
    textDecorationLine: 'underline',
  },

  name: {
    color: 'red',
  },

  username: {
    color: 'green',
    fontWeight: 'bold'
  },

  magicNumber: {
    fontSize: 42,
    color: 'pink',
  },

  hashTag: {
    fontStyle: 'italic',
  },

});

export default Example;
