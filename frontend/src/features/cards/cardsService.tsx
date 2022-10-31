import axios from "axios";

const API_URL = "https://us.api.blizzard.com/hearthstone/";
const ACCESS_TOKEN = "EUI3nxBUsz6qGwjSmnVi8gxnjTMWW9wPsk";
const LOCALE = "en_US";

// Get all cards
const getAllCards = async () => {
  const config = {
    params: {
      locale: LOCALE,
      access_token: ACCESS_TOKEN,
    },
  };

  const response = await axios.get(API_URL + "cards", config);

  return response.data;
};

const cardService = {
  getAllCards,
};

export default cardService;
