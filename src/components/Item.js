import React, {Component} from 'react';
import './Item.css';

class Item extends Component {

    state = {

    };

  
    render() {

        const {title, url, text} = this.props.data;

        return(

            <div>
                <div className="top-line"></div>
                <div className="item-content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <a href={url}>Acessar</a>
                </div>
            </div>
        )
    }
}

export default Item