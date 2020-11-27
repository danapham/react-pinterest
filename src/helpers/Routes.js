import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../views/Home';
import BoardForm from '../views/BoardForm';
import Boards from '../views/Boards';
import PinDetails from '../views/PinDetails';
import PinForm from '../views/PinForm';
import Pins from '../views/Pins';
import SingleBoard from '../views/SingleBoard';
import NotFound from '../views/NotFound';
import SearchResults from '../views/SearchResults';

export default function Routes({ authed }) {
  return (
          <Switch>
            <Route exact path='/' component={() => <Home authed={authed} />} />
            <Route exact path='/boardform' component={() => <BoardForm authed={authed} />} />
            <PrivateRoute exact path='/boards/' component={Boards} user={authed} />
            <Route exact path='/pindetails/:id' component={(props) => <PinDetails authed={authed} {...props} />} />
            <Route exact path='/pinform' component={() => <PinForm authed={authed} />} />
            <PrivateRoute exact path='/pins' component={Pins} user={authed} />
            <Route exact path='/boards/:id' component={(props) => <SingleBoard authed={authed} {...props} />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
            <Route exact path='/search/:term/:type' component={(props) => <SearchResults {...props} />} />
          </Switch>
  );
}

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
