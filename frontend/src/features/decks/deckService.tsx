import axios from "axios";
import { ICreateDeckData, IGetDecksResponse } from "../../shared/types";

const API_URL = "/api/decks/";

// Create new deck
const createDeck = async (deckData: ICreateDeckData, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, deckData, config);

  return response.data;
};

// Get user decks
const getUserDecks = async (token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Update user deck
const updateDeck = async (deckData: IGetDecksResponse, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(API_URL + deckData._id, deckData, config);

  return response.data;
};

// Delete user deck
const deleteDeck = async (deckId: string, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + deckId, config);

  return response.data;
};

const deckService = {
  createDeck,
  getUserDecks,
  deleteDeck,
  updateDeck,
};

export default deckService;
