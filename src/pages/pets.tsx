import React, { useEffect } from 'react';
import IPage from '../interfaces/page'
import logging from '../config/logging'
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'

const PetsPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    useEffect(() => {
        logging.info(`Loading ${props.name}`)
    }, [props.name]);

    return (
        <div>
            <Link to='/'>Go to the home page!</Link>
        </div>
    )
}

export default withRouter(PetsPage);