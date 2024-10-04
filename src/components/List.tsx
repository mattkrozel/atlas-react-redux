import React from "react";
import DeleteListButton from "./DeleteListButton";
import Card from './Card';
import NewCardForm from "./NewCardForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteList } from "../slices/listsSlice";
import { RootState } from "../store";

interface ListProps {
    title: string;
    listId: string;
}



const List: React.FC<ListProps> = ({ title, listId }) => {
    
    const dispatch = useDispatch();
    
    const cards = useSelector((state: RootState) => state.cards.cards);
    
    const listCards = cards.filter((card) => card.listId === listId);
    
    const handleDeleteList = () => {
        dispatch(deleteList(listId));
    };


    return (
        <div className="group/list h-full min-w-96 p-4">
            <DeleteListButton onClick={handleDeleteList} />
            <h3>{title}</h3>
            {listCards.map((card) => (
                <Card key={card.id} id={card.id} title={card.title} description={card.description} />
            ))}
            <NewCardForm listId={listId} />
        </div>
    );
};

export default List;