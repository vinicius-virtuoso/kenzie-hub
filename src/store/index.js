import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import userReducer from "./modules/user/reducer";
import loadingReducer from "./modules/loading/reducer";
import techsReducer from "./modules/techs/reducer";

const reducers = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  techs: techsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
