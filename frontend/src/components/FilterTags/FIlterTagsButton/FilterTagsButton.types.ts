import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Props {
  filters: string;
  dispatchAction: ActionCreatorWithPayload<any, any>;
  initialValue: { value: string; name: string } | string[] | string;
  helpFunction?: any;
  setAmountOfTags: any;
}
