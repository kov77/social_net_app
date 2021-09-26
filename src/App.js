/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Setings/Settings';

const App = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs state={props.state.dialogsPage} store={props.store} />
            )}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/news"
            render={() => <News state={props.state.dialogsPage} />}
          />
          <Route
            path="/music"
            render={() => <Music state={props.state.dialogsPage} />}
          />
          <Route
            path="/settings"
            render={() => <Settings state={props.state.dialogsPage} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
