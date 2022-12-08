import axios from "axios";

const API_URL = "https://us.api.blizzard.com/hearthstone/metadata/keywords";
const ACCESS_TOKEN = "EUPoE73oh87l5r9cs2DvGGsu2CS5VqjeX5";
const LOCALE = "pl_pl";

// Get specific metadata
const getMetadata = async () => {
  const config = {
    params: {
      locale: LOCALE,
      access_token: ACCESS_TOKEN,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const metadataService = {
  getMetadata,
};

export default metadataService;
