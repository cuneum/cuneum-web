import React from "react";
import { Item } from "../../types";
import { PanelList } from "../../components/Organisms/PanelList";

export function Home() {
  const items: Item[] = [];

  return (
    <>
      <PanelList items={items} />
    </>
  );
}
