import { ICardData } from "../../../shared/types";

export interface Props {
  card: ICardData;
}

export interface ComponentProps {
  image?: string;
  cost?: string;
}

export interface ButtonProps {
  $count: boolean;
}

export interface CardPreviewProps {
  yHeight: number;
}
