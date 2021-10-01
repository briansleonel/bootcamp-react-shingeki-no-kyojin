import React from "react";

const showArrayElements = (array) => array.map((element, index) => {
        return <li key={index}> {element} </li>;
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
                    <tbody>
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
                    </tbody>
                </table>

                <blockquote>
                    <p className="phrase"> "{character.phrase.description}"</p>
                    <p className="context-phrase"> - {character.phrase.context} </p>
                </blockquote>
            </div>
        </div>
    )
}

export default CardCharacterSelected;