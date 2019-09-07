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

        const X = (this.state.B * this.state.C) / this.state.A;
        this.setState({X});

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

            <div className="Container">
    
                <h2>Regra de Três</h2>
                <p>{this.state.zero? 'zero': 'não zero'}</p>

                <form onSubmit={this.onSubmit}>

                    <input 
                        type='text' 
                        name="A" placeholder="A" 
                        onChange={this.onChange} 
                    />
                    <p>Está para</p>

                    <input 
                        type='text' 
                        name="B" placeholder="B" 
                        onChange={this.onChange}
                    />
                    <p>Assim Como</p>

                    <input 
                        type='text' 
                        name="C" placeholder="C" 
                        onChange={this.onChange} 
                    />    

                    <p>
                        Está para
                        <span> {this.state.X}</span>
                    </p>
        
                    <input 
                        type='submit' 
                        value='Calcular' 
                        disabled={!this.state.valid || this.state.zero}
                    />
                    {this.state.valid? null :  <p className="error">Valores Inválidos</p>}
   
                </form>


            </div>
            
        )
    }
}

export default RegraDe3