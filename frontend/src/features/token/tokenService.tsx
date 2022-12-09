import axios from "axios";

const AUTH_API_URL = "https://oauth.battle.net/token";
const CLIENT_ID = "895041f8939b4bcda290154431d4054f";
const CLIENT_SECRET = "9h0CIm4YUPdCFGdY7uamrRWGpAvNeHh6";
const GRANT_TYPE = "client_credentials";

const updateAccessToken = (value: string) => {
  localStorage.setItem("token", value);
};

const removeAccessToken = () => {
  localStorage.removeItem("token");
};

const getAccessToken = async () => {
  const config = {
    params: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: GRANT_TYPE,
    },
  };

  try {
    const response = await axios.post(AUTH_API_URL, null, config);
    return response.data;
  } catch (error: any) {
    console.log(error);
  }
};

const tokenService = {
  updateAccessToken,
  removeAccessToken,
  getAccessToken,
};

export default tokenService;
