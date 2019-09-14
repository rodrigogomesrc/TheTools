import React, { Component } from 'react';
import './Porcentagem.css';

class Porcentagem extends Component {

    state = {

    }

    calculate = () => {

    }

    validate = () => {

    }

    onChange = () => {

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
                                    name="A" 
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
                                        name="B" 
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
                                        name="X" 
                                        placeholder="X" 
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
                                        disabled={!this.state.valid || this.state.zero}
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