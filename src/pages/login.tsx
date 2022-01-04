import React, { useEffect } from 'react';
import '../css/index.css'
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from '@fortawesome/free-solid-svg-icons'

const LoginPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div className="login-wrapper">
            <div className="box box-wrapper">
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        <span className="icon is-small is-right">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                    </p>
                </div>
                <div className="field log-button" id="">
                    <p className="control">
                        <Link to='/'>
                            <button className="button is-success">
                                Login
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
            <p>Don't have an account? <Link to='/register' className='link-to'>Register here!</Link></p>
        </div>
    )
}

export default LoginPage;