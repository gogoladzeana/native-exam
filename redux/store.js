import { createStore } from "redux";
import { storeReducer } from "./reducer";

export const store = createStore(
    storeReducer
)