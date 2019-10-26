import React, { Component } from 'react'

export default class TimeConverter extends Component {

    state = {

        unitOne: "default",
        unitTwo: "default",
        valueError: false,
        emptyUnitError: false,
        unities : ["Segundo", "Minuto", "Hora", "Dia", "Semana", "Mês", "Ano"]

    }

    //say that convert using months may be imprecise because a month has variable days and we'll consider 
    // always 30 days and other cases can be imprecise as well

    convert = () => {

        if(this.validate()){

            console.log("converting");
        }
    }

    error = () => {

        const { valueError, emptyUnitError } = this.state;

        if(valueError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Valores inválidos</p>
                    </div>

                </div>
            )

        } 
        if(emptyUnitError){

            return(
                <div className="row">

                    <div>
                        <p className="error" id="regra3-error">Olha as duas unidades</p>
                    </div>

                </div>
            )

        } else {

            return(
                <div className='temp-separator' id='sorteio-separador'></div>
            )
        }


    }

    validate = () => {

        return true;
    }

    OnChange = e => {

    }

    render() {
        return (
            <div className="Container" id="regra3">
                <div className="top-line line-box"></div>
                <div className="box">
                    
                    <div className="box-content">

                        <h2 className="box-title">Conversor de Tempo</h2>
                        
                        <div className="row">

                            <form>
                                <div className="form-item">
                                    <select>
                                        <option value="default"> Selecione uma unidade</option>)
                                        {
                                            this.state.unities.map((option) => (
                                                <option value={option} >{option}</option>)
                                            )
                                        }
    
                                    </select>

                                </div>
                                <div className="form-item">
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="unitOne" 
                                        placeholder="Número" 
                                        onChange={this.onChange} 
                                    />

                                </div>

                                <div className="form-item">
                                    <p>=</p>
                                </div>
                                    <input 
                                        className='input'
                                        type='text' 
                                        name="unitTwo" 
                                        placeholder="Número" 
                                        onChange={this.onChange} 
                                    />

                                <div className="form-item">

                                </div>
                                <div className="form-item">

                                    <select>
                                        <option value="default"> Selecione uma unidade</option>)
                                        {
                                            this.state.unities.map((option) => (
                                                <option value={option} >{option}</option>)
                                            )
                                        }
    
                                    </select>

                                </div>

                            </form>
        
                        </div>
                        <div className="row">

                            {
                                this.error()
                            }

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
