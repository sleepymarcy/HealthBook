import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'
import Nav from '../components/Navbar/nav'
import '../css/index.css'

const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <Nav />
            <div className="home-tiles">
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
            {/* <div className='columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd main'>
                <div className="card column">
                    <div className="card-content">
                        <p className="title">
                            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                        </p>
                        <p className="subtitle">
                            Jeff Atwood
                        </p>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                Share on <a href="#">Facebook</a>
                            </span>
                        </p>
                    </footer>
                </div>
                <div className="card column">
                    <div className="card-content">
                        <p className="title">
                            “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                        </p>
                        <p className="subtitle">
                            Jeff Atwood
                        </p>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                Share on <a href="#">Facebook</a>
                            </span>
                        </p>
                    </footer>
                </div>
            </div> */}

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