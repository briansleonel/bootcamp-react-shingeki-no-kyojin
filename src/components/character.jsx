import React from "react";

class Character extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {


        return(
            <div className="card-characters">
                <img src={this.props.img} alt="" />
                <h4> {this.props.fullName} </h4>
            </div>
        )
    }
}


export default Character;