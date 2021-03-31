import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { routes } from './register';
import { PrivateRoute } from './private/PrivateRoute.auth';

function Routers () {
    return (
        <Router>
            <Switch>
                {
                    routes.map(rt => (
                        rt.private ? (
                            <PrivateRoute
                            key={rt.path}
                                path={rt.path}
                                exact={rt.exact}
                                component={rt.component}
                            />
                        ) : (
                            <Route
                                key={rt.path}
                                path={rt.path}
                                exact={rt.exact}
                                component={rt.component}
                            />
                        )
                    ))
                }
            </Switch>
        </Router>
    )
}

export default Routers;