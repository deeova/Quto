/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { SplashScreen } from './src/screens/SplashScreen';
import { HomeScreen } from "./src/screens/HomeScreen";
import MenuScreen from "./src/screens/MenuScreen/MenuScreen";
import RincianScreen from "./src/screens/PesananScreen/RincianPesananScreen/RincianScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PesananScreen from "./src/screens/PesananScreen/CekPesananScreen/PesananScreen";
import MenyiapkanScreen from "./src/screens/PesananScreen/SedangMenyiapkanScreen/MenyiapkanScreen";

const Tab = createMaterialTopTabNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          {/* <Tab.Screen name="Cek Pesanan" component={PesananScreen} />
          <Tab.Screen name="Sedang Menyiapkan" component={MenyiapkanScreen} /> */}
          <Tab.Screen name="Rincian Pesanan" component={RincianScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
