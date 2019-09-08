import React, { Component } from 'react';
import './RegraDe3.css';


class RegraDe3 extends Component {

    state = {

        A: 0,
        B: 0,
        C: 0,
        X: 'X',
        valid : true,
        zero:  true
    } 


    calculate = () => {

        let X = (this.state.B * this.state.C) / this.state.A;
        X = X.toFixed(2);
        this.setState({X}); // I use only X instead of X:X because the two variables are written the same way

    }

    validate = () => {

        const {A, B, C} = this.state;

        if(isNaN(A) || isNaN(B) || isNaN(C)){

            this.setState({valid: false});

        } else {

            this.setState({valid: true});
        }

        
        if (A === 0 || B === 0 || C === 0 ) {

            this.setState({zero: true});

        } else {

            this.setState({zero: false});
        }

    }

    onChange = (e) => {

        let val = Number(e.target.value);

        this.setState({[e.target.name] : val},() => {

            this.validate();
        }); 
        
        if (this.state.X !== 'X') {
            this.setState({X: 'X'});
        }
    }

    onSubmit = (e) => {

        e.preventDefault();
        this.calculate();
    }

    render() {

        return (

            <div className="Container" id="regra3">
                <div className="top-line line-box"></div>
                <div className="box">
                    
                    <div className="box-content">

                        <h2 id="regra3-title">Regra de Três</h2>
                        <form onSubmit={this.onSubmit}>

                            <div className="row">
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
                                    <p>Está Para</p>
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
                        
                            
                        <div className="row2">

                            <div>
                                <p id="middle">Assim Como</p>
                            </div>
                            
                        </div>
                        
                        <div className="row">

                                <div>
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="C" 
                                        placeholder="C" 
                                        onChange={this.onChange} 
                                    />    
                                </div>

                                <div>
                                    <p> Está Para </p>
                                </div>

                                <div>
                                    <input 
                                        className='input'
                                        id="X"
                                        type='text' 
                                        name="X" 
                                        placeholder={this.state.X} 
                                        value={this.state.X}
                                        disabled={true}
                                    />    
                                </div>
                            
                        </div>

                        <div className="row2" >

                            <div>
                                    <input 
                                        className='button'
                                        type='submit' 
                                        value='Calcular' 
                                        disabled={!this.state.valid || this.state.zero}
                                    />
                            </div>

                        </div>

                            {this.state.valid? null : (
                                <div className="row">

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

export default RegraDe3