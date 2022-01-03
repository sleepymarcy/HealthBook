import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'

const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <div className="content">
                        <p>This is the Home Page</p>
                        <div><Link to='/login'>Login</Link></div>
                        <div><Link to='/register'>Sign Up</Link></div>
                        <div><Link to='/pets/:petname'>Go to the pet page!</Link></div>
                        <div><Link to='/pets'>Go to the pets page!</Link></div>
                        <div><Link to='/newpet'>Add a new pet</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HomePage;