import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import '../css/index.css'

const NewPetPage: React.FunctionComponent<IPage> = props => {
    
    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return <p>Here you can add new pet!</p>
}

export default NewPetPage;