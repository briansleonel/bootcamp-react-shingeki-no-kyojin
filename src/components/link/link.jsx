import React from "react";

class Link extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <>
                <li>
                    <a href={this.props.link} className="hover-transform" > {this.props.description} </a>
                </li>
            </>
        )
    }
}

export default Link;