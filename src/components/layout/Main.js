import React, { Component } from 'react';
import Item from '../Item';
import './Main.css';
import Helmet from 'react-helmet';

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
                text: "Sorteie números e letras únicos ou com repetição"
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

        return(

            <div className="Container" id="main-page-container">

                <Helmet>
                    <title>Toolks</title>
                    <meta name="description" content="Toolks é um conjunto de ferramentas de cálculo, como para gerar grupos, calcular regra de três,
                calcular porcentagem e sortear números e letras" />
                </Helmet>

                <div className="Main-content">
                    <h1>Toolks ferramentas de cálculo</h1>
                    <p>Toolks é um conjunto de ferramentas matemáticas para ajudar em cálculos do dia a dia.</p>
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