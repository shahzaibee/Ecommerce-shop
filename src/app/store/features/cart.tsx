import { Cart } from "@/app/utlis/type";
import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

// Define the initial state using that type
const initialState: Cart[] = [];

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add to cart funationality

    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid };
      state.push(newObj);
    },

    // delete to cart

    delItem(state, { payload }) {
      return state.filter((val) => val.uuid !== payload);
    },
    //addition of items
    addCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );
      if (obj) {
        ++obj.qty;
        let newState = state.filter((val) => val.id !== obj?.id);
        state = [...newState, obj];
      }
    },

    //subtraction of items

    subCart(state, action) {
      let obj = state.find(
        (val) =>
          val.id == action.payload.id &&
          val.color == action.payload.color &&
          val.size == action.payload.size
      );

      if (obj !== undefined) {
        if (obj.qty <= 1) {
          return state.filter((val) => val.uuid !== obj?.uuid);
        }

        --obj.qty;
        let newState = state.filter((val) => val.uuid == obj?.uuid);

        state = [...newState, obj];
        return;
      }
    },
  },
});

export const { addToCart, delItem, addCart ,subCart} = cartSlice.actions;

export default cartSlice.reducer;
