import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigator/>
    </NavigationContainer>
  );
}


// Home => MaterialCommunityIcons.home home-outline
// Reels  => MaterialIcons.play-circle-filled play-circle-outline
// add => MaterialIcons.add-circle add-circle-outline
// heart => MaterialCommunityIcons.heart heart-outline
// search => MaterialIcons.search
// camera => MaterialCommunityIcons.camera -outline
// plus => plus-circle-outline
// bookmark MaterialCommunityIcons bookmark-outline
// MaterialCommunityIcons dots-vertical
// comment Feather.message-circle
// send Feather.send or FontAwesome send send-o
// close MaterialCommunityIcons.close