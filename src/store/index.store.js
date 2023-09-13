//utils
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
//reducers
import SearchReducer from "./reducers/Search.reducer"
//saga
import saga from "../middleWares/saga/search.saga"

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
	search: SearchReducer
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(saga)
