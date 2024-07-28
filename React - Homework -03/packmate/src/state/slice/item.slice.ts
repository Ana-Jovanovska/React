import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../models/item.model";
import dataItemJSON from "../../data/dataItem.json";

interface ItemState {
  value: Item[];
}

const initialState: ItemState = {
  value: dataItemJSON.map((item) => {
    return { ...item, quantity: 0, isPacked: false };
  }),
};

const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addQuntityItem(state, { payload: selectItem }: PayloadAction<Item>) {
      for (const item of state.value) {
        if (item.id === selectItem.id) {
          item.quantity++;
          break;
        }
      }
    },
    removeQuntityItem(state, { payload: selectItem }: PayloadAction<Item>) {
      for (const item of state.value) {
        if (item.id === selectItem.id && item.quantity !== 0) {
          item.quantity--;
          break;
        }
      }
    },
    isPacked(state, { payload: selectItem }: PayloadAction<Item>) {
      for (const item of state.value) {
        if (item.id === selectItem.id) {
          item.isPacked = true;
          break;
        }
      }
    },
    removeIsPackedItem(state, { payload: selectItem }: PayloadAction<Item>) {
      for (const item of state.value) {
        if (item.id === selectItem.id) {
          item.isPacked = false;
          break;
        }
      }
    },
  },
});

export const {
  addQuntityItem,
  removeQuntityItem,
  isPacked,
  removeIsPackedItem,
} = itemSlice.actions;

export default itemSlice;
