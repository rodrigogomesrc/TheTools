import React, { Component } from 'react'
import "./timeConverter.css";

export default class TimeConverter extends Component {

    state = {

        unitOne: "default",
        unitTwo: "default",
        valueOne: 0,
        valueTwo: 0,
        valueError: false,
        emptyUnitError: false,
        unities : ["Segundo", "Minuto", "Hora", "Dia", "Semana", "Mês", "Ano"],
        result: null
    }

    //say that convert using months may be imprecise because a month has variable days and we'll consider 
    // always 30 days and other cases can be imprecise as well

    hourToMinute = () => {

        const {valueOne} = this.state;
        let minutes = valueOne * 60;
        this.setState({valueTwo: minutes});
    }

    minuteToHour = () => {

        const {valueOne} = this.state;
        let hours = valueOne / 60;
        hours = Number(hours.toFixed(2));
        this.setState({valueTwo: hours});
    }

    secondToMinute = () => {

        const {valueOne} = this.state;
        let minutes = valueOne / 60;
        minutes = Number(minutes.toFixed(2));
        this.setState({valueTwo: minutes});
    }

    minuteToSecond = () => {

        const { valueOne} = this.state;
        let seconds = valueOne * 60;
        this.setState({valueTwo: seconds});
    }
    
    hourToSecond = () => {

        const {valueOne} = this.state;
        let seconds = valueOne * 3600;
        this.setState({valueTwo: seconds});
    }

    secondToHour = () => {

        const {valueOne} = this.state;
        let hours = valueOne / 3600;
        hours = Number(hours.toFixed(2));
        this.setState({valueTwo: hours});
    }

    hourToDay = () => {

        const {valueOne} = this.state;
        let days = valueOne / 24;
        days = Number(days.toFixed(2));
        this.setState({valueTwo: days});
    }

    dayToHour = () => {

        const {valueOne} = this.state;
        let hours = valueOne * 24;
        this.setState({valueTwo: hours});
    }

    dayToMinute = () => {

        const {valueOne} = this.state;
        let minutes = valueOne * 1440;
        this.setState({valueTwo: minutes});
    }

    minuteToDay = () => {

        const {valueOne} = this.state;
        let days = valueOne / 1440;
        days = Number(days.toFixed(3));
        this.setState({valueTwo: days});
    }

    dayToSecond = () => {

        const {valueOne} = this.state;
        let seconds = 86400 * valueOne;
        this.setState({valueTwo: seconds});
    }

    secondToDay = () => {

        const {valueOne} = this.state;
        let days = valueOne / 86400;
        days = Number(days.toFixed(3));
        this.setState({valueTwo: days});
    }

    sameUnit = () => {

        const {valueOne} = this.state;
        this.setState({valueTwo: valueOne});
    }

     convertionFunctionKeys = {

        MinutoHora : this.minuteToHour,
        HoraMinuto : this.hourToMinute,
        MinutoSegundo : this.minuteToSecond,
        SegundoMinuto : this.secondToMinute,
        HoraSegundo : this.hourToSecond,
        SegundoHora : this.secondToHour,
        DiaHora : this.dayToHour,
        HoraDia : this.hourToDay,
        DiaMinuto : this.dayToMinute,
        MinutoDia : this.minuteToDay,
        SegundoDia : this.secondToDay,
        DiaSegundo : this.dayToSecond,

    }

    convert = () => {

        const {unitOne, unitTwo} = this.state;

        if(this.validate()){

            let requestedConversion = unitOne.toString() + unitTwo.toString();
            let conversion = this.convertionFunctionKeys[requestedConversion];

            if(conversion !== undefined){

                conversion();

            } else {
               
               this.sameUnit();
           }
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
                        <p className="error" id="regra3-error">Escolha as duas unidades</p>
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

        const {unitOne, unitTwo} = this.state;

        if(unitOne === "default" || unitTwo === "default"){

            this.setState({emptyUnitError: true});
            return false;

        }

        this.setState({emptyUnitError: false});
        return true;
    }

    setUnit = e => {

        const {unitOne, unitTwo} = this.state;

        if(unitOne !== "default" && unitTwo !== "default"){

            if(e.target.name === "first-unit") {

                this.setState({"unitOne": e.target.value}, () => (this.convert()));
    
            } else {
    
                this.setState({"unitTwo": e.target.value}, () => (this.convert()));
            }

        } else {

            if(e.target.name === "first-unit") {

                this.setState({"unitOne": e.target.value});
    
            } else {
    
                this.setState({"unitTwo": e.target.value});
            }
        }
    }

    onChange = e => {

        this.setState({"valueOne" : e.target.value}, () => (this.convert()));
       
    }

    render() {
        return (
            <div className="Container" id="regra3">
                <div className="top-line line-box"></div>
                <div className="box">
                    
                    <div className="box-content">

                        <h2 className="box-title">Conversor de Tempo</h2>
                        
                        <div className="row" >

                            <div id="time-converter">

                                <form>
                                    <div className="form-item">
                                            <select 
                                                className="select-form time-converter-select" 
                                                onChange={this.setUnit} 
                                                name="first-unit"
                                            >
                                            <option value="default"> Selecione uma unidade</option>)
                                            {
                                                this.state.unities.map((option) => (
                                                    <option value={option} key={option}>{option}</option>)
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
                                            value={this.state.valueOne}
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
                                            value={this.state.valueTwo}
                                            readOnly 
                                        />

                                    <div className="form-item">

                                    </div>
                                    <div className="form-item">

                                        <select 
                                            className="select-form time-converter-select" 
                                            onChange={this.setUnit} 
                                            name="second-unit"
                                        >
                                            <option value="default"> Selecione uma unidade</option>)
                                            {
                                                this.state.unities.map((option) => (
                                                    <option value={option} key={option}>{option}</option>)
                                                )
                                            }
        
                                        </select>

                                    </div>

                                </form>

                            </div>

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
