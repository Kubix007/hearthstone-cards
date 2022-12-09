import axios from "axios";
import { IAccessToken } from "../../shared/types";
import tokenService from "../token/tokenService";

const API_URL = "https://us.api.blizzard.com/hearthstone/metadata";
const LOCALE = "pl_pl";

// Get specific metadata
const getMetadata = async () => {
  const API_TOKEN: IAccessToken = await tokenService.getAccessToken();

  const config = {
    params: {
      locale: LOCALE,
      access_token: API_TOKEN.access_token,
    },
  };

  try {
    const response = await axios.get(API_URL, config);
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

const metadataService = {
  getMetadata,
};

export default metadataService;
