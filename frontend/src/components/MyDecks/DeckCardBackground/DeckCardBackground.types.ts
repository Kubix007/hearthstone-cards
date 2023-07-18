import * as SharedTypes from "../../../shared/types";

export interface IProps {
  deck: {
    _id?: string;
    deckName: string;
    deckCode: string;
    version: string;
    format: string;
    hero: SharedTypes.IHero;
    heroPower: SharedTypes.IHeroPower;
    class: {
      slug: string;
      id: number;
      name: string;
    };
    cards: SharedTypes.ICardData[];
    cardCount: number;
  };
}

export interface IBackgroundProps {
  backgroundimg: string;
}
