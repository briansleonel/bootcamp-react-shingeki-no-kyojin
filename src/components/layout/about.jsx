import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <footer id="about" className="footer">
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
                        Autor: <span className="link-footer">González Brian Leonel</span>
                    </p>
                    <p>
                        Email: <span className="link-footer">gonzalezbrianleonel76@gmail.com</span>
                    </p>
                    <p>
                        Telefono: <a href="https://api.whatsapp.com/send?phone=543884762196&text=" className="link-footer">+54 388 476 2196</a>
                    </p>
                    <p>
                        Github: <a href="https://github.com/briansleonel" className="link-footer">briansleonel</a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default About;