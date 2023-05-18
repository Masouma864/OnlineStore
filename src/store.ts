import { configureStore } from "@reduxjs/toolkit";
import products from "./Products/products.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        products
    }

});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
