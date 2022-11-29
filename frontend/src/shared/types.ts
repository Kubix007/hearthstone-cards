export interface IAuthState {
  user: IUserData;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface ICardsState {
  cards: {
    cards: ICardData[];
    cardCount: number;
    pageCount: number;
    page: number;
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

export interface IRegisterUserData {
  login: string;
  email: string;
  password: string;
  passwordRepeat: string;
}

export interface ILoginUserData {
  email: string;
  password: string;
}

export interface IUserData {
  _id: string;
  login: string;
  email: string;
  token: string;
}

export interface ICardData {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: number[];
  spellSchoolId: number;
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  keywordIds: number[];
  duels: {
    relevant: boolean;
    constructed: boolean;
  };
}

export interface IFilterState {
  pagination: {
    page: number;
    perPage: number;
  };
  filters: {
    set: {
      name: string;
      value: string;
    };
    class: {
      name: string;
      value: string;
    };
    manaCost: string[];
    attack: {
      name: string;
      value: string;
    };
    health: {
      name: string;
      value: string;
    };
    rarity: string;
    type: string;
    minionType: string;
    keyword: string;
    textFilter: string;
    gameMode: {
      name: string;
      value: string;
    };
    sort: string;
  };
}

export interface IFilters {
  set: {
    name: string;
    value: string;
  };
  class: {
    name: string;
    value: string;
  };
  manaCost: string[];
  attack: {
    name: string;
    value: string;
  };
  health: {
    name: string;
    value: string;
  };
  rarity: string;
  type: string;
  minionType: string;
  keyword: string;
  textFilter: string;
  gameMode: {
    name: string;
    value: string;
  };
  sort: string;
}
