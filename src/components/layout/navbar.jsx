import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/img/cuerpo-exploracion.png';

import { Navbar, Container } from 'react-bootstrap';

import styles from './navbar.module.css';

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Link to="/" className={styles.navTitle}>
                        <img src={logo} alt="" />
                        <h1>Shingeki no Kyojin</h1>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <ul className={styles.navLinks}>
                        <li>
                            <NavLink to="/" exact className={styles.hoverTransform} activeClassName={styles.navLinkActive} >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/charDetail" className={styles.hoverTransform} activeClassName={styles.navLinkActive}>Detalle de personajes</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={styles.hoverTransform} activeClassName={styles.navLinkActive}>Acerca de</NavLink>
                        </li>
                    </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComponent;