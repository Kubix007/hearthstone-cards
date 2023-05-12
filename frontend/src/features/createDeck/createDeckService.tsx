import axios from "axios";
import { IAccessToken } from "../../shared/types";
import tokenService from "../token/tokenService";

const CARDS_API_URL = "https://us.api.blizzard.com/hearthstone/";
const LOCALE = "pl_pl";

// Get all cards
const getHeroPower = async (heroPowerCardId: number) => {
  const API_TOKEN: IAccessToken = await tokenService.getAccessToken();

  const config = {
    params: {
      locale: LOCALE,
      access_token: API_TOKEN.access_token,
      id: heroPowerCardId,
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

const createDeckService = {
  getHeroPower,
};

export default createDeckService;
