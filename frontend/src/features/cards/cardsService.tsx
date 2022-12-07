import axios from "axios";
import { IFilters } from "../../shared/types";

const API_URL = "https://us.api.blizzard.com/hearthstone/";
const ACCESS_TOKEN = "EUPoE73oh87l5r9cs2DvGGsu2CS5VqjeX5";
const LOCALE = "pl_pl";

// Get all cards
const getAllCards = async (filters: IFilters) => {
  const config = {
    params: {
      locale: LOCALE,
      access_token: ACCESS_TOKEN,
      manaCost: filters.manaCost.join(),
      class: filters.class.value,
      set: filters.set.value,
      gameMode: filters.gameMode.value,
      textFilter: filters.textFilter,
      attack: filters.attack.value,
      health: filters.health.value,
      type: filters.type.value,
      minionType: filters.minionType.value,
      spellSchool: filters.spellSchool.value,
      rarity: filters.rarity.value,
      keyword: filters.keyword.value,
      sort: filters.sort.value,
    },
  };

  const response = await axios.get(API_URL + "cards", config);

  return response.data;
};

const cardService = {
  getAllCards,
};

export default cardService;
