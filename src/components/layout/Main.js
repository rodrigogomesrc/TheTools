import React, { Component } from 'react';
import Item from '../Item';

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
            <div>
                <Item data={this.state.tools[0]} />
                
            </div>
        )
    }

}

export default Main