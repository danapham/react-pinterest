import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Home from '../views/Home';
import BoardForm from '../views/BoardForm';
import Boards from '../views/Boards';
import PinDetails from '../views/PinDetails';
import PinForm from '../views/PinForm';
import Pins from '../views/Pins';
import SingleBoard from '../views/SingleBoard';
import NotFound from '../views/NotFound';

export default function Routes(props) {
  return (
      <Router>
          <Switch>
            <Route exact path='/' component={() => <Home authed={props.authed} name='Dana' />} />
            <Route exact path='/boardform' component={() => <BoardForm authed={props.authed} />} />
            <Route exact path='/boards' component={() => <Boards authed={props.authed} />} />
            <Route exact path='/pindetails' component={() => <PinDetails authed={props.authed} />} />
            <Route exact path='/pinform' component={() => <PinForm authed={props.authed} />} />
            <Route exact path='/pins' component={() => <Pins authed={props.authed} />} />
            <Route exact path='/singleboard' component={() => <SingleBoard authed={props.authed} />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
          </Switch>
        </Router>
  );
}
