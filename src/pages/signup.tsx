import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'
import Nav from '../components/Navbar/nav'
import '../css/index.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck, faLock } from '@fortawesome/free-solid-svg-icons'

const SignupPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <Nav />
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
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Repeat Password" />
                            <span className="icon is-small is-left">
                                <FontAwesomeIcon icon={faLock} />
                            </span>
                        </p>
                    </div>
                    <div className="field log-button" id="">
                        <p className="control">
                            <button className="button is-success">
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
                <p>Already have an account? <Link to='/login' className="link-to">Login here!</Link></p>
            </div>
        </div>


    )
}

export default SignupPage;