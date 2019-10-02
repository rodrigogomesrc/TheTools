import React, { Component } from 'react';
import './Sorteio.css';

export default class Sorteio extends React.Component {


    state = {

        start: 1,
        end: 10,
        quantity: 1,
        unique: "yes",
        numbersSorteados : [],
        lettersSorteadas : [],
        noRepeatError: false,
        rangeError: false
    }

    randomLetters = () => {

        console.log("fsdfsd");

    }

    randomNumbers = () => {

        const {start, end, quantity, unique} = this.state;
        let numbersSorteados = this.state.numbersSorteados;
        let noRepeatError = this.state.noRepeatError;
        let rangeError = this.state.rangeError;
        let randomNumber = null;
        numbersSorteados = [];

        // move those validations to the handle input functions
        // make null values as default and make an error in case they are not provided
        if(unique == "yes" && (end - start + 1) < quantity ){

            this.setState({noRepeatError: true});
            noRepeatError = true;
        }
        if(start > end || start === end){

            this.setState({rangeError: true});
            rangeError = true;

        } else {

            rangeError = false;
            noRepeatError = false;
            this.setState({numbersSorteados, noRepeatError: false}, () => {

                if(unique == "yes") {
    
                    for(var i = 0; i < quantity; i++){
                    
                        while (true){
        
                            randomNumber = Math.floor(Math.random() * (end + 1 - start));
                            randomNumber += start;
                            if(numbersSorteados.indexOf(randomNumber) === -1){
                                break
                            }
                        }
                        
                        numbersSorteados.push(randomNumber);
                    }
            
                    this.setState({numbersSorteados});
    
                } else {
    
                    for(var i = 0; i < quantity; i++){
                    
                        randomNumber = Math.floor(Math.random() * (end + 1 - start));
                        randomNumber += start;
                        numbersSorteados.push(randomNumber);
                        this.setState({numbersSorteados});
                    }
    
                }
    
            });

        }
    }


    handleOption = e => {

        this.setState({unique: e.target.value});
    }

    handleInput = e => {

        if(!isNaN(e.target.value) && e.target.value !== 0){

            this.setState({[e.target.name] : e.target.value});
        }
    }

    render(){

        return(
            <div className="Container">
                <div className="top-line line-box" id="line"></div>
                <div className="box" id="box">
                    <div className="box-content" id="box-content">
                        <h2 className="box-title">Sorteador</h2>
                            <div className="row"> 
                                <h3 className="subtitle">Sortear Número {this.state.noRepeatError? "true": "false"} </h3>
                            </div>
                            <div className="full-row">
                                <div className="sorteio-numeros-row">
                                    <div className="sorteio-numeros-block">
                                        <div className="forms-title">Faixa</div>
                                        <div id="range">
                                            <div id="range-start">
                                                <input
                                                    className="sorteio-input input"
                                                    id="start"
                                                    name="start" 
                                                    placeholder="inicio"
                                                    value={this.state.start}
                                                    onChange={this.handleInput}
                                                />
                                            </div>

                                            <div id="range-separator">
                                                <div id="separator-bar"></div>
                                            </div>

                                            <div id="range-end">
                                                <input 
                                                    className="sorteio-input input"
                                                    id="end"
                                                    name="end" 
                                                    placeholder="fim"
                                                    value={this.state.end}
                                                    onChange={this.handleInput}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="sorteio-numeros-block">
                                        <div className="forms-title">Pode repetir números?</div>
                                        <div id="option-selection">
                                            <div id="option-labels">
                                                <label htmlFor="yes">Sim</label>
                                                <label htmlFor="no">Não</label>
                                            </div>
                                            <div id="options-selectors">
                                            <input 
                                                    type="radio" 
                                                    id="no" value="no" 
                                                    onChange={this.handleOption} 
                                                    checked={this.state.unique === "no"}
                                                />
                                                <input 
                                                    type="radio" 
                                                    id="yes" value="yes" 
                                                    onChange={this.handleOption}  
                                                    checked={this.state.unique === "yes"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sorteio-numeros-block"> 
                                        <div className="forms-title" >Quantidade</div>
                                        <div id="quantity-form">
                                            <input 
                                                className="sorteio-input input"
                                                id="quantity"
                                                name="quantity" 
                                                placeholder="quantidade"
                                                value={this.state.quantity}
                                                onChange={this.handleInput}
                                            />
                                         </div>
                                    </div>

                                </div>

                            </div>
                            <div className="sortear-row">
                                <div className="button sorteio-button sorteio-button" onClick={this.randomNumbers}>Sortear</div>
                                <div className="title sorteio-title">Números sorteados: </div>
                                <div className="results">
                                {
                                    this.state.numbersSorteados.map((number) => (number + " "))
                                }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}