import React, { Component } from 'react';
import './Porcentagem.css';

class Porcentagem extends Component {

    state = {

        A: 0,
        B: 0,
        A2: 0,
        B2: 0,
        X: 'X',
        X2: 'X',
        zero: true,
        zero2: true,
        valid: true,
        valid2: true
    }

    calculate = ( calcNumber ) => {

        const {A, B, A2, B2, valid, valid2, zero, zero2} = this.state;

        if(!this.state.zero && this.state.valid){

            switch(calcNumber){
                

                case 1:

                    if(valid  && !zero) {

                        let answer = A / B * 100;
                        answer = answer.toFixed(2);
                        this.setState({X: answer});
                    }

                    break;

                case 2: 

                    if(valid2 && !zero2) {

                        let answer = (A2 / 100) * B2;
                        answer = answer.toFixed(2);
                        this.setState({X2: answer});
                    }
                    break;

                default:

                    break;
            }

        }


    }

    validate = () => {


        const {A, B, A2, B2} = this.state;

        if(isNaN(A) || isNaN(B)){

            this.setState({valid: false});

        } else {

            this.setState({valid: true});
        }

        if(isNaN(A2) || isNaN(B2)){

            this.setState({valid2: false});

        } else {

            this.setState({valid2: true});
        }
        
        if (A === 0 || B === 0) {

            this.setState({zero: true});

        } else {

            // when values are not null it calls the calculate that only works if values are valid
            this.setState({zero: false}, () => {
                this.calculate(1);
            });
        }

        if (A2 === 0 || B2 === 0) {

            this.setState({zero2: true});

        } else {

            this.setState({zero2: false}, () => {
                this.calculate(2);
            });
        }

    }

    onChange = (e) => {

        let strVal = String(e.target.value);
        let treatedVal = ""

        // eslint-disable-next-line
        for (let i in strVal){

            if(strVal.charAt(i) === ","){
                treatedVal += ".";
            } else {
                treatedVal += strVal.charAt(i);
            }
        }

        let val = Number(treatedVal);

        this.setState({[e.target.name] : val},() => {

            this.validate();
        }); 
        
        if (this.state.X !== 'X') {
            this.setState({X: 'X'});
        }

        if (this.state.X2 !== 'X') {
            this.setState({X2: 'X'});
        }
    }

    render() {

        return(
            <div className='Container'>
                <div className="top-line line-box" id="porcentagem-line"></div>
                <div className="box" id="porcentagem-box">
                    <div className="box-content" id="porcentagem-box-content">
                        <h2 className="box-title">Porcentagem</h2>
                        <form onSubmit={this.onSubmit}>

                            <div className="row porcentagens">
                                <div>
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="A" 
                                        placeholder="A" 
                                        onChange={this.onChange} 
                                    />
                                </div>

                                <div>
                                    <p>É</p>
                                </div>

                                <div>
                                    <p className="x">{this.state.X}</p>
                                </div>

                                <div>
                                    <p>porcento de</p>
                                </div>

                                <div>
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="B" 
                                        placeholder="B" 
                                        onChange={this.onChange} 
                                    />
                                </div>
    
                            </div>
                            {this.state.valid? <div className='temp-separator'></div> : (
                                <div className="row">

                                    <div>
                                        <p className="error" id="porcentagem-error">Valores Inválidos</p>
                                    </div>

                                </div>
                            )}        
        
                            <div className="row-full" id="partition">
                                <div></div>
                            </div>
                            <div className="row porcentagens">

                            <div>
                                <input 
                                    className='input'
                                    type='text' 
                                    name="A2" 
                                    placeholder="A" 
                                    onChange={this.onChange} 
                                />
                                </div>

                                <div>
                                    <p>porcento de </p>
                                </div>

                                <div>
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="B2" 
                                        placeholder="B" 
                                        onChange={this.onChange} 
                                    />
                                </div>
                                <div>
                                    <p>É</p>
                                </div>

                                <div>
                                    <p className="x">{this.state.X2}</p>
                                </div>
                                
                            </div>
                            {this.state.valid2? <div className='temp-separator'></div> : (
                                <div className="row" id="porcentagem-error">

                                    <div>
                                        <p className="error">Valores Inválidos</p>
                                    </div>

                                </div>
                            )}        
                        </form>
                       
                    </div>
                </div>
        
            </div>
        )
    }
}

export default Porcentagem