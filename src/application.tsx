import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom'
import logging from "./config/logging";
import authRoutes from './config/routes';
import 'bulma/css/bulma.css';

const Application: React.FunctionComponent<{}> = props => {
  useEffect(() => {
    logging.info('Loading application');
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {authRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Application