import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
            <Route exact path='/home' component={() => <Home authed={authed} />} />
            <Route exact path='/boardform' component={() => <BoardForm authed={authed} />} />
            <Route exact path='/boards/' component={() => <Boards authed={authed} />} />
            <Route exact path='/pindetails' component={() => <PinDetails authed={authed} />} />
            <Route exact path='/pinform' component={() => <PinForm authed={authed} />} />
            <Route exact path='/pins' component={() => <Pins authed={authed} />} />
            <Route exact path='/boards/:id' component={(props) => <SingleBoard authed={authed} {...props} />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
            <Route exact path='/search/:term/:type' component={(props) => <SearchResults {...props} />} />
          </Switch>
  );
}
