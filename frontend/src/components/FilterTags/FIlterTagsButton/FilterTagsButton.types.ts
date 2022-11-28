import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Props {
  filters: string;
  dispatchAction: ActionCreatorWithPayload<any, any>;
  initialValue: { value: string; name: string } | string[];
  helpFunction?: any;
}
