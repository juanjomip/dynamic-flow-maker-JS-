
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import WorkFlowComponent from './components/quest-detail/WorkFlowComponent';

export default class HelloWorldApp extends Component {  

  render() {
    return (
      <View style={{flex:1}}>      	        
        <WorkFlowComponent></WorkFlowComponent>       
      </View>
    );
  }
}

