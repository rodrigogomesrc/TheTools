import React, { Component } from 'react';
import './Sorteio.css';
import '../SorteioLetters';
import SorteioLetters from '../SorteioLetters';
import SideMenu from './../layout/SideMenu'; 
import Helmet from 'react-helmet';

export default class Sorteio extends Component {


    state = {

        start: 1,
        end: 10,
        quantity: 1,
        unique: "yes",
        numbersSorteados : [],
        noRepeatError: false,
        rangeError: false,
        valueError: false,
        quantityError: false
    }

    randomNumbers = () => {

        if(!this.validate()) {

            this.setState({rangeError: false, noRepeatError: false, valueError: false}, () => {


                let {start, end, quantity, unique} = this.state;
                let numbersSorteados = this.state.numbersSorteados;
                let randomNumber = null;
                numbersSorteados = [];
                quantity = parseInt(quantity);
                start = parseInt(start);
                end = parseInt(end);
            
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

    error = () => {

        const {noRepeatError, rangeError, valueError, quantityError} = this.state;

        if(noRepeatError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Impossível sortear números únicos com essa faixa e quantidade</p>
                    </div>

                </div>
            )

        } if (rangeError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Impossível sortear números com faixa menor ou igual a 0</p>
                    </div>

                </div>
            )

        } if (valueError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Valores inválidos. valores tem que ser números inteiros</p>
                    </div>

                </div>
            )
        } 
        if (quantityError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Quantidade inválida. A quantidade tem que ser um número positivo</p>
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

    validate = () => {

        let {start, end, quantity, unique} = this.state;
    
        if(!isNaN(start) && !isNaN(end) && !isNaN(quantity)){

            // when the range is <= 0
            quantity = parseInt(quantity);
            start = parseInt(start);
            end = parseInt(end);

            if(start > end || start === end){

                this.setState({rangeError: true});
                return true;
            } 

            if(quantity <= 0){

                this.setState({quantityError: true});
                return true;
            }

            // if is impossible to calculate unique numbers
            else if(unique === "yes" && quantity > (end - start + 1) ){

                this.setState({noRepeatError: true});
                return true;
            }

        } else {
            
            this.setState({valueError: true});
            return true;
        }

        return false;
    }
   
    handleSubmit = () => {

        this.randomNumbers();
    }
 
    handleOption = e => {

        this.setState({unique: e.target.value});
    }
    onChange = e => {
        
        this.setState({[e.target.name] : e.target.value});
    }

    render(){

        return(
            <div className="page-content">
                <Helmet>
                    <title>Sorteie letras e números</title>
                    <meta name="description" content="Sortear números e letras. Sorteio de forma fácil números e
                     letras repetidos ou únicos. Sorteador de letras e números" />
                </Helmet>
                <div className="side-content">
                    <SideMenu></SideMenu>
                </div>
                <div className="main-content">
                    <div className="Container">
                        <div className="top-line line-box" id="line"></div>
                        <div className="box" id="box">
                            <div className="box-content" id="box-content">
                                <h2 className="box-title">Sorteador</h2>
                                    <div className="row"> 
                                        <h3 className="subtitle">Sortear Número </h3>
                                    </div>
                                    <div className="full-row">
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
                                                <div className="forms-title">Pode repetir números?</div>
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

                                    </div>
                                    <div className="sortear-row">
                                        <div className="button sorteio-button" onClick={this.handleSubmit}>Sortear</div>
                                        <div className="title sorteio-title">Números sorteados: </div>
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
                            <SorteioLetters></SorteioLetters>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}