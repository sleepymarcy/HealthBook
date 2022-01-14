import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { Link } from 'react-router-dom'
import Nav from '../components/Navbar/nav'
import '../css/index.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'
import kicia from '../assets/Kicia.jpg'

const HomePage: React.FunctionComponent<IPage> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);


    const [value, onChange] = useState(new Date());

    return (
        <div className="container">
            <Nav />

            <div className="home-tiles top">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <Link to="/pets"><p className="title tile-title">Pets</p></Link>
                            <p className="subtitle">
                                <div className="image-wrapper aligned">
                                    <div className="image-cropper">
                                        <img src={kicia} alt="Kicia" />
                                    </div>
                                    <span>Kicia</span>
                                </div>
                            </p>
                        </article>



                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <Link to="/vets"><p className="title tile-title">Vets</p></Link>
                        </article>
                    </div>
                </div>
            </div>
            <div className="home-tiles bot">
                <div className="tile is-ancestor">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title tile-title">Appointments</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <Link to="/calendar"><p className="title tile-title">Calendar</p></Link>

                            <Calendar
                                className="container"
                                onChange={onChange}
                                value={value}
                            />
                        </article>
                    </div>
                </div>
            </div>

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