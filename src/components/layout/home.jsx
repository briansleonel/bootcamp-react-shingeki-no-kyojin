import React from "react";

import Character from "../character/character";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {

        const characters = this.props.charactersData.map((element) => {
            return <Character img={element.photo} fullName={`${element.firstName} ${element.lastName}`} />
        })

        return(
            <>
                <section className="home">
                    <h3 className="title">Personajes</h3>
                    <div className="home-characters">
                        {characters}
                    </div>
                </section>
            </>
        )
    }

}

export default Home;