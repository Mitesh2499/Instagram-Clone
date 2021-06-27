import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from './src/screens/ActivityScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ReelsScreen from './src/screens/ReelsScreen';
import UploadScreen from './src/screens/UploadScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Image, StyleSheet } from 'react-native';
import ImageIcon from './src/components/ImageIcon';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
function ReelsStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Reel" component={ReelsScreen} />
      </Stack.Navigator>
    );
  }

function UploadStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Upload" component={UploadScreen} />
      </Stack.Navigator>
    );
  }

function ActivityStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Activity" component={ActivityScreen} />
      </Stack.Navigator>
    );
  }

function ProfileStackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
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
const Tab = createBottomTabNavigator();
function MainTabNavigator() {
    return (
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName="home";
              size=32
              
              switch (route.name) {
                case "HomeTab":
                    iconName = focused
                    ? 'home'
                    : 'home-outline';
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                    break;
                case "ReelsTab":
                        iconName = focused
                        ? 'play-circle-filled'
                        : 'play-circle-outline';
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                        break;
                case "UploadTab":
                        iconName = focused
                        ? 'add-circle'
                        : 'add-circle-outline';
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                        break;
                case "ActivityTab":
                        iconName = focused
                        ? 'heart'
                        : 'heart-outline';
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                        break;
                case "ProfileTab":
                    return <ImageIcon style={focused && styles.border} uri="https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg" />
                    // return <Image style={[styles.profileIcon, focused && styles.border]} source={{uri: "https://cdn.pixabay.com/photo/2017/11/02/14/27/model-2911332_960_720.jpg"}}  />
                       
                        break;
                default:
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                      break;
              }
              // You can return any component that you like here!
          
          
              
            
            },
          
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'black',
            showLabel : false,
            style: {
                backgroundColor: 'white',
                height:60,
              },

          }}>
        <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
        <Tab.Screen name="ReelsTab" component={ReelsStackNavigator} />
        <Tab.Screen name="UploadTab" component={UploadStackNavigator} />
        <Tab.Screen name="ActivityTab" component={ActivityStackNavigator} />
        <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
     
      </Tab.Navigator>
    );
  }

export default MainTabNavigator

const styles = StyleSheet.create({
    profileIcon:{
        borderRadius:50,
        
        width: 32,
        aspectRatio: 1,
        
    },
    border:{
        borderWidth:2,
        borderColor:"black"
    }
})