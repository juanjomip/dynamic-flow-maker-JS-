import React, { Component } from 'react';
import { 
	View,
	Text
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import MenuPrincipal from './menu_principal/MenuPrincipal';

import Servicio from './menu_principal/servicios/Servicio';
import Estado from './menu_principal/servicios/Estado';

const AppNavigator = createStackNavigator({
  Home: {    
    screen: MenuPrincipal    
  },
  Servicio: {    
    screen: Servicio
  },
  Estado: {    
    screen: Estado
  }
});

export default createAppContainer(AppNavigator);

