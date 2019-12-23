import React, { Component } from 'react';
import Item from '../Item';
import './Main.css';

class Main extends Component {
    
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
                url: "/sorteio",
                text: "Sorteie números e letras"
            },
            {
                id: 4,
                title: 'Gerador de Grupos',
                url: "/gerador-de-grupos",
                text: "Crie fácilmente grupos aleatórios de todos os tamanhos"

            },
            {
                id: 5,
                title: 'Conversor de Tempo',
                url: "/conversor-de-tempo",
                text: "Faça conversões entre segundos, minutos, horas, dias, semanas, meses e anos"
            }
    
        ]
    }

    render() {

        document.title = "TheTools";
        return(

            // I put many items here in order to see how it looks like
            <div className="Container" id="main-page-container">

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