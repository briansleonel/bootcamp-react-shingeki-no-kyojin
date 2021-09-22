import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <footer>
                <div>
                    <h4>Acerca de:</h4>
                    <p>
                        Aplicación desarrollada en React JS, con el objetivo de practicar el mismo.
                        <br />
                        Se presenta una pequeña aplicación web, en la cuál se representan algunos de los personajes del anime <b>Shingeki no Kyojin</b>, con una descripción y detalles de cada uno de ellos.
                    </p>
                </div>

                <div>
                    <h4>Contacto</h4>
                    <p>
                        <span>González Brian Leonel</span>
                    </p>
                    <p>
                        Email: <span>gonzalezbrianleonel76@gmail.com</span>
                    </p>
                    <p>
                        Telefono: <span>+54 388 476 2196</span>
                    </p>
                    <p>
                        Github: <a href="https://github.com/briansleonel">briansleonel</a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default About;