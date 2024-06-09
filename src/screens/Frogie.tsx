/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button  from '../components/Button';

function Frogie(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<StackNavigationProp<any>>();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function goToChillin() {
    navigation.navigate('FrogieChillin');
  }

  function goToSmoke() {
    navigation.navigate('FrogieSmoke');
  }

  function goToFuck() {
    navigation.navigate('FrogieFuck');
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <Image source={require('../assets/Frogie.jpeg')} style={styles.image} />
        <Button title='Chillin 🐸' onPress={goToChillin}/>
        <Button title='Smoke 🐸 🚬' onPress={goToSmoke}/>
        <Button title='F**K 🐸 🖕' onPress={goToFuck}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    padding: 30,
    margin: 40
  },
  highlight: {
    fontWeight: '700',
    fontSize: 25
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "black",
    marginBottom: 20
  }
});

export default Frogie;
