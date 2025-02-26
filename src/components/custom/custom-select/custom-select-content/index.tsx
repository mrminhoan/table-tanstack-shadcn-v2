import { SelectContent, SelectItem } from "@/components/ui/select";
import { ReactNode } from "react";

interface ISelectItem {
  value: string;
  label: string | ReactNode;
}
interface IProps {
  classNameItem?: string;
  data: ISelectItem[];
}
function CustomSelectContent(props: IProps) {
  const { classNameItem, data } = props;
  return (
    <>
      <SelectContent>
        {data?.map((item) => {
          return (
            <SelectItem value={item.value} className={classNameItem} key={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </>
  );
}

export default CustomSelectContent;
