import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";
interface ISelectItem {
  value: string;
  label: string | ReactNode;
}
interface IProps extends PropsWithChildren {
  //   data: ISelectItem[];
  classNameContainer?: string;
  classNameTrigger?: string;
  //   classNameItem?: string;
  placeholder?: string;
}
function CustomSelect(props: IProps) {
  const {
    // data,
    classNameContainer,
    placeholder,
    classNameTrigger,
    // classNameItem,
    children,
  } = props;
  return (
    <div className={classNameContainer}>
      <Select>
        <SelectTrigger className={cn("w-[180px]", classNameTrigger)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{children}</SelectContent>
      </Select>
    </div>
  );
}

export default CustomSelect;
