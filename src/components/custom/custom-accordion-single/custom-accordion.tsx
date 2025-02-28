import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PropsWithChildren } from "react";
import { CustomAccordionItem } from "./custom-accordion-item";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends PropsWithChildren {
  type?: "single" | "multiple";
  collapsible?: boolean;
}

const CustomAccordion = (props: IProps) => {
  const { children, type = "single", collapsible = true } = props;
  return (
    <Accordion type={type} collapsible={collapsible}>
      {children}
    </Accordion>
  );
};

CustomAccordion.Item = CustomAccordionItem;

export { CustomAccordion };
