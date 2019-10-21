import React, { Component } from 'react';
import './SorteioGrupos.css';

export default class SorteioGrupos extends Component {
    state = {

        start: 1,
        end: 10,
        quantity: 2,
        unique: "yes",
        numbersSorteados : [],
        people : [],
        name: null
    }

    randomNumbers = () => {

        if(!this.validate()) {

            
        }
    }

    error = () => {


    }

    validate = () => {

      return true;
    }
   
    handleSubmit = () => {

        this.randomNumbers();
    }

    addNome = () => {

    }
 
    handleOption = e => {

        this.setState({unique: e.target.value});
    }
    onChange = e => {
        
        this.setState({[e.target.name] : e.target.value}, () => {

            console.log(this.state.name);
        });
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
                                            <input 
                                                className="sorteio-input input"
                                                id="name-input"
                                                name="name" 
                                                placeholder="nome"
                                                onChange={this.onChange}
                                            />
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
                                                    id="no" value="no" 
                                                    onChange={this.handleOption} 
                                                    checked={this.state.unique === "no"}
                                                    />
                                                </div>
                                                <div>
                                                    <input 
                                                        type="radio" 
                                                        id="yes" value="yes" 
                                                        onChange={this.handleOption}  
                                                        checked={this.state.unique === "yes"}
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
