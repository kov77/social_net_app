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
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <DialogsContainer
                  store={props.store} />
            )}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
                store={props.store}
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
