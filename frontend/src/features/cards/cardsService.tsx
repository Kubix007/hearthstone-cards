import axios from "axios";
import { IAccessToken, IFilters } from "../../shared/types";
import tokenService from "../token/tokenService";

const CARDS_API_URL = "https://us.api.blizzard.com/hearthstone/";
const LOCALE = "pl_pl";

// Get all cards
const getAllCards = async (filters: IFilters) => {
  const API_TOKEN: IAccessToken = await tokenService.getAccessToken();

  const config = {
    params: {
      locale: LOCALE,
      access_token: API_TOKEN.access_token,
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

  try {
    const response = await axios.get(CARDS_API_URL + "cards", config);
    return response.data;
  } catch (error: any) {
    if (error.message === "Request failed with status code 401") {
      const prevRequest = error.config;
      const newToken: IAccessToken = await tokenService.getAccessToken();
      tokenService.updateAccessToken(newToken.access_token);
      return (await axios(prevRequest)).data;
    } else {
      console.log(error);
    }
  }
};

const cardService = {
  getAllCards,
};

export default cardService;
