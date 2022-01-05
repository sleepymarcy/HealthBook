import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'
import Nav from '../components/Navbar/nav'
import '../css/index.css'

const StartPage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <Nav />
            <div className="start-tiles">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title tile-title">Owner</p>
                            <p className="subtitle">
                                <div className="buttons">
                                    <div className="button is-light">
                                        <Link to='/register' className='link'>Sign up</Link>
                                    </div>
                                    <div className="button is-light">
                                        <Link to='/login' className='link'>Log in</Link>
                                    </div>
                                </div>
                            </p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title tile-title">Vet</p>
                            <p className="subtitle">
                                <div className="buttons">
                                    <div className="button is-light">
                                        <Link to='/register' className='link'>Sign up</Link>
                                    </div>
                                    <div className="button is-light">
                                        <Link to='/login' className='link'>Log in</Link>
                                    </div>
                                </div>
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default StartPage;