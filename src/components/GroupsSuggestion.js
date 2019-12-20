import React, { Component } from 'react'

export class GroupsSuggestion extends Component {

    state = {

        possibilities: [],
        primePossibilities: " "
    }

    calculate = () => {

        let people = this.props.data.length;
        let dividers = [];
        let combinations = [];
        let group;
        let quantityGroups;
        let currentDivider;
        let text = " ";

        this.setState({primePossibilities: " "}, () => {

            for (let index = 2; index <= people; index++) {
           
                if(people % index === 0){
    
                    dividers.push(index);
                }            
            }
    
            if(dividers.length === 1) {

                people--;
                combinations = [];
                dividers = [];
    
                for (let index = 2; index <= people; index++) {
               
                    if(people % index === 0){
            
                        dividers.push(index);
                    }            
                }
    
                for (let index = 0; index < dividers.length; index++) {
        
                    group = {};
                    currentDivider = dividers[index]
                    quantityGroups = people / currentDivider;
                    group.groups = quantityGroups;
                    group.people = currentDivider;
                    combinations.push(group);
                }
        
                //Change the combination adding 1 element to the last group
                combinations.forEach(combination => {
                    
                    if((combination.groups - 1) !== 0){

                        text += (combination.groups - 1).toString() + " ";

                        if((combination.groups - 1) === 1){

                            text += "grupo de ";

                        } else {

                            text += "grupos de ";
                        }

                        text += (combination.people).toString() + " e ";
                    }
                    
                    text += "1 ";
                    text += "grupo de "
                    text += (combination.people + 1).toString() + "; ";
    
                });
    
                this.setState({primePossibilities: text});
    
            } else {

                for (let index = 0; index < dividers.length; index++) {
    
                    group = {};
                    currentDivider = dividers[index]
                    quantityGroups = people / currentDivider;
                    group.groups = quantityGroups;
                    group.people = currentDivider;
                    combinations.push(group);
                }
                
                this.setState({possibilities : combinations});
            }

        });

    }

    processCombinations = () => {

        const combinations = this.state.possibilities;
        const primePossibilities = this.state.primePossibilities;
        let text = "";
       
        if(primePossibilities !== " "){

            return primePossibilities;

        } else {

            combinations.map(combination => {
            
                if(combination.groups === 1){
    
                    text += `${combination.groups} grupo de ${combination.people}; `;
    
                } else {
    
                    text += `${combination.groups} grupos de ${combination.people}; `;
                }
                
                return null;
            });

            return text;
        }
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
