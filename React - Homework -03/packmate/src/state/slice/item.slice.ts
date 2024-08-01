import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../models/item.model";
import dataItemJSON from "../../data/dataItem.json";
import { v4 as uuid } from "uuid";

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

    addNewItem(state, { payload: { title, category, gender } }) {
      const findItems = state.value.find((item) => item.description === title);

      if (findItems) return;

      const newItem: Item = {
        id: uuid(),
        gender: gender,
        description: title,
        quantity: 0,
        isPacked: false,
        category: category,
      };
      state.value = [...state.value, newItem];
    },

    sortItem(state, { payload: query }: PayloadAction<string>) {
      let copyStateValue = [...state.value];
      if (query === "title") {
        for (const item of state.value) {
          console.log(item);
          copyStateValue.sort((a, b) =>
            b.description > a.description ? 1 : -1
          );
        }
      }
      if (query === "quantity") {
        for (const item of state.value) {
          console.log(item);
          copyStateValue.sort((a, b) =>
            Number(b.quantity) > Number(a.quantity) ? 1 : -1
          );
        }
      }
      if (query === "isPacked") {
        for (const item of state.value) {
          console.log(item);
          copyStateValue.sort((a, b) => (b.isPacked > a.isPacked ? 1 : -1));
        }
      }
      if (query === "isNotPacked") {
        for (const item of state.value) {
          console.log(item);
          copyStateValue.sort((a, b) => (!b.isPacked > !a.isPacked ? 1 : -1));
        }
      }
      state.value = copyStateValue;
    },

    resetItem(state) {
      for (const item of state.value) {
        item.quantity = 0;
        item.isPacked = false;
      }
    },
  },
});

export const {
  addQuntityItem,
  removeQuntityItem,
  isPacked,
  removeIsPackedItem,
  addNewItem,
  sortItem,
  resetItem,
} = itemSlice.actions;

export default itemSlice;
