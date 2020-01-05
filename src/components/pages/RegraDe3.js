import React, { Component } from 'react';
import './RegraDe3.css';
import './../layout/SideMenu';
import SideMenu from './../layout/SideMenu';
import Helmet from 'react-helmet';

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

        if(!this.state.zero && this.state.valid){

            let X = (this.state.B * this.state.C) / this.state.A;
            X = Number(X.toFixed(2));
            this.setState({X});
        }
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

            // when values are not null it calls the calculate that only works if values are valid
            this.setState({zero: false}, () => {
                this.calculate();
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
        
    }
    render() {

        return (
            <div className="page-content">

                <Helmet>
                    <title>Calculadora de regra de três</title>
                    <meta name="description" content="Calcule regra de três. Cálculo de regra de três simples
                    de forma fácil" />
                </Helmet>

                <div className="side-content">
                    <SideMenu></SideMenu>
                </div>
                <div className="main-content">

                    <div className="Container" id="regra3">
                        <div className="top-line line-box"></div>
                        <div className="box">
                            
                            <div className="box-content">

                                <h2 className="box-title">Regra de Três</h2>
                                <form>

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
                                
                                    
                                <div className="row-full">

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
                                        <p className="x">{this.state.X}</p>
                                        </div>
                                    
                                </div>

                                {this.state.valid? null : (
                                    <div className="row">

                                        <div>
                                            <p className="error" id="regra3-error">Valores Inválidos</p>
                                        </div>

                                    </div>
                                )}        
                
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegraDe3