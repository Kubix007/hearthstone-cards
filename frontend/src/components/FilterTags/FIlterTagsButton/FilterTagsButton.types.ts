import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Props {
  filters: string;
  dispatchAction: ActionCreatorWithPayload<any, any>;
  initialValue:
    | { value: string; name: string }
    | string[]
    | string
    | { value: string; name: string }
    | { value: string; name: string; manaValue: string[] };
  helpFunction?: any;
  setAmountOfTags: any;
}
