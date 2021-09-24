import React from "react";

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
        console.log(this.state)
        const characters = this.props.charactersData.map((element) => {
            return <option value={element._id}> {`${element.firstName} ${element.lastName}`} </option>
        })

        return(
            <>
                <section className="character-details">
                    <h4 className="title">Detalle de los personajes</h4>
                    <div className="">
                        <form action="">
                            <label htmlFor="characterDetail">Elija una opción</label>
                            <select className="select-character" name="characterDetail" id="characterDetail" onChange={event => this.onChangeSelect(event)}>
                                {characters}
                            </select>
                        </form>
                    </div>

                    <div>
                        <h4> {this.state.characterSelected.firstName} </h4>
                    </div>
                </section>
            </>
        )
    }
}

export default CharacterDetail;