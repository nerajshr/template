import React from 'react';
import { View, Text, Button } from 'react-native';
// import { Button } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

class HomeScreen extends React.Component {
    static navigationOptions = {
      title: ' Connection ',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }

    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Detail"
            onPress={() => this.props.navigation.navigate('Detail', {
              paramName: [1, 3, 3, 4],
            })}
          />

        </View>
      );
    }
}

function DetailScreen(props) {
  return (
    <View>
      <Text> Detail Screen </Text>
      <Text>
        {' '}
        {JSON.stringify(props)}
        {' '}
      </Text>
      <Text>
        {' '}
        {JSON.stringify(props.navigation.getParam('paramName', null))}
      </Text>
      <Button
        title="change"
        onPress={() => props.navigation.goBack()}
      />
      <Button title="update Header" onPress={() => props.navigation.setParams({ paramName: 'Hello' })} />
    </View>
  );
}


// DetailScreen.navigationOptions = ({ navigation }) => ({
//   title: JSON.stringify(navigation.getParam('paramName')),
// });
//
//
// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Detail: {
//     screen: DetailScreen,
//   },
//
// },
// {
//   intialRouteName: 'Detail',
//   defaultNavigationOptions: {
//   navigationOptions :{
//       tabBarLabel : 'Home!',
//   },
//   }
// });
const ExampleScreen = View;

const Home = createStackNavigator(
  {
    Feed: ExampleScreen,
    Profile: ExampleScreen,
  },
  {
    defaultNavigationOptions: {
      title: 'Home',
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  }
);

const Tabs = createBottomTabNavigator({ Home });
export default createAppContainer(Tabs);


// export default createAppContainer(AppNavigator);
