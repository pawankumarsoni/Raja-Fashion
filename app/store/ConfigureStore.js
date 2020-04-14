import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from '../redux/reducers';
import rootSaga from '../redux/sagas';
import { routerMiddleware } from 'connected-react-router';

// blacklist is also one of the keys in persistConfig. It defines which are the reducers do not want to save in the persistence storage.
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['router']
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    // create store
    const store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            )
        )
    );
    let persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    
    return { store, persistor };
}

export const storeInst = configureStore();
