import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardCharacterSelected from "./card-character";

import isEmptyObject from "../../utils/utils-functions";
import data from '../../data/data.json';

import styles from './character-detail.module.css'

const CharacterDetail = (props) => {

    const params = useParams();
    const [showWithParams, setShowWithParams] = useState(false);
    const [characterSelected, setCharacterSelected] = useState(null);

    useEffect(() => {
        //location.pathname !== '/charDetail'
        if(params.idCharacter !== undefined) {
            setShowWithParams(true);
        } else {
            setCharacterSelected(data.characters[0])
        }
    }, [showWithParams, params, props]);

    /*
    useEffect(() => {
        if (!isEmptyObject(props.charactersData)) {
            setCharacterSelected(props.charactersData[0])
        }
    }, [props])
    */

    const mapCharactersOptions = (charactersData) => {
        return charactersData.map((element) => {
            return <option key={element._id} value={element._id}> {`${element.firstName} ${element.lastName}`} </option>
        })
    }

    const charactersOptions = isEmptyObject(props.charactersData) ? null : mapCharactersOptions(props.charactersData);

    const onChangeSelect = (event) => {
        setCharacterSelected(() => {
            return props.charactersData.find(element => element._id === event.target.value)
        }) 
    }

    const cardWithParams = () => {
        const character = data.characters.find(element => element._id === params.idCharacter)

        return(
            <CardCharacterSelected character={character} />
        )
    }    

    return(
        <>
            {
                (!showWithParams) ? (
                    <section className={styles.characterDetails} id="character-details">
                        <h4 className="title">Detalle de los personajes</h4> 
                        {
                            characterSelected !== null ? (
                                <div className={styles.characterDetails}>
                                    <form className={styles.selectCharacter} action="">
                                        <label htmlFor="characterDetail">Seleccione un personaje:</label>
                                        <select className={styles.selectCharacterForm} name="characterDetail" id="characterDetail" onChange={event => onChangeSelect(event)}>
                                            {charactersOptions}
                                        </select>
                                    </form>

                                    <CardCharacterSelected character={characterSelected} />
                                </div>
                            ) : (
                                <h4>ERROR</h4>
                            )
                        }
                    </section>
                ) : (
                    <>
                        { cardWithParams() }
                    </>
                ) 
            }
        </>
    )
}

export default CharacterDetail;