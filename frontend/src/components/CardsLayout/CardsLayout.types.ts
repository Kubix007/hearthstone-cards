import { ICardData } from "../../shared/types";

export interface Props {
  card: ICardData;
  type: string;
}

export interface ImageProps {
  value: number;
  max: number;
}
