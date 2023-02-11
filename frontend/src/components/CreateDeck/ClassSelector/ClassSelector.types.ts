import { ISelectedFormat } from "../../../shared/types";

export interface IProps {
  classInfo: {
    name: string;
    displayName: string;
    image: string;
    isNotClassic: boolean;
  };
  selectedFormat: ISelectedFormat;
}

export interface ICoverProps {
  src: string;
  alt: string;
}

export interface IContainerProps {
  isclassic: any;
}
