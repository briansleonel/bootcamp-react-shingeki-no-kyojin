import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import styles from './form-contact.module.css';

export const minCharAsunto = 10;
export const maxCharMensaje = 256;

export const validate = (input) => {
    let errors = {};

    if(!input.email){
        errors.email = "El Correo Electrónico es requerido."
    } else if(!/\S+@\S+\.\S+/.test(input.email)){
        errors.email = "Correo Electrónico no válido."
    }

    if(!input.asunto) {
        errors.asunto = "El Asunto es requerido."
    } else if (input.asunto.length < minCharAsunto) {
        errors.asunto = `Debe contener al menos ${minCharAsunto} caracteres.`
    }

    if(!input.mensaje) {
        errors.mensaje = 'El Mensaje es requerido.'
    } else if(input.mensaje.length > maxCharMensaje) {
        errors.mensaje = "Se ha excedido el número de caracteres permitidos."
    }

    return errors;
}

const FormContact = (props) => {

    //const minCharactersAsunto = minCharAsunto;
    const maxCharactersMensaje = maxCharMensaje;

    const [state, setSate] = useState({
        email : '',
        asunto : '',
        mensaje : ''
    })

    const [fails, setFails] = useState({
        email : '',
        asunto : '',
        mensaje : ''
    })

    const [cantCharacters, setCantCharacters] = useState({
        asunto : 0,
        mensaje : 0
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    //useEffect()

    function onHandleChange(event) {
        setSate({
            ...state,
            [event.target.name] : event.target.value
        })

        setFails(
            validate({
                ...state,
                [event.target.name] : event.target.value
            })
        )
        /*
        setCantCharacters({
            ...cantCharacters,
            [event.target.name] : event.target.value.length
        });

        setButtonDisabled(disableButton());
        */
    }
    
    /*
    const disableButton = () => {
        return (fails.email || fails.asunto || fails.mensaje) ? true : false;
    }
    */

    // Se hace uso de un hook para verificar que cuando se actualice el estado, se setee la cantidad de caracteres del asunto y mensaje, y se desactive el botón
    useEffect(() => {
        setCantCharacters({
            asunto : state.asunto.length,
            mensaje : state.mensaje.length
        });
        
        setButtonDisabled((fails.email || fails.asunto || fails.mensaje) ? true : false);
        
    }, [state, fails])

    

    return(
        <Form className={styles.formContact}>
            <Container className="m-0 p-0">
                <Row className="justify-content-center">
                    <Col sm='12'>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Ingrese su email" value={state.email} onChange={(event) => onHandleChange(event)} />
                            
                            <p className={styles.textError}>{fails.email}</p>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Form.Group className="mb-3" controlId="asunto">
                            <Form.Label>Asunto - {cantCharacters.asunto}</Form.Label>
                            <Form.Control name="asunto" type="text" placeholder="Ingrese el asunto del email" value={state.asunto} onChange={(event) => onHandleChange(event)} />
                            
                            <p className={styles.textError}>{fails.asunto}</p>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Form.Group className="mb-3" controlId="mensaje">
                            <Form.Label>Mensaje - {cantCharacters.mensaje}/{maxCharactersMensaje}</Form.Label>
                            <Form.Control name="mensaje" as="textarea" type="text" placeholder="Ingrese su mensaje" value={state.mensaje} style={{height : '100px'}} onChange={(event) => onHandleChange(event)} />
                            
                            <p className={styles.textError}>{fails.mensaje}</p>
                        </Form.Group>
                    </Col>
                    <Col sm='12'>
                        <Button variant="primary" type="button" disabled={buttonDisabled} className={styles.button}>Enviar</Button>
                    </Col>
                </Row>
            </Container>
        </Form>
    )
}

export default FormContact;