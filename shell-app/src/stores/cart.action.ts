import { createAction, props } from "@ngrx/store";

export const AddToCart = createAction(
    'AddToCart',
    props<{count: number}>()
)