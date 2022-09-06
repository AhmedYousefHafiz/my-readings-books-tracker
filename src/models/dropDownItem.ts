import { ChangeEventHandler } from "react";

export interface IDropDownItem {
  value: string;
  title: string;
}

export interface IDropDownProps {
  title: string;
  defaultValue?: string;
  valueList: IDropDownItem[];
  changeHandler: ChangeEventHandler<HTMLSelectElement>;
}
