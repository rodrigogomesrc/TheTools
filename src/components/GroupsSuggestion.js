import React, { Component } from 'react'

export class GroupsSuggestion extends Component {

    state = {

        possibilities: []
    }

    calculate = () => {

        const people = this.props.data.length;
        let dividers = [];
        let combinations = [];
        let group;
        let quantity;

        for (let index = 2; index <= people; index++) {
           
            if(people % index === 0){

                dividers.push(index);
            }            
        }

        for (let index = 0; index < dividers.length; index++) {

            group = [];
            quantity = people / dividers[index];
            group.push(quantity);
            group.push(dividers[index]);
            combinations.push(group);
        }

        console.log("grupos possíveis");
        console.log(combinations);
        this.setState({possibilities : combinations});
    }

    processCombinations = () => {

        const combinations = this.state.possibilities;
        let text = "";
        combinations.map(combination => {
            
            if(combination[0] === 1){

                text += `${combination[0]} grupo de ${combination[1]}; `;

            } else {

                text += `${combination[0]} grupos de ${combination[1]}; `;
            }
            
            return null;
        });

        return text;
    }

    render() {
        return (
            <div className="full-row">
               <h3>Combinações possíveis de grupos iguais</h3>
               <div className="sortear-row">
                    <div className="button sorteio-button" onClick={this.calculate}>Calcular</div>
                    <div className="title sorteio-title">Possibilidades: </div>
                    <div className="results">
                    {
                        this.processCombinations()
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupsSuggestion
