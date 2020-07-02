// libraries
import { 
  createStore, applyMiddleware, compose 
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../src/ducks/rootReducer';
import rootSaga from '../src/ducks/rootSaga';

// receives reducers to be added to the Redux store
const configureStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = createSagaMiddleware();

  const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(middleware)
  ));

  middleware.run(rootSaga);

  return store;
};

export default configureStore;
