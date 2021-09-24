import React from "react";
import Link from "../link/link";
import logo from '../../assets/img/cuerpo-exploracion.png'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <nav>
                <div>
                    <img src={logo} alt="" />
                    <h1>Shingeki no Kyojin</h1>
                </div>
                
                <ul>
                    <Link link="#" description="Detalle de personajes" />
                    <Link link="#" description="Acerca de" />
                </ul>
            </nav>
        )
    }
}

export default Navbar;