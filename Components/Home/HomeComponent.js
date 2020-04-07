import React, { Fragment, Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';


class App extends Component {
    state = { count: 0 };

    decrementCount() {
      let { count } = this.state;
      if (count > 0) {
        count--;
      }
      this.setState({
        count
      });
    }

    incrementCount() {
      let { count } = this.state;
      count++;
      this.setState({
        count
      });
    }

    render() {
      const { count } = this.state;
      return (
        <View styles={styles.container}>
          <Button
            title="increment"
            onPress={() => this.incrementCount()}
          />
          <Text>{count}</Text>
          <Button
            title="decrement"
            onPress={() => this.decrementCount()}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
