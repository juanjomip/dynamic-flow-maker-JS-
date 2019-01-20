import Estado from './Estado';

const sections = [
    {title: 'Datos del cliente', datos: [
        {label: 'Nombre', value: 'Obi Wan Kenobi'},
        {label: 'Edad', value: '35'},
        {label: 'Rango', value: 'Maestro Jedi'},
    ]},
    {title: 'Información de combate', datos: [
        {label: 'Estilo', value: 'Forma V: Soresu'},
        {label: 'Sable', value: 'Azul'},        
    ]},
    {title: 'Amigos', datos: [
        {label: 'Nombre', value: 'Ashoka Tano'},
        {label: 'Nombre', value: 'Anakin Skywalker'},
        {label: 'Nombre', value: 'Plo Koon'},
        {label: 'Nombre', value: 'Mace Windu'}
    ]}
];

const data = [
    {id:7, name:'Asignada', next: [1]},
	{id:1, name:'En camino', next: [2,5]},
	{id:2, name:'En posición', next: [3,5]},
    {id:3, name:'Iniciar', next: [4]},
    {id:4, name:'Terminar', next: false},
    {id:5, name:'Negativa', next: false}    
];

class Flujo{
  	
  	constructor(){
        this.informacion = sections;

        this.estados = undefined;
        this.estadosMostrables = undefined;

        this.setEstados(data);
        this.setEstadoActual();               
    
    }

    getFinales() {
        finales = [];
        this.estados.map(function(estado) {
            if(!estado.siguientes)
                finales.push(estado);
        })
        return finales;
    }

    getEstados() {
        return this.estados;
    }

    setEstadoActual() {
        this.estados.map(function(estado) {

        })
    }

    setEstados(data) {
        estados = [];        
        data.map(function(estadoData) {      
            estado = new Estado(estadoData);                
            estados.push(estado);
        });        
        estados.map(function(estado) {            
            data.map(function(estadoData) {
                if(estadoData.id == estado.id && estadoData.next) {
                    estadosSiguientes = [];                    
                    estadoData.next.map(function(siguienteID) {
                        estados.map(function (estadoBuscado) {
                            if(siguienteID == estadoBuscado.id) {
                                estadosSiguientes.push(estadoBuscado);
                            }
                        })
                    })
                   estado.setSiguientes(estadosSiguientes);
                }
            })               
        });
        this.estados = estados;

        this.estados.map(function(estado) {            
            estado.setAnteriores(this.estados);
        })
    }    
}

export default Flujo;