import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, withRouter } from 'react-router-dom';
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

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            // Functions to open and close a modal
            function openModal($el: any) {
                $el.classList.add('is-active');
            }

            function closeModal($el: any) {
                $el.classList.remove('is-active');
            }

            function closeAllModals() {
                (document.querySelectorAll('.modal') || []).forEach(($modal) => {
                    closeModal($modal);
                });
            }

            // Add a click event on buttons to open a specific modal
            (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
                const modal = ($trigger as any).dataset.target
                const $target = document.getElementById(modal);
                console.log($target);

                $trigger.addEventListener('click', () => {
                    openModal($target);
                });
            });

            // Add a click event on various child elements to close the parent modal
            (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
                const $target = $close.closest('.modal');

                $close.addEventListener('click', () => {
                    closeModal($target);
                });
            });

            // Add a keyboard event to close all modals
            document.addEventListener('keydown', (event) => {
                const e = event || window.event;

                if (e.keyCode === 27) { // Escape key
                    closeAllModals();
                }
            });
        });
    })

    return (
        <div className="container">
            <Nav />
            <div className="start-tiles">
                <div className="tile is-ancestor">
                    <div className="tile is-parent calendar-pad">
                        <article className="tile is-child">

                            <Calendar
                                className="calendar js-modal-trigger"
                                data-target="modal-js-example"
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
                            </ul>

                        </article>
                    </div>

                </div>

            </div>

            <div id="modal-js-example" className="modal">
                <div className="modal-background"></div>

                <div className="modal-content">
                    <div className="box">
                        <p>Modal JS example</p>
                    </div>
                </div>

                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    )
}

export default withRouter(CalendarPage);