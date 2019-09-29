import React, { Component } from 'react';
import Item from '../Item';
import './Main.css';

class Main extends Component {

    // Later this will be adapted to be able to make a english version
    // Probably I'll use the same component and pass the english data to it, including a new url
    state = {

        tools : [
            {
                id: 1,
                title: 'Calculadora de Regra de Três',
                url: "/calculadora-regra-de-tres",
                text: "Faça cálculos de Regra De Três facilmente ou calcule a porcentagem de um valor em outro."
            },
            {
                id: 2,
                title: 'Calculadora de Porcentagem',
                url: "/calculadora-porcentagem",
                text: "Faça cálculos de porcentagem de várias formas diferentes."
            },
            {
                id: 3,
                title: 'Sorteador',
                url: "/sortear-numeros-grupos-e-letras",
                text: "Sorteie números, grupos e letras"
            },
            /*
            {
                id: 4,
                title: 'Conversor de Tempo',
                url: "/calculadora-porcentagem",
                text: "Faça conversões entre segundos, minutos, horas, dias, semanas, meses e anos"
            }*/
    
        ]
    }

    render() {

        return(

            // I put many items here in order to see how it looks like
            <div className="Container">

                <div className="Main-content">
                    <h1>Bem vindo(a) ao TheTools</h1>
                    <p>TheTools é um conjunto de ferramentas matemáticas para ajudar em cálculos do dia a dia.</p>
                    <p>Aqui abaixo estão as ferramentas inclusas no site.</p>
                </div>
                {
                    this.state.tools.map( (tool) => <Item key={tool.id} data={tool} />)
                }
                
            </div>
        )
    }

}

export default Main