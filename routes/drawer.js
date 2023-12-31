import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Components
import HomeNavigator from './homeStack';
import AboutNavigator from './aboutStack';
import ContactNavigator from './contactStack';

// Initialization of Drawer
const Drawer = createDrawerNavigator ();

const RootDrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="About"
          component={AboutNavigator}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Contact Us"
          component={ContactNavigator}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootDrawerNavigator;
