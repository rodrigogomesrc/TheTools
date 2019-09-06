import React, { Component } from 'react';
import './RegraDe3.css';


class RegraDe3 extends Component {

    state = {

        A: null,
        B: null,
        C: null,
        X: 'X'
    } 

    calculate = () => {

        const X = (this.state.B * this.state.C) / this.state.A;
        this.setState({X});

    }

    onChange = (e) => {

        
        this.setState({[e.target.name] : e.target.value});
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

                <form onSubmit={this.onSubmit}>

                    <input 
                        type='text' 
                        name="A" placeholder="A" 
                        onChange={this.onChange} 
                        value={this.state.A}
                    />
                    <p>Está para</p>

                    <input 
                        type='text' 
                        name="B" placeholder="B" 
                        onChange={this.onChange}
                        value={this.state.B}
                    />
                    <p>Assim Como</p>

                    <input 
                        type='text' 
                        name="C" placeholder="C" 
                        onChange={this.onChange} 
                        value={this.state.C}
                    />    

                    <p>
                        Está para
                        <span> {this.state.X}</span>
                    </p>
        
                    <input 
                        type='submit' 
                        value='Calcular' 
                    />
   
                </form>

            </div>
            
        )
    }
}

export default RegraDe3