import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class SideLink extends Component {

    render() {

        return (
            <Link className="side-menu-link" to={this.props.link.url}>
                <div className="side-link-content">
                    {this.props.link.name}
                </div>
            </Link>
        )
    }
}

export default SideLink
