/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Setings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
              />
            )}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
              />
            )}
          />
          <Route
              path="/users"
              render={ () => <UsersContainer/>}/>
          {/*<Route*/}
          {/*  path="/news"*/}
          {/*  render={() => <News/>}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*  path="/music"*/}
          {/*  render={() => <Music/>}*/}
          {/*/>*/}
          {/*<Route*/}
          {/*  path="/settings"*/}
          {/*  render={() => <Settings/>}*/}
          {/*/>*/}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
