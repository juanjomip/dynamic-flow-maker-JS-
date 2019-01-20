import React, { Component } from 'react';
import { 
	View,
	Text,
	Button,
	TextInput
} from 'react-native'; 

export default class Estado extends Component { 

  constructor(props) {
    super(props);
    this.state = {text: this.props.navigation.getParam('message', 'no encontrado')};
  }

  render() {
    return (
      <View><Text>{this.state.text}</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />        
      <Button
          title="Go next state"
          onPress={() => this.props.navigation.navigate('Servicio')}
        />
      </View>
    );
  }
}