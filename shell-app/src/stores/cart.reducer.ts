import { createReducer, on } from "@ngrx/store";
import { AddToCart } from "./cart.action";

interface CartStore {
    count: number;
}

export const initCartStore : CartStore = {
    count: 0
}

export const cartReducer = createReducer(
    initCartStore,
    on(AddToCart, (state, {count})=>({...state, count: state.count + count}))
)