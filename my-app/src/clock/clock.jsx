import React, {Component} from 'react';

export class clock extends Component{

    constructor(props){//stributos de entrada del componente
        super(props);//super manda a llamar el constructor del padre
        this.state={
            date:new Date(),
            isoFormat:false
        };
        this.showMessage=this.showMessage.bind(this);//bine para poder usarse en todo el componente,
    }
    componentDidMount(){
        console.log("INICIO");
        this.timerId =setInterval(
            ()=>this.tick(),1000
        );
    }
    componentWillUpdate(){//se va a actualizar
        console.log("Actualización");
    }
    componentWillUnmount(){//Notifica la destruccion del proceso
        console.log("Finaliza el proceso");
    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    showMessage(){
        //alert("Bindeado desde el constructor");
        this.state.isoFormat=!this.state.isoFormat;
    }
    changeFormat(isoFormat2){
        this.setState({
            isoFormat: !isoFormat2
        });
    }
    render(){
        const clockDiv=[
            <div>
                <h1>Componente RELOJ</h1>
                <h1>Hora:{
                    this.state.isoFormat ?
                        this.state.date.toISOString() :
                        this.state.date.toLocaleTimeString()
                    }
                </h1>
            </div>
        ];
        const buttonDiv=[
            <div>
                <button onClick={
                    //this.showMessage() 
                    this.changeFormat.bind(this,this.state.isoFormat)
                }>
                    {this.state.isoFormat?
                        "FORMATO DE HORA LOCAL":
                        "FORMATO DE HORA INTERNACIONAL"    
                    }
                </button>
            </div>
        ];
        return(//siempre se manda un div, un solo div pero dentro de pueden anidar mas divs 
            <div>
                {clockDiv}
                {buttonDiv}
            </div>
        );
    }
}