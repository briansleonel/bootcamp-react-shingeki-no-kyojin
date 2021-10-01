import React from "react";
//import Link from "../link/link";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/cuerpo-exploracion.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <nav>
                <Link to="/" className="nav-title">
                    <img src={logo} alt="" />
                    <h1>Shingeki no Kyojin</h1>
                </Link>
                
                <ul>
                    <li>
                        <NavLink to="/" exact className="hover-transform" activeClassName="navlink-active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/charDetail" className="hover-transform" activeClassName="navlink-active">Detalle de personajes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="hover-transform" activeClassName="navlink-active">Acerca de</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

/*
<Link link="#character-details" description="Detalle de personajes" />
                    <Link link="#about" description="Acerca de" />
*/

export default Navbar;