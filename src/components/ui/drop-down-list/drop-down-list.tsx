import { ChangeEventHandler } from "react";
import classes from "./drop-down-list.module.css";

interface IDropDownProps {
    title: string,
    defaultValue?: string,
    valueList: IDropDownData[],
    changeHandler: ChangeEventHandler<HTMLSelectElement>,
}
interface IDropDownData {
    value: string,
    title: string,
}
const DropDownList = ({ title, defaultValue, valueList, changeHandler }: IDropDownProps) => {
    return (
        <div className={classes["book-shelf-changer"]}>
            <select
                defaultValue={defaultValue || "none"}
                onChange={changeHandler}
            >
                <option value="" disabled>
                    {title}
                </option>
                {
                    valueList.map(listData => (
                        <option key={listData.value} value={listData.value}>{listData.title}</option>
                    ))
                }
                <option value="none">None</option>
            </select>
        </div>
    );
};

export default DropDownList;