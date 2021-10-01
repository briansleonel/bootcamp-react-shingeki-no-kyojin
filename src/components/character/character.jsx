import React from "react";

const Character = (props) => {
    const {img, firstName, lastName} = props;

    return(
        <div className="card-characters" >
            <img src={img} alt={`Imagen de ${firstName} ${lastName}`} title={`Imagen de ${firstName} ${lastName}`} />
            <h4> {firstName} {lastName} </h4>
        </div>
    )
}

export default Character;