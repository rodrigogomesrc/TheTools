import React from 'react'
import { Link } from 'react-router-dom';
import SideMenu from './layout/SideMenu'; 

let titleFour = {

    marginTop : "20px",
    marginBottom : "10px"
}

let titleTwo = {

    marginTop : "20px"
}

let linkStyle = {

    marginBottom : "20px",
}

function TimeConverterInfo() {

    return (
        <div className="page-content">

            <div className="side-content">
                <SideMenu></SideMenu>
            </div>
            <div className="main-content">
                <div className="Container" id="regra3">

                    <div style={linkStyle}>
                        <Link className="page-link"to={"/conversor-de-tempo"}> Voltar para o conversor de tempo</Link>
                    </div>

                    <h1>Sobre os cálculos de conversão de tempo</h1>

                    <p>
                        Como os meses a anos não tem durações exatas, é necessário fazer certas aproximações e assumir fórmulas
                        para certas conversões de modo a manter o mais fiel possível. Dessa forma, essas conversões são feitas
                        como mostradas a seguir:
                    </p>
                    <h3 style={titleTwo}>Durações consideradas</h3>

                    <h4 style={titleFour}>Duração de um mês</h4>

                    <p>
                    Foi considerado a duração de um mês como a média de duração de todos os meses, 
                    considerando também que a cada quatro ano há um dia a mais no ano,
                    modificando a média de duração de um mês. Dessa forma, 43710 minutos.
                    </p>
                    <p>
                    Na conversão entre meses e dias, é feita uma aproximação para que um mês seja igual a 365/12,
                    o que equivale a 30,4167 dias.
                    </p>

                    <h4 style={titleFour}>Duração de um ano</h4>
                    <p>
                    Como a cada quatro anos é adicionado um dia no calendário, a duração de um ano foi 
                    dada com base em uma média representado esse período de 4 anos, portanto, 
                    é considerado 365,25 dias como a duração de um ano.
                    </p>
                    <h4 style={titleFour}>Duração de um mês em dias</h4>
                    <p>
                    Para as conversões entre dias e mẽs, 
                    é considerado um mês com duração de 30 dias.
                    </p>
                    <h4 style={titleFour}>Duração de um mês em semanas</h4>
                    <p>
                    Para as conversões entre meses e semanas, 
                    é considerado um mês com 4 semanas completas.
                    </p>

                    <h3 style={titleTwo}>Conversão de meses</h3>

                    <h4 style={titleFour}>Para dias</h4>
                    <p>É considerado um mês como 30,4167 dias</p>
                    <h4 style={titleFour}>Para horas</h4>
                    <p>Considerando 728 horas de um total de um total de 728.5 considerada
                    a média calculada de dias em um mês.
                    </p>
                    <h4 style={titleFour}>Para minutos</h4>
                    <p>43710, conforme a duração média do ano.</p>
                    <h4 style={titleFour}>Para segundos</h4>
                    <p>É considerado segundos para um mês de 43710 minutos.</p>

                    <h3 style={titleTwo}>Conversão de anos</h3>

                    <h4 style={titleFour}>Para dias</h4>
                    <p>É considerado 365 dias para um ano.</p>
                    <h4 style={titleFour}>Para horas</h4>
                    <p>
                    É considerado horas para um ano de 365,25 dias,
                    que é a média em um período de 4 anos.
                    </p>
                    <h4 style={titleFour}>Para minutos</h4>
                    <p>É considerado minutos para um ano de 365,25 dias.
                    </p>
                    <h4 style={titleFour}>Para segundos</h4>
                    <p>
                    É considerado segundos para um ano de 365,25 dias.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default TimeConverterInfo
