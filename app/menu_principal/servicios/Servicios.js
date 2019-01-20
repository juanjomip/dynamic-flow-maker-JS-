import React, { Component } from 'react';
import { 
	View,
	Text,
	SectionList,
	Button,
	TouchableHighlight
} from 'react-native'; 

export default class Servicios extends Component { 
  render() {
    return (
      <SectionList
		  renderItem={({item, index, section}) => <TouchableHighlight key={index} onPress={() => this.props.navigation.navigate('Servicio')}>
		    	<Text>{item}</Text>		      
		    </TouchableHighlight>}
		  renderSectionHeader={({section: {title}}) => (	    
		  	<Text>{title}</Text>		    
		  )}
		  sections={[
		    {title: 'Hoy', data: ['Servicio 1', 'Servicio 2']},
		    {title: 'Ayer', data: ['Servicio 4', 'Servicio 3']},
		    {title: 'Antes de ayer', data: ['Servicio 5', 'Servicio 6']},
		  ]}
		  keyExtractor={(item, index) => item + index}
		/>
    );
  }
}