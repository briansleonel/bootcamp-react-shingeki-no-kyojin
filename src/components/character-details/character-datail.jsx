import React from "react";
import CardCharacterSelected from "./card-character";

class CharacterDetail extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;

        this.state = {
            characterSelected : this.props.charactersData[0]
        }
    }

    onChangeSelect = (event) => {
        this.setState(() => {
            return {
                characterSelected : this.props.charactersData.find(element => element._id === event.target.value)
            }
        })
        
    }

    render() {
        const characters = this.props.charactersData.map((element) => {
            return <option value={element._id}> {`${element.firstName} ${element.lastName}`} </option>
        })

        return(
            <>
                <section className="" id="character-details">
                    <h4 className="title">Detalle de los personajes</h4>
                        
                    <div className="character-details">
                        <form className="select-character" action="">
                            <label htmlFor="characterDetail">Seleccione un personaje:</label>
                            <select className="select-character-form" name="characterDetail" id="characterDetail" onChange={event => this.onChangeSelect(event)}>
                                {characters}
                            </select>
                        </form>

                        <CardCharacterSelected character={this.state.characterSelected} />
                    </div>
                </section>
            </>
        )
    }
}

export default CharacterDetail;