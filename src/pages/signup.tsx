import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

const SignupPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <p>You can sign up if you don't have an account yet or <Link to='/login'>log into an existing account!</Link> </p>
        </div>
    )
}

export default SignupPage;