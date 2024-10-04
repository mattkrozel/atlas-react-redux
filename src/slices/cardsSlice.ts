import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


interface Card {
    id: string;
    title: string;
    description: string;
    listId: string;
}

interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        createCard: (state, action: PayloadAction<{ listId: string; title: string; description: string }>) => {
            const newCard = {
                id: uuidv4(),
                title: action.payload.title,
                description: action.payload.description,
                listId: action.payload.listId,
            };
            state.cards.push(newCard);
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter((card) => card.id !== action.payload);
        },
        clearCards: (state) => {
            state.cards = [];
        },
    },
});

export const { createCard, deleteCard, clearCards } = cardsSlice.actions;

export default cardsSlice.reducer;