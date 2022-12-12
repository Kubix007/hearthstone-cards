import { ICardData } from "../../../shared/types";

export interface SimpleDialogProps {
  open: boolean;
  onClose: any;
  cards: ICardData;
}
