import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sidebarReducer from "./sidebar_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
})

let store = createStore(reducers);


export default store;
