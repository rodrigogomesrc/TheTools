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
                url: "/regra_de_tres",
                text: "Faça calculos de regra de três facilmente ou calcule a porcentagem de um valor em outro"
            },
    
        ]
    }

    render() {

        return(

            // I put many items here in order to see how it looks like
            <div className="Container">

                <div className="Main-content">
                    <h1>TheTools</h1>
                    <p>TheTools é um conjunto de ferramentas matemáticas para ajudar em calculos do dia a dia.</p>
                    <p>Aqui abaixo estão as ferramentas inclusas no site.</p>
                </div>
            
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                <Item data={this.state.tools[0]} />
                
            </div>
        )
    }

}

export default Main