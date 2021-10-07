import React from "react";

import styles from './character.module.css';

const Character = (props) => {
    const {img, firstName, lastName} = props;

    return(
        <div className={styles.cardCharacters} >
            <img src={img} alt={`Imagen de ${firstName} ${lastName}`} title={`Imagen de ${firstName} ${lastName}`} />
            <h4> {firstName} {lastName} </h4>
        </div>
    )
}

export default Character;