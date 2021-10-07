import React from "react";
import FormContact from "../FormContact/form-contact";
import { Col, Container, Row } from 'react-bootstrap';

import styles from './about.module.css';

const About = () => {
    return(
        <Container className={styles.about}>
            <Row className="justify-content-center p-2">
                <Col sm='12' md="8">
                    <h4 className={styles.subtitle}>Acerca de...</h4>
                    <p>
                        &nbsp;Se presenta una Aplicación Web Dinámica, en la cuál se representan algunos de los personajes del anime <a href="https://shingeki-no-kyojin.fandom.com/es/wiki/Categor%C3%ADa:Personajes" className={styles.bold}>Shingeki no Kyojin</a>, con una descripción y detalles de cada uno de ellos.
                        <br />
                        &nbsp;Toda la información de los personajes que se muestra en esta aplicación, fue usada de la página <a href="https://shingeki-no-kyojin.fandom.com/es/wiki/Shingeki_no_Kyojin_Wiki" className={styles.bold}>Shingeki no Kyojin Fandom</a>.
                    </p>
                </Col>
                <Col sm='12' md="8">
                    <h4 className={styles.subtitle}>Tecnologías...</h4>
                    <p>
                        &nbsp;Esta aplicación fue desarrollada con el framework de <a href="https://reactjs.org/" className={styles.bold}>React JS</a>, con el objetivo de practicar el uso de la librería. En este proyecto se trabajo con <a href="https://reactjs.org/docs/hooks-intro.html" className={styles.bold}>React Hooks</a>, y además se usó <a href="https://reactrouter.com/web/guides/quick-start" className={styles.bold}>React Router</a> para trabajar con con rutas y parámetros sobre la aplicación.
                    </p>
                </Col>
                <Col sm='12' md="8">
                    <h4 className={styles.subtitle}>Acerca del desarrollador...</h4>
                    <p>
                        Autor: <a href="https://www.instagram.com/briansleonel/" className={styles.links}>González Brian Leonel</a>
                    </p>
                    <p>
                        Email: <a href="mailto:gonzalezbrianleonel76@gmail.com" className={styles.links}>gonzalezbrianleonel76@gmail.com</a>
                    </p>
                    <p>
                        Github: <a href="https://github.com/briansleonel" className={styles.links}>briansleonel</a>
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center p-2">
                <Col sm="12" md="8">
                    <h4 className={styles.subtitle}>Contacto</h4>

                    <Row className="justify-content-center">
                        <Col sm='12' md="8">
                            <FormContact />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

/*
<>
            <section id="about" className="about">
                <div>
                    <h4>Acerca de...</h4>
                    <p>
                        &nbsp;Se presenta una Aplicación Web Dinámica, en la cuál se representan algunos de los personajes del anime <a href="https://shingeki-no-kyojin.fandom.com/es/wiki/Categor%C3%ADa:Personajes" className="bold">Shingeki no Kyojin</a>, con una descripción y detalles de cada uno de ellos.
                        <br />
                        &nbsp;Toda la información de los personajes que se muestra en esta aplicación, fue usada de la página <a href="https://shingeki-no-kyojin.fandom.com/es/wiki/Shingeki_no_Kyojin_Wiki" className="bold">Shingeki no Kyojin Fandom</a>.
                    </p>

                    <h4>Tecnologías...</h4>
                    <p>
                        &nbsp;Esta aplicación fue desarrollada con el framework de <a href="https://reactjs.org/" className="bold">React JS</a>, con el objetivo de practicar el uso de la librería. En este proyecto se trabajo con <a href="https://reactjs.org/docs/hooks-intro.html" className="bold">React Hooks</a>, y además se usó <a href="https://reactrouter.com/web/guides/quick-start" className="bold">React Router</a> para trabajar con con rutas y parámetros sobre la aplicación.
                    </p>
                </div>

                <div>
                    <h4>Acerca del desarrollador...</h4>
                    <p>
                        Autor: <a href="https://www.instagram.com/briansleonel/" className="link-about">González Brian Leonel</a>
                    </p>
                    <p>
                        Email: <a href="mailto:gonzalezbrianleonel76@gmail.com" className="link-about">gonzalezbrianleonel76@gmail.com</a>
                    </p>
                    <p>
                        Telefono: <a href="https://api.whatsapp.com/send?phone=543884762196&text=" className="link-about">+54 388 476 2196</a>
                    </p>
                    <p>
                        Github: <a href="https://github.com/briansleonel" className="link-about">briansleonel</a>
                    </p>
                </div>
            </section>
            <FormContact />
        </>
*/

export default About;