import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import  userReducer  from './User/userSlice';
import themeSlice from "./theme/themeSlice";
const rootReducer = combineReducers({
    user: userReducer,
    theme :themeSlice,
})
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export const persistor =  persistStore(store)