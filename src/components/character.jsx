import React from "react";

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <div>
                <img src={this.props.photo} alt="" />
                <h4> {this.props.fullName} </h4>
            </div>
        )
    }
}

export default Character;