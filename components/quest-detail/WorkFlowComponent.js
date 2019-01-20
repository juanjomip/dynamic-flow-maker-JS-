
import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';
import Flujo from './../../classes/Flujo';

export default class WorkFlowComponent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	workFlow: new Flujo(),
    	currentEstate: new Flujo().estados[0],
    	informacion: new Flujo().informacion
    };
  }  


  mostrarEstados() {

  	actualizarActual = (actual) => {
  		this.setState({
  			currentEstate: actual
  		})
  		//console.log(this.state.currentEstate);
  		
  	}

  	mostrarSiguientes = (estado) => {
  		if(this.state.currentEstate.siguientes) {
  			return this.state.currentEstate.siguientes.map(function(estado) {
		  		return (
		  			<Button 
			  			onPress={() => actualizarActual(estado)} 	  				
					    title={estado.nombre + ">>>"}
				    	color="green"
						accessibilityLabel="Learn more about this purple button">Siguientes
					</Button>
		  		)
		  	})
  		} else {
  			return false;
  		}	  	
	  }

	 mostrarAnteriores = (estado) => {
	 	if(this.state.currentEstate.anteriores) {
	 		return this.state.currentEstate.anteriores.map(function(estado) {
		  		return (
		  			<Button 
			  			onPress={() => actualizarActual(estado)} 	  				
					    title={"<<<" + estado.nombre}
				    	color="grey"
						accessibilityLabel="Learn more about this purple button">Siguientes
					</Button>
		  		)
		  	})
	 	} else {
	 		return false;
	 	}	  	
	  }

	mostrarInfo = () => {
		
		console.log(this.state.informacion);
		return this.state.informacion.map(function(section) {
			return (<View><Text>{section.title}</Text>{
				section.datos.map(function(dato) {
					return <Text>{dato.label}: {dato.value}</Text>
				})}</View>
			)
		})
	}

  	return (
  		<View style={{ backgroundColor: 'powderblue'}} >
  		<Text>{this.state.currentEstate.nombre}</Text>	
  			{mostrarInfo()}	  		
	  		{mostrarSiguientes()}  	
	  		{mostrarAnteriores()} 	
	  	</View>
	  	) 
  }

  mostrarEstadoss() {  	
  	mostrarSiguientes = (siguientes) => {
	  	buttons = [];	  	
	  	if(siguientes) {
	  		siguientes.map(function(estado) {
		  		buttons.push({text: estado.nombre, onPress: () => console.log('Ask me later pressed')});
		  	})
		  	Alert.alert(
			  'Siguientes',		
			  'estados siguientes',	  
			  buttons,
			  { cancelable: true }
			)
	  	} else {
	  		Alert.alert(
			  'No hay siguientes',
			  'sorry :(',
			  buttons,
			  { cancelable: true }
			)
	  	}	  	
	}

	mostrarAnteriores = (anteriores) => {
	  	buttons = [];	  	
	  	if(anteriores) {
	  		anteriores.map(function(estado) {
		  		buttons.push({text: estado.nombre, onPress: () => console.log('Ask me later pressed')});
		  	})
		  	Alert.alert(
			  'Anteriores',		
			  'estados anteriores',	  
			  buttons,
			  { cancelable: true }
			)
	  	} else {
	  		Alert.alert(
			  'No hay anteriores',
			  'sorry :(',
			  buttons,
			  { cancelable: true }
			)
	  	}	  	
	}

  	return this.state.workFlow.getEstados().map(function(estado, index) {
  		//console.log(estado.nombre);
  		return (
  			<View style={{ backgroundColor: 'powderblue'}} key={index} >
	  			<Text>{estado.nombre}</Text>
	  			<Button 
	  				onPress={() => mostrarSiguientes(estado.siguientes)} 	  				
				    title="Siguientes"
				    color="#841584"
				    accessibilityLabel="Learn more about this purple button">Siguientes
				</Button>
				<Button 
	  				onPress={() => mostrarAnteriores(estado.anteriores)} 	  				
				    title="Anteriores"
				    color="#841584"
				    accessibilityLabel="Learn more about this purple button">Siguientes
				</Button>
	  		</View>)  	
  	})  	 
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'space-around', alignItems: 'stretch'}}>
        {this.mostrarEstados()}       	
      </View>
    );
  }
}

