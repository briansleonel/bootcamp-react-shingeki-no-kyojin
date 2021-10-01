import React from "react";

const About = () => {
    return(
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
    )
}

export default About;