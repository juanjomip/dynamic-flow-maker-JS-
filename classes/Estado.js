import React, { Component } from 'react';

class Estado{
  	
    constructor(data){
        this.id = data.id;
        this.nombre = data.name;
        this.estado_id = data.status_id;
        this.siguientes = false;    
        this.anteriores = false;          
    }

    getSiguientes() {    	
    	return this.siguientes;
    }

    setSiguientes(estados) {
        this.siguientes = estados;
    }

    setAnteriores(estados) {          
        anteriores = [];
        localObj = this;
        estados.map(function(estado) {                     
            if(estado.siguientes) {                
                estado.siguientes.map(function(estadoSiguiente) {                   
                    if(estadoSiguiente.id == localObj.id) {                        
                        anteriores.push(estado);                        
                    }
                })
            }
        })
        if(anteriores.length > 0) 
            this.anteriores = anteriores;
    }

    
}

export default Estado;