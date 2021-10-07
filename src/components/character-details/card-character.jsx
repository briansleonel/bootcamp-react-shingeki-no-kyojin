import React from "react";

import styles from './card-character.module.css'

const showArrayElements = (array) => array.map((element, index) => {
        return <li key={index}> {element} </li>;
})

const CardCharacterSelected = (characterSelected) => {
    const {character} = characterSelected;

    return(
        <div className={styles.cardCharacterSelected}>
            <div className={styles.characterSelectedImg}>
                <img src={character.photo} alt="" />
            </div>

            <div className={styles.characterSelectedBody}>
                <h4> {`${character.firstName} ${character.lastName}`} </h4>

                <table>
                    <tbody>
                        <tr>
                            <td className={styles.element}>Fecha de nacimiento:</td>
                            <td className={styles.content}> {character.dateBirth} </td>
                        </tr>
                        <tr>
                            <td className={styles.element}>Especie:</td>
                            <td className={styles.content}> {character.species} </td>
                        </tr>
                        <tr>
                            <td className={styles.element}>Ocupación:</td>
                            <td className={styles.content}> {character.occupation} </td>
                        </tr>
                        <tr>
                            <td className={styles.element}>Titanes:</td>
                            <td className={styles.content}>
                                <ul className={styles.elementUl}> {showArrayElements(character.titans)} </ul>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.element}>Armas:</td>
                            <td className={styles.content}>
                                <ul className={styles.elementUl}> {showArrayElements(character.weapons)} </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <blockquote>
                    <p className={styles.phrase}> "{character.phrase.description}"</p>
                    <p className={styles.contextPhrase}> - {character.phrase.context} </p>
                </blockquote>
            </div>
        </div>
    )
}

export default CardCharacterSelected;