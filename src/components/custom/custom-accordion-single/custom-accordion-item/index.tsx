import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionSingleProps } from "@radix-ui/react-accordion";
import { PropsWithChildren } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type TProps = PropsWithChildren & Omit<AccordionSingleProps, "type"> & {};

const CustomAccordionItem = (props: TProps) => {
  const { value, children } = props;
  return <AccordionItem value={value}>{children}</AccordionItem>;
};

CustomAccordionItem.Trigger = AccordionTrigger;
CustomAccordionItem.Content = AccordionContent;

export { CustomAccordionItem };
