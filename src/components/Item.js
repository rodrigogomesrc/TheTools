import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

class Item extends Component {

    state = {

    };

  
    render() {

        const {title, url, text} = this.props.data;

        return(

            <div className="item-container">
                <div className="top-line"></div>
                <div className="item-content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Link className="navlink" to={url}>Acessar</Link>
                </div>
            </div>
        )
    }
}

export default Item