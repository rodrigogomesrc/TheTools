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
        valid: false,
        valid2: false
    }

    calculate = () => {

        const {A, B, A2, B2, valid, valid2, zero2} = this.state;

        if(valid) {

            let answer = A / B * 100;
            answer = answer.toFixed(2);
            this.setState({X: answer});
        }

        if(valid2 && !zero2) {

            let answer = (A2 / 100) * B2;
            answer = answer.toFixed(2);
            this.setState({X2: answer});
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

            this.setState({zero: false});
        }

        if (A2 === 0 || B2 === 0) {

            this.setState({zero2: true});

        } else {

            this.setState({zero2: false});
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

        if (this.state.X2 !== 'X') {
            this.setState({X2: 'X'});
        }
    }

    onSubmit = (e) => {

        e.preventDefault();
        this.calculate();
    }

    render() {

        return(
            <div className='Container'>
                <div className="top-line line-box" id="porcentagem-line"></div>
                <div className="box" id="porcentagem-box">
                    <div className="box-content" id="porcentagem-box-content">
                        <h2 className="box-title">Porcentagem</h2>
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
                                    <p>É</p>
                                </div>

                                <div>

                                    <input 
                                        className='input x'
                                        type='text' 
                                        name="X" 
                                        placeholder="X" 
                                        value={this.state.X}
                                        onChange={this.onChange}
                                    />
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
                            <div className="row-full" >

                                <div>
                                    <input 
                                        id="first-button"
                                        className='button'
                                        type='submit' 
                                        value='Calcular' 
                                        disabled={!this.state.valid || this.state.zero}
                                    />
                                </div>

                            </div>
                            <div className="row-full" id="partition">
                                <div></div>
                            </div>
                            <div className="row">

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

                                    <input 
                                        className='input x'
                                        type='text' 
                                        name="X2" 
                                        placeholder="X" 
                                        value={this.state.X2}
                                        onChange={this.onChange}
                                    />
                                </div>
                                
                            </div>
                            <div className="row-full" >

                                <div>
                                    <input 
                                        className='button'
                                        type='submit' 
                                        value='Calcular' 
                                        disabled={!this.state.valid2 || this.state.zero2}
                                    />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default Porcentagem