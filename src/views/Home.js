import React from 'react';
import BoardContainer from '../components/BoardContainer';
import Auth from '../components/Auth/index';

export default function Home(props) {
  const loadComponent = () => {
    let component = '';
    if (props.authed) {
      component = <BoardContainer />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
      <h1>Home: {props.name}</h1>
      {loadComponent()}
    </div>
  );
}
