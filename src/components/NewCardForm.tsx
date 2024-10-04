import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCard } from '../slices/cardsSlice';

interface NewCardFormProps {
  listId: string;
}


const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
  const [cardTitle, setCardTitle] = useState('');
  const [cardDescription, setCardDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (cardTitle.trim()) {
      dispatch(createCard({ listId, title: cardTitle, description: cardDescription }));
      setCardTitle('');
      setCardDescription('');
    }
  };

  return (
      <div className="group/new-card m-3 flex h-44 w-full justify-center">
          <form
            onSubmit={handleAddCard}
            className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
          >
            <input
              className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
              autoFocus
              type="text"
              placeholder="Title"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
            />
            <textarea
              className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
              placeholder="Description"
              value={cardDescription}
              onChange={(e) => setCardDescription(e.target.value)}
            ></textarea>
            <button type="submit" className="w-full p-4">Save</button>
          </form>
        </div>
    );
};

export default NewCardForm;