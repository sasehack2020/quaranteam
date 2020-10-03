import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import AppMap from './AppMap';
import Quiz from './Quiz';
import Landing from './Landing';
import { Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  useLocation,
  Link,
  Switch,
  Route
} from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AMComponent() {
  let query = useQuery();

  return <AppMap state={query.get('state')}/>;
}

var routes = [
    {
        path: '/',
        exact: true,
        main: () => <Landing/>
    },
    {
        path: '/map',
        main: () => <AMComponent/>
    },
    {
        path: '/quiz',
        main: () => <Quiz/>
    }
]

function HeaderComponent() {
    let query = useQuery();

    return (
        <div>
            <Navbar bg='primary' expand=''>
                <Navbar.Brand href={`${process.env.PUBLIC_URL}`}>
                    Quaranteam
                </Navbar.Brand>
                <Navbar.Toggle style={{ 'backgroundColor': '#7DC242' }} aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link><Link to={'/'}>Home</Link></Nav.Link>
                        <Nav.Link><Link to={`/map?state=${query.get('state')}`}>Map</Link></Nav.Link>
                        <Nav.Link><Link to={'/quiz'}>Quiz</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <div style={{ 'paddingTop': 20 }}>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.main/>}
                        />
                    ))}
                </div>
            </Switch>
        </div>
    );
}

export default function Header() {
    document.title = "Quaranteam";
    return (
        <Router basename={`${process.env.PUBLIC_URL}/`}>
            <HeaderComponent/>
        </Router>
    )
}