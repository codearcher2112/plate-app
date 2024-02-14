import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

export default function Select() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Filter"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          color="success"
          variant="faded"
          className="capitalize"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Multiple selection example"
        variant="flat"
        closeOnSelect={false}
        disallowEmptySelection
        selectionMode="multiple"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="meals">Meals</DropdownItem>
        <DropdownItem key="drinks">Drinks</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
