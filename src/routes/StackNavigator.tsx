import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Frogie';
import FrogieChillin from '../screens/Frogie.Chillin';
import FrogieSmoke from '../screens/Frogie.Smoke';
import FrogieFuck from '../screens/Frogie.Fuck';


const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigation>
      <Stack.Screen name="Frogie" component={Home} />
      <Stack.Screen name="FrogieChillin" component={FrogieChillin} />
      <Stack.Screen name="FrogieSmoke" component={FrogieSmoke} />
      <Stack.Screen name="FrogieFuck" component={FrogieFuck} />
    </Stack.Navigation>
  );
};

export default StackNavigator;