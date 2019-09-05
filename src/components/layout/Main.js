import React, { Component } from 'react';
import Item from '../Item';

class Main extends Component {

    // Later this will be adapted to be able to make a english version
    // Probably I'll use the same component and make it with a english url to open the english version
    state = {

        tools : [
            {
                id: 1,
                title: 'Calculadora de Regra de 3',
                url: "/regra_de_tres",
                text: "Faça calculos de regra de três facilmente ou calcule a porcentagem de um valor em outro"
            },
    
        ]
    }

    render() {

        return(
            <div>
                <Item />
            </div>
        )
    }

}

export default Main