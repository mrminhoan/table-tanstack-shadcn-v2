import { DataTableContext } from "@/context/provider/data-table.provider";
import { useContext, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Column } from "@tanstack/react-table";
import { CheckedState } from "@radix-ui/react-checkbox";

function FilterController() {
  const { useTable } = useContext(DataTableContext);
  const [value, setValue] = useState<{ id: string; value: CheckedState }[]>([]);

  const handleCheckedChange = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    column: Column<any>,
    idOption: string,
    idColumn: string,
    state: CheckedState
  ) => {
    const newUpdate = { id: idOption, value: state };
    const fieldFindIndex = value.findIndex((item) => item.id === idOption);
    if (fieldFindIndex === -1) {
      column.setFilterValue([...value, newUpdate]);
      setValue((prev) => [...prev, newUpdate]);
      return;
    }

    let newValue = [...value];
    console.log({ newValue });

    if (!state) {
      // eslint-disable-next-line no-debugger
      newValue = newValue.splice(fieldFindIndex, 1);
    } else {
      newValue = newValue.splice(fieldFindIndex, 1, newUpdate);
    }

    setValue(newValue);
    column.setFilterValue(newUpdate);
  };

  return (
    <div>
      <Accordion type="multiple">
        {useTable.getFlatHeaders().map((header, index) => {
          const { column } = header;
          const { meta } = column.columnDef;

          if (!meta?.canSearch) return null;
          const { searchOptions } = meta;
          return (
            <div key={`item-${index + column.id}`}>
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                className="hover:no-underline"
                >
                  <p>
                    {(searchOptions?.label as string) ||
                      (column.columnDef.header as string)}
                  </p>
                </AccordionTrigger>
                <AccordionContent>
                  {(() => {
                    switch (searchOptions.type) {
                      case "input":
                        return (
                          <Input
                            placeholder="Search"
                            onChange={(e) =>
                              column.setFilterValue(e.target.value)
                            }
                          />
                        );
                      case "checkbox":
                        return (
                          <div className="flex flex-col gap-2">
                            {searchOptions?.options?.map((option) => {
                              return (
                                <div
                                  className="flex items-center gap-2 border border-stone-200 p-2 rounded-sm"
                                  key={option.value}
                                >
                                  <Checkbox
                                    id={option.value as string}
                                    onCheckedChange={(state) =>
                                      handleCheckedChange(
                                        column,
                                        option.value as string,
                                        column.id,
                                        state
                                      )
                                    }
                                  />
                                  <Label htmlFor={option.value as string}>
                                    {option.label}
                                  </Label>
                                </div>
                              );
                            })}
                          </div>
                        );
                      default:
                        return <div>Test</div>;
                    }
                  })()}
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem> */}
            </div>
          );
        })}
      </Accordion>
    </div>
  );
}

export default FilterController;
