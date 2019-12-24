import React, { Component } from 'react';
import './SideMenu.css';
import './../SideLink';
import SideLink from './../SideLink';

export class SideMenu extends Component {

    state = {

        links : [
            {
                name : "Página Inicial",
                url : "/"
            },
            {
                name : "Calculadora Regra de Três",
                url : "/calculadora-regra-de-tres"
            },
            {
                name : "Calculadora de Porcentagem",
                url : "/calculadora-porcentagem"
            },
            {
                name : "Sorteador",
                url : "/sorteio"
            },
            {
                name : "Gerador de Grupos",
                url : "/gerador-de-grupos"
            },
            {
                name : "Conversor de Tempo",
                url : "/conversor-de-tempo"
            }
        ]
    }

    renderLinks = () => {

        return (

            this.state.links.map( (link) => {

                return(
                    <SideLink link={link} key={link.name}></SideLink>
                )
            })
        )
    }
    
    render() {
        return (
            <div className="side-menu">
                <div className="link-holder">
                    {
                       this.renderLinks()
                    }
                </div>
            </div>
        )
    }
}

export default SideMenu
