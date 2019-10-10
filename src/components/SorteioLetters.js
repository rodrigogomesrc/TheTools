import React, { Component } from 'react';

export default class SorteioLetters extends Component {

    state = {

        start: 1,
        end: 10,
        quantity: 1,
        unique: "yes",
        numbersSorteados : [],
        lettersSorteadas : [],
        noRepeatError: false,
        rangeError: false,
        valueError: false
    }

    error = () => {

        console.log("error");

    }

    randomLetters = () => {

        console.log("fsdfsd");
    }

    handleSubmit = () => {

        this.randomLetters();
    }
 
    handleOption = e => {

        this.setState({unique: e.target.value});
    }
    onChange = e => {
        
        this.setState({[e.target.name] : e.target.value});
    }


    render(){

        return(

            
            <div className="sorteio-letters-section">
                <div className="row-full sorteio-partition">
                    <div></div>
                </div>

                <div className="row"> 
                    <h3 className="subtitle">Sortear Letras </h3>
                </div>
                <div className="sorteio-numeros-row">
                    <div className="sorteio-numeros-block">
                        <div className="forms-title">Faixa (incluindo ambos)</div>
                            <div id="range">
                                <div id="range-start">
                                    <input
                                        className="sorteio-input input"
                                        id="start"
                                        name="start" 
                                        placeholder="inicio"
                                        value={this.state.start}
                                        onChange={this.onChange}
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
                                        onChange={this.onChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="sorteio-numeros-block">
                            <div className="forms-title">Pode repetir letras?</div>
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
                        <div className="sorteio-numeros-block"> 
                            <div className="forms-title" >Quantidade</div>
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
                    <div className="sortear-row">
                        <div className="button sorteio-button" onClick={this.handleSubmit}>Sortear</div>
                        <div className="title sorteio-title">Letras Sorteadas: </div>
                        <div className="results">
                        {
                            this.state.numbersSorteados.map((number) => (number + " "))
                        }
                        </div>
                    </div>
                    <div>
                        {
                            this.error()
                        }
                    </div>

            </div>
        )
    }
}