import React from 'react';
import { Link } from 'react-router-dom';
import SideMenu from './../layout/SideMenu';

function NotFound(){

    return(
        
        <div className="page-content">
            <div className="side-content">
                <SideMenu></SideMenu>
            </div>
            <div className="main-content">
                <div className="Container">
                    <h2 id="page-title" style={{marginBottom: '20px'}}>Ops... parece que a página que você acessou não existe</h2>
                    <p>
                        Clique  <Link to="/" className="page-link"> Aqui </Link> para ser redirecionado para a página inicial
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NotFound