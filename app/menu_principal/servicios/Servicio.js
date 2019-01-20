import React, { Component } from 'react';
import { 
	View,
	Text,
	SectionList,
	Button
} from 'react-native'; 

export default class Servicio extends Component { 
  render() {
    return (
      <View><Text>Servicio</Text>
      	 <Button
          title="Go next state"
          onPress={() => this.props.navigation.navigate('Estado', {message: 'hello There'})}
        />
      </View>      
    );
  }
}