import axios from "axios";
import { IFilters } from "../../shared/types";

const API_URL = "https://us.api.blizzard.com/hearthstone/";
const ACCESS_TOKEN = "EUOKRVr80It2OfQuX3BXefSaXm27Se9bFX";
const LOCALE = "pl_pl";

// Get all cards
const getAllCards = async (filters: IFilters) => {
  const config = {
    params: {
      locale: LOCALE,
      access_token: ACCESS_TOKEN,
      manaCost: filters.manaCost.join(),
    },
  };

  const response = await axios.get(API_URL + "cards", config);

  return response.data;
};

const cardService = {
  getAllCards,
};

export default cardService;
