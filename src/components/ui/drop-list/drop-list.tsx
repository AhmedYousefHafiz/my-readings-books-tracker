import { IDropDownProps } from "../../../models/dropDownItem";
import classes from "./drop-list.module.css";

const DropList = ({
  title,
  defaultValue,
  valueList,
  changeHandler,
}: IDropDownProps) => {
  return (
    <div className={classes["book-shelf-changer"]}>
      <select defaultValue={defaultValue || "none"} onChange={changeHandler}>
        <option value="" disabled>
          {title}
        </option>
        {valueList.map((listData) => (
          <option key={listData.value} value={listData.value}>
            {listData.title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default DropList;
