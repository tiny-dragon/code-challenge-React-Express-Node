import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Alerts from './components/layout/Alerts';

import AlbumState from './context/album/AlbumState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AlbumState>
      <AlertState>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Alerts />
            <Home />
          </div>
        </Fragment>
      </AlertState>
    </AlbumState>
  );
};

export default App;
