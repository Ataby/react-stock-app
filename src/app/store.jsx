import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
// BU STORAGE AKSI BELIRTILMEDIGI SURECE LOCAL.STORAGE KULLANIR. ISTERSEK SESSION.STORAGE'DA KULLANABILIRIZ.
//import storage from 'redux-persist/lib/storage/session' 
 
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig,  authReducer)
// const store = configureStore({
//   reducer: {
//     auth: persistReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });
// export const persistor = persistStore(store);
// export default store;
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
