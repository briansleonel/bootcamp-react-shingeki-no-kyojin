import React from "react";
import Link from "../link/link";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <nav>
                <h1>Shingeki no Kyojin</h1>
                
                <ul>
                    <Link link="#" description="Detalle de personajes" />
                    <Link link="#" description="Acerca de" />
                </ul>
            </nav>
        )
    }
}

export default Navbar;