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
    page: number | null;
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
  minionTypeId: number;
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

export interface IHeroPower {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: number[];
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
  parentId: number;
  childIds: number[];
}

export interface IHero {
  id: number;
  collectible: number;
  slug: string;
  classId: number;
  multiClassIds: number[];
  cardTypeId: number;
  cardSetId: number;
  rarityId: number;
  artistName: string;
  health: number;
  manaCost: number;
  name: string;
  text: string;
  image: string;
  imageGold: string;
  flavorText: string;
  cropImage: string;
  parentId: number;
  childIds: number[];
}

export interface ISelectedCard {
  selectedCard: ICardData;
  selectedIndex: number;
}

export interface IPagination {
  page: {
    name: string;
    value: string;
  };
  perPage: number;
}

export interface IFilterState {
  pagination: {
    page: {
      name: string;
      value: string;
    };
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
    manaCost: {
      name: string;
      value: string;
      manaValue: string[];
    };
    attack: {
      name: string;
      value: string;
    };
    health: {
      name: string;
      value: string;
    };
    rarity: {
      name: string;
      value: string;
    };
    type: {
      name: string;
      value: string;
    };
    minionType: {
      name: string;
      value: string;
    };
    keyword: {
      name: string;
      value: string;
    };
    spellSchool: {
      name: string;
      value: string;
    };
    textFilter: string;
    gameMode: {
      name: string;
      value: string;
    };
    sort: {
      name: string;
      value: string;
    };
    neutralCards: string;
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
  rarity: {
    name: string;
    value: string;
  };
  spellSchool: {
    name: string;
    value: string;
  };
  type: {
    name: string;
    value: string;
  };
  minionType: {
    name: string;
    value: string;
  };
  keyword: {
    name: string;
    value: string;
  };
  textFilter: string;
  gameMode: {
    name: string;
    value: string;
  };
  sort: {
    name: string;
    value: string;
  };
}

export interface IMetadataState {
  metadata: {
    keywords: [
      {
        id: number;
        slug: string;
        name: string;
        refText: string;
        text: string;
        gameModes: number[];
      }
    ];
    sets: [
      {
        id: number;
        name: string;
        slug: string;
        type: string;
        collectibleCount: number;
        collectibleRevealedCount: number;
        nonCollectibleCount: number;
        nonCollectibleRevealedCount: number;
      }
    ];
    types: [
      {
        slug: string;
        id: number;
        name: string;
        gameModes: number[];
      }
    ];
    rarities: [
      {
        slug: string;
        id: number;
        craftingCost: number[];
        dustValue: number[];
        name: string;
      }
    ];
    classes: [
      {
        slug: string;
        id: number;
        name: string;
        cardId: number;
        heroPowerCardId: number;
        alternateHeroCardIds: number[];
      }
    ];
    minionTypes: [
      {
        slug: string;
        id: number;
        name: string;
        gameModes: number[];
      }
    ];
    setGroups: [
      {
        slug: string;
        year: number;
        svg: string;
        cardSets: string[];
        name: string;
        standard: boolean;
        icon: string;
      }
    ];
  };
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export interface IMetadataKeyword {
  id: number;
  slug: string;
  name: string;
  refText: string;
  text: string;
  gamemodes: number[];
}

export interface IAccessToken {
  access_token: string;
  token_type: string;
  expires_in: number;
  sub: string;
}

export interface ISelectedFormat {
  standard: boolean;
  classic: boolean;
  wild: boolean;
}

export interface ICreatedDeck {
  hero: number;
  ids: string;
}

export interface IDeckInfo {
  deckCode: string;
  version: number;
  format: string;
  hero: IHero;
  childIds: number[];
  heroPower: IHeroPower;
  class: {
    slug: string;
    id: number;
    name: string;
  };
  cards: ICardData[];
}

export interface ICreateDeckState {
  isSelected: boolean;
  deck: {
    deckCode: string;
    format: string;
    hero: {
      slug: string;
      id: number;
      name: string;
      cardId: number;
      heroPowerCardId: number;
      alternateHeroCardsIds: number[];
    } | null;
    heroPower: IHeroPower | null;
    class: {
      slug: string;
      id: number;
      name: string;
    } | null;
    cards: ICardData[];
    cardCount: number;
  };
  addedCard: ICardData;
  manaCosts: {
    manaCosts: {
      value: number;
      count: number;
    }[];
    highestManaCost: number;
  };
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}
