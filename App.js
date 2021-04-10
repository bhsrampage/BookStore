import React from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SciFiScreen from './src/screens/SciFiScreen';
import CartScreen from './src/screens/CartScreen';
import {Provider} from './src/Context/Provider';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SciFi" component={SciFiScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
const styles = StyleSheet.create({});

export default App;
