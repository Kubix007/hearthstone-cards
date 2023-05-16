import axios from "axios";
import { IAccessToken, IFilterState } from "../../shared/types";
import tokenService from "../token/tokenService";

const CARDS_API_URL = "https://us.api.blizzard.com/hearthstone/";
const LOCALE = "pl_pl";

// Get all cards
const getAllCards = async (filters: IFilterState) => {
  const API_TOKEN: IAccessToken = await tokenService.getAccessToken();

  const config = {
    params: {
      locale: LOCALE,
      access_token: API_TOKEN.access_token,
      manaCost: filters.filters.manaCost.manaValue.join(),
      class:
        filters.filters.neutralCards.length > 0
          ? `${filters.filters.class.value},${filters.filters.neutralCards}`
          : filters.filters.class.value,
      set: filters.filters.set.value,
      gameMode: filters.filters.gameMode.value,
      textFilter: filters.filters.textFilter,
      attack: filters.filters.attack.value,
      health: filters.filters.health.value,
      type: filters.filters.type.value,
      minionType: filters.filters.minionType.value,
      spellSchool: filters.filters.spellSchool.value,
      rarity: filters.filters.rarity.value,
      keyword: filters.filters.keyword.value,
      sort: filters.filters.sort.value,
      page: filters.pagination.page.value,
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
