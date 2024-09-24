import { createContext, ReactNode } from "react";
import { Item } from "../models/item.model";
import femaleAndMaleJSON from "../data/femaleAndMaleData.json";
import { useState } from "react";

interface ItemLitsInterface {
  items: Item[];
  addQuntityItem: (selectedItem: Item) => void;
  removeQuntityItem: (selectedItem: Item) => void;
  isPackedItem: (selectedItem: Item) => void;
  removeIsPackedItem: (selectedItem: Item) => void;
  filterItemsByGender: (gender: string) => Item[];
}

export const ItemListContext = createContext<ItemLitsInterface>({
  items: [],
  addQuntityItem(){},
  removeQuntityItem() {},
  isPackedItem() {},
  removeIsPackedItem() {},
  filterItemsByGender() [],
});

function ItemLitsProviden({ children }: { children: ReactNode }) {
  const [item, setFemaleMaleItem] = useState<Item[]>(femaleAndMaleJSON);
  const [items, setItems] = useState<Item[]>

  const filterItemsByGender = (gender: string) => {
    return items.filter((item) => item.gender === gender);
  };

  const addQuntityItem = (selectItem: Item) => {
    setFemaleMaleItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === selectItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const removeQuntityItem = (selectItem: Item) => {
    setFemaleMaleItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === selectItem.id && item.quantity !== 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };
  const isPackedItem = (selectedItem: Item) => {
    setFemaleMaleItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === selectedItem.id) {
          item.isPacked = true;
          return item;
        } else {
          return item;
        }
      });
    });
  };
  const removeIsPackedItem = (selectedItem: Item) => {
    setFemaleMaleItem((prevItem) => {
      return prevItem.map((item) => {
        if (item.id === selectedItem.id) {
          item.isPacked = false;
          return item;
        } else {
          return item;
        }
      });
    });
  };

  return (
    <ItemListContext.Provider
      value={{
        items,
        addQuntityItem,
        removeQuntityItem,
        isPackedItem,
        removeIsPackedItem,
        filterItemsByGender,
      }}
    >
      {children}
    </ItemListContext.Provider>
  );
}

export default ItemLitsProviden;
