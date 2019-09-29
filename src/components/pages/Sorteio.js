import React, { Component } from 'react';
import './Sorteio.css';

export default class Sorteio extends React.Component {


    state = {

        start: null,
        finish: null,
        numbers: null,
        quantity: 1,
        unique: "yes"
    }

    randomLetters = () => {

        console.log("fsdfsd");

    }

    randomNumbers = () => {

        console.log("fsdfsdfs");
    }

   
    handleOption = e => {

        this.setState({unique: e.target.value});
    }

    handleInput = e => {

        this.setState({[e.target.name] : e.target.value});
    }

    render(){

        return(
            <div className="Container">
                <div className="top-line line-box" id="line"></div>
                <div className="box" id="box">
                    <div className="box-content" id="box-content">
                        <h2 className="box-title">Sorteador</h2>
                            <div className="row"> 
                                <h3 className="subtitle">Sortear Número {this.state.quantity}</h3>
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
                                                    value={this.state.finish}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="sorteio-numeros-block">
                                        <div className="forms-title">Pode repetir números?</div>
                                        <div id="option-selection">
                                            <div id="option-labels">
                                                <label for="yes">Sim</label>
                                                <label for="no">Não</label>
                                            </div>
                                            <div id="options-selectors">
                                                <input 
                                                    type="radio" 
                                                    id="yes" value="yes" 
                                                    onChange={this.handleOption}  
                                                    checked={this.state.unique === "yes"}
                                                />
                                                <input 
                                                    type="radio" 
                                                    id="no" value="no" 
                                                    onChange={this.handleOption} 
                                                    checked={this.state.unique === "no"}
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
                                <div className="button sorteio-button sorteio-button" >Sortear</div>
                                <div className="title sorteio-title">Números sorteados: </div>
                                <div className="results">
                                    {'10, 3, 64, 5, 6, 4'}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}