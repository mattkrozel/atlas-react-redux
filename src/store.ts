import { configureStore } from "@reduxjs/toolkit";
import listsReducer from './slices/listsSlice';
import cardsReducer from './slices/cardsSlice';


export const store = configureStore({
    reducer: {
        lists: listsReducer,
        cards: cardsReducer,
    }
});
//these types helpful for typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

