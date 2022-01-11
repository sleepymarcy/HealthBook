import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import '../css/index.css';
import Nav from '../components/Navbar/nav';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment';

const CalendarPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    const [dateState, setDateState] = useState(new Date())
    const changeDate = (e: any) => {
        setDateState(e)
    }

    return (
        <div className="container">
            <Nav />
            <div className="start-tiles">
                <div className="tile is-ancestor">
                    <div className="tile is-parent calendar-pad">
                        <article className="tile is-child">
                            <Calendar
                                className="calendar"
                                value={dateState}
                                onChange={changeDate}
                            />
                        </article>
                    </div>
                    <div className="tile is-parent box-pad">
                        <article className="tile is-child box">
                            <p className="subtitle date-selected">
                                <p>{moment(dateState).format('MMMM Do YYYY')}</p>
                            </p>
                            <ul>
                                <li></li>
                            </ul>
                        </article>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default withRouter(CalendarPage);