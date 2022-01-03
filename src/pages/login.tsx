import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

const LoginPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <p>You can login if you have an account or <Link to='/register'>sign up!</Link> </p>
        </div>
    )
}

export default LoginPage;