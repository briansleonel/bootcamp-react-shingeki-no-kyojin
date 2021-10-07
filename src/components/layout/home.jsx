import React from "react";
import { Link } from "react-router-dom";

import Character from '../character/character';
import isEmptyObject from "../../utils/utils-functions";

import styles from './home.module.css';

/*
    Componente de clase
*/
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    /**
     * Permite setear los characters
     * @param {*} characters 
     * @returns 
     */
    setCharacters(characters) {
        if(!isEmptyObject(characters)) {
            return this.mapCharacters(characters);
        } else {
            return <h4>No hay nada aún</h4>;
        }
    }

    /**
     * Permite mapear los personajes como un componente, de una determinada lista de personajes
     * @param {*} characters 
     * @returns characters mapeados
     */
    mapCharacters(characters) {
        return characters.map((element) => {
            return(
                <Link key={element._id} to={`/charDetail/${element._id}`}>
                    <Character img={element.photo} firstName={element.firstName} lastName={element.lastName} />
                </Link>
            )
        })
    }

    render() {

        const characters = this.setCharacters(this.props.charactersData);
        
        return(
            <>
                <section className={styles.home}>
                    <h3 className="title">Personajes</h3>
                    <div className={styles.homeCharacters}>
                        {characters}
                    </div>
                </section>
            </>
        )
    }

}

export default Home;