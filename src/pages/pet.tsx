import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'
import '../css/index.css'

const PetPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <p>This is the Pet Page</p>
            <Link to='/'>Go to the home page!</Link>
        </div>

    )
}

export default PetPage;