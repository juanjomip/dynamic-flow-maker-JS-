import React, { Component } from 'react';
import { 
	View,
	Text
} from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Servicios from './servicios/Servicios';

const TabsMenuPrincipal = createMaterialTopTabNavigator({
  Servicios: Servicios  
});

export default createAppContainer(TabsMenuPrincipal);

