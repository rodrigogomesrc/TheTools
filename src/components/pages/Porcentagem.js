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
                <div className="top-line line-box"></div>
                <div className="box">
                    <div className="box-content">
                        <h2 className="box-title">Porcentagem</h2>
                        <form onSubmit={this.onSubmit}>

                        </form>
                    </div>
                </div>
        
            </div>
        )
    }
}

export default Porcentagem