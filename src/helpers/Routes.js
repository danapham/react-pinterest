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
            <Route exact path='/boardform' component={() => <BoardForm />} />
            <Route exact path='/boards' component={() => <Boards />} />
            <Route exact path='/pindetails' component={() => <PinDetails />} />
            <Route exact path='/pinform' component={() => <PinForm />} />
            <Route exact path='/pins' component={() => <Pins />} />
            <Route exact path='/singleboard' component={() => <SingleBoard />} />
            <Route exact path='/notfound' component={() => <NotFound />} />
          </Switch>
        </Router>
  );
}
