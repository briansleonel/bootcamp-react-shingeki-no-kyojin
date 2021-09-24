import React from "react";

const showArrayElements = (array) => array.map((element) => {
        return <li> {element} </li>;
})

const CardCharacterSelected = (characterSelected) => {
    const {character} = characterSelected;

    return(
        <div className="card-character-selected">
            <div className="character-selected-img">
                <img src={character.photo} alt="" />
            </div>

            <div className="character-selected-body">
                <h4> {`${character.firstName} ${character.lastName}`} </h4>

                <table>
                    <tr>
                        <td className="element">Fecha de nacimiento:</td>
                        <td className="content"> {character.dateBirth} </td>
                    </tr>
                    <tr>
                        <td className="element">Especie:</td>
                        <td className="content"> {character.species} </td>
                    </tr>
                    <tr>
                        <td className="element">Ocupación:</td>
                        <td className="content"> {character.occupation} </td>
                    </tr>
                    <tr>
                        <td className="element">Titanes:</td>
                        <td className="content">
                            <ul className="element-ul"> {showArrayElements(character.titans)} </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className="element">Armas:</td>
                        <td className="content">
                            <ul className="element-ul"> {showArrayElements(character.weapons)} </ul>
                        </td>
                    </tr>
                </table>

                <blockquote>
                    <p className="phrase"> "{character.phrase.description}"</p>
                    <p className="context-phrase"> - {character.phrase.context} </p>
                </blockquote>
            </div>
        </div>
    )
}

/*

                    <tr>
                        <td>Amigos:</td>
                        <td>
                            <ul> {showArrayElements(character.friends)} </ul>
                        </td>
                    </tr>
*/

/*

            <p>Fecha de nacimiento: <span> {character.dateBirth} </span> </p>
            <p>Especie: <span> {character.species} </span> </p>
            <p>Ocupación: <span> {character.occupation} </span> </p>
            <p>Titanes: <span> {showArrayElements(character.titans)} </span> </p>
            <p>Amigos: <span> {showArrayElements(character.friends)} </span> </p>
            <p>Armas: <span> {showArrayElements(character.weapons)} </span> </p>
            <p>Descripción: <span> {character.phrase.description} </span> </p>
*/

export default CardCharacterSelected;