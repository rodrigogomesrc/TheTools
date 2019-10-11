import React, { Component } from 'react';

export default class SorteioLetters extends Component {

    state = {

        start: 0,
        startLetter: 'A',
        end: 25,
        endLetter: 'Z',
        quantity: 1,
        unique: "yes",
        numbersSorteados : [],
        lettersSorteadas : [],
        noRepeatError: false,
        rangeError: false,
        valueError: false
    }

    letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'
    , 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
    'U', 'V', 'X', 'W', 'Y', 'Z'];

    error = () => {

        const {noRepeatError, rangeError, valueError} = this.state;

        if(noRepeatError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Impossível sortear letras únicas com essa faixa e quantidade</p>
                    </div>

                </div>
            )

        } else if (rangeError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Impossível sortear letras com faixa menor ou igual a 0</p>
                    </div>

                </div>
            )

        } else if (valueError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Valores inválidos. valores tem que ser números inteiros</p>
                    </div>

                </div>
            )
        } 
        else {

            return(
                <div className='temp-separator' id='sorteio-separador'></div>
            )
        }

    }

    randomLetters = () => {

        let {start, end, quantity, unique} = this.state;
        let numbersSorteados = this.state.numbersSorteados;
        let randomNumber = null;
        numbersSorteados = [];
        quantity = parseInt(quantity);
        start = parseInt(start);
        end = parseInt(end);

        if(!this.validate()) {

            this.setState({rangeError: false, noRepeatError: false, valueError: false}, () => {
            
                if(unique === "yes") {
    
                    for(var i = 0; i < quantity; i++){
                    
                        while (true){
        
                            randomNumber = Math.floor(Math.random() * (end + 1 - start));
                            randomNumber += start;
                            //if the number is not on the list it pushes to the list
                            if(numbersSorteados.indexOf(randomNumber) === -1){
                                break
                            }
                        }

                        numbersSorteados.push(randomNumber);
                    }
            
                    this.setState({numbersSorteados});
    
                } else {
    
                    for(i = 0; i < quantity; i++){
                    
                        randomNumber = Math.floor(Math.random() * (end + 1 - start));
                        randomNumber += start;
                        numbersSorteados.push(randomNumber);
                        this.setState({numbersSorteados});
                    }
                }
            });
        }

    }


    validate = () => {

        let {start, end, quantity, unique} = this.state;
        let error = false;

        // if all values are a number
        if(!isNaN(start) && !isNaN(end) && !isNaN(quantity)){

            // when the range is <= 0
            quantity = parseInt(quantity);

            if(start > end || start === end){

                this.setState({rangeError: true});
                error = true;
            } 

            // if is impossible to calculate unique numbers
            else if(unique === "yes" && quantity > (end - start + 1) ){

                this.setState({noRepeatError: true});
                error = true;
            }

        } else {
            
            this.setState({valueError: true});
            error = true;
        }

        return error;
    }

    handleSubmit = () => {

        this.randomLetters();
    }
 
    handleOption = e => {

        this.setState({unique: e.target.value});
    }

    getLetter = () => {

        const {start, end} = this.state;
        let startLetter = "";
        let endLetter = "";

        if(start !== ""){

            startLetter = this.letters[start]
        } 

        if(end !== ""){

            endLetter = this.letters[end];
        } 
        
        this.setState({startLetter, endLetter});
    }

    convertLetterToNumber = ( letter, startOrEnd ) => {

        // to avoid making creating another error message, it converts wrong values to letters
        letter = String(letter);
        letter = letter.toUpperCase();
        let converted = this.letters.indexOf(letter);
        if(converted === -1){

            // it converts numbers to correspondent letters if typed a number
            if(letter >= 1 || letter <= 26){

                converted = letter -1;

            } else {

                converted = startOrEnd === "start"? 0 : 25; 
            }
        }
        return converted;
        
    }

    onChange = e => {
    
        if((e.target.name === "start" || e.target.name === "end") && e.target.value !== ""){

            let value = this.convertLetterToNumber(e.target.value, e.target.name);
            this.setState({[e.target.name] : value}, () => {
                this.getLetter();
            });

        } else {

            this.setState({[e.target.name] : e.target.value}, () => {
                this.getLetter();
            });
        }

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
                                        value={ this.state.startLetter}
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
                                        value={this.state.endLetter}
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
                            this.state.numbersSorteados.map((number) => (this.letters[number] + " "))
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