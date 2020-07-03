import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from './pages/Resgister/register'
import Login from './pages/Login/login'
import Profile from './pages/Profile/profile'
import Incidents from './pages/newIncidents/newincidents'


const rotas = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/Incidents/new" component={Incidents} />
            </Switch>
        </BrowserRouter>
    )
}
export default rotas