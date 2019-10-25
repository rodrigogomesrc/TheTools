import React, { Component } from 'react';
import './SorteioGrupos.css';

export default class SorteioGrupos extends Component {

    state = {

        start: 1,
        end: 10,
        quantity: 2,
        reallocate: "yes",
        numbersSorteados : [],
        people : [],
        groups: [],
        name: '',
        length: 0,
        addedError: false,
        emptyError: false,
        quantityError: false
    }

    randomNumbers = () => {

        if(this.validate()) {

            let numbersSorteados = [];
            let randomNumber = null;
            const length = this.state.length;

            for(var i = 0; i < length; i++){
                    
                while (true){

                    randomNumber = Math.floor(Math.random() * length);
                    //if the number is not on the list it pushes to the list
                    if(numbersSorteados.indexOf(randomNumber) === -1){
                        break
                    }
                }
                numbersSorteados.push(randomNumber);
            }
            this.setState({numbersSorteados}, () => {

                this.generateGroups();
            });
        }
    }

    generateGroups = () => {

        const {quantity, numbersSorteados, people, length} = this.state;
        let groups = [];
        let group = [];

        let indice = 0;

        for(var i = 0; indice < length; i++){

            for(var j = 0; j < quantity; j++){

                group.push(people[numbersSorteados[indice]]);
                indice ++;
            }
            
            // eslint-disable-next-line
            group.forEach((person, i) => {
                if(person === undefined){
                    group[i] = " --- ";
                }
            });

            groups.push(group);
            group = [];
        }


        this.setState({groups});
    }

    error = () => {

        const {emptyError, addedError, quantityError, quantity } = this.state;
        
        if(emptyError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Nome não pode ser enviado em branco</p>
                    </div>

                </div>
            )

        } if(addedError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Você já adicionou esse nome</p>
                    </div>

                </div>
            )

        } if(quantityError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">{`Impossível gerar grupos com ${quantity} pessoas`}</p>
                    </div>

                </div>
            )

        } else {

            return(
                <div className='temp-separator' id='sorteio-separador'></div>
            )
        }

    }

    validate = () => {

     const {length, quantity, quantityError} = this.state;

      if( quantity === 1 || quantity > length ){

        this.setState({quantityError: true});
        console.log("error");
        return false;

      } else {

        if(quantityError === true){

            this.setState({quantityError: false});
            console.log("not an error");
        }
        return true;
      }
    }
   
    handleSubmit = () => {

        this.setState({quantityError: false, emptyError: false, addedError: false}, () => {
            this.randomNumbers();
        });
    }

    addNome = e => {

        let {people, name} = this.state;
        let error = false;

        if(people.indexOf(name) !== -1 ){

            this.setState({addedError: true});
            error = true;

        }

        if( name === ''){

            this.setState({emptyError: true});
            error = true;

        }

        if(!error){

            people.push(name);
            this.setState({people, length: this.state.length + 1, emptyError: false, addedError: false}, () => {

                this.setState({name: ''});
            });

        }
       
    }
 
    handleOption = e => {

        this.setState({reallocate: e.target.value});
    }

    onChange = e => {
        
        this.setState({[e.target.name] : e.target.value, emptyError: false, quantityError: false, addedError: false});
    }

    render(){

        return(
            <div className="Container">
                <div className="top-line line-box" id="line"></div>
                <div className="box" id="box">
                    <div className="box-content" id="box-content">
                        <h2 className="box-title">Gerador de Grupos</h2>
                            <div className="row"> 
                                <h3 className="subtitle">Sortear Grupo </h3>
                            </div>
                            <div className="full-row">
                                <div className="sorteio-grupos-row">

                                    <div className="sorteio-grupos-block" id="name-block">
                                        <div className="forms-title" > Adicione uma Pessoa</div>
                                        <div id="names-form">
                                            <form>
                                                <input 
                                                    className="sorteio-input input"
                                                    id="name-input"
                                                    name="name" 
                                                    placeholder="nome"
                                                    value={this.state.name}
                                                    onChange={this.onChange}
                                                />
                                            </form>
                                           
                                            <div className="button sorteio-button" id="add-name-button" onClick={this.addNome}>Adicionar Pessoa</div>
                                        </div>
                                    </div>
                                
                                    <div className="sorteio-grupos-block">
                                        <div className="forms-title">Destribuir pessoas sobrando?</div>
                                        <div id="option-selection">
                                            <div id="option-labels">
                                                <div>
                                                    <label htmlFor="yes">Sim</label>
                                                </div>
                                                <div>
                                                    <label htmlFor="no">Não</label>
                                                </div>
                                            </div>
                                            <div id="options-selectors">
                                                <div>
                                                    <input 
                                                    type="radio" 
                                                    id="yes" value="yes" 
                                                    onChange={this.handleOption} 
                                                    checked={this.state.reallocate === "yes"}
                                                    />
                                                </div>
                                                <div>
                                                    <input 
                                                        type="radio" 
                                                        id="no" value="no" 
                                                        onChange={this.handleOption}  
                                                        checked={this.state.reallocate === "no"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sorteio-grupos-block"> 
                                        <div className="forms-title" > Pessoas por Grupo</div>
                                        <div id="quantity-form">
                                            <input 
                                                className="sorteio-input input"
                                                id="quantity"
                                                name="quantity" 
                                                placeholder="quantidade"
                                                value={this.state.quantity}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className="sortear-row">
                                <div className="button sorteio-button" onClick={this.handleSubmit}>Sortear</div>
                                <div className="title sorteio-title">Grupos gerados: </div>
                                <div className="results">
                                    {
                                        this.state.groups.map((group, indice) => (`Grupo ${indice +1}: ${group.join(', ')}; `))
                                    }
                                </div>
                            </div>
                            <div>
                                {
                                    this.error()
                                }
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}
