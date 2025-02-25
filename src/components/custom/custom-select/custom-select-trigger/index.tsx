import { cn } from "@/lib/utils";
import { SelectTrigger, SelectValue } from "@/components/ui/select";

interface Iprops {
  classNameContainer?: string;
  placeholder?: string;
}
function CustomSelectTrigger(props: Iprops) {
  const { classNameContainer, placeholder = "" } = props;
  return (
    <>
      <SelectTrigger className={cn("w-[180px]", classNameContainer)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
    </>
  );
}

export default CustomSelectTrigger;
