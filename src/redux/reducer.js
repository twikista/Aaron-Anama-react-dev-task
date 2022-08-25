import { type } from "@testing-library/user-event/dist/type";
import { cart } from "../data";
import {
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  SUM_CART_AMOUNT,
  UPDATE_PRICE,
} from "./actions";
import uniqid from "uniqid";

const initialState = {
  cart: [],
  total: 0,
  amount: 0,
  tax: 0,
  currencyDetails: { label: "USD", symbol: "$" },
};

const check = (a, b) => {
  const ig =
    a.every((item) => b.includes(item)) && b.every((item) => a.includes(item));
  console.log(a, b, ig);
  // return ig ? { ...state } : null;
  return ig;
};

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    //check if attributes are selected in item to be added to cart
    const isAttributedSelected =
      Object.keys(action.payload.selectedAttributes).length ===
      action.payload.attributes.length;

    //check if cart is empty
    if (state.cart.length) {
      //check if item to be added to cart already exist in cart
      const existingCartItem = state.cart.filter(
        (i) => i.id === action.payload.id
      );
      console.log(existingCartItem);

      //get values of selected attributes for item to be added to cart
      const selectedAttributeValues = Object.values(
        action.payload.selectedAttributes
      );

      console.log(existingCartItem);

      if (existingCartItem.length) {
        //get values of selected attributes for existing cart item
        const cartItemAtrributevalues = Object.values(
          existingCartItem[0].selectedAttributes
        );
        console.log(selectedAttributeValues, cartItemAtrributevalues);
        check(selectedAttributeValues, cartItemAtrributevalues);

        //check if item to be added to cart and existing cart item
        // have the same attributes selected
        if (check(selectedAttributeValues, cartItemAtrributevalues)) {
          //return state without updating (item not added)
          return { ...state };
        }
        //check if item to be added to cart and existing cart item
        // have the different attributes selected
        if (!check(selectedAttributeValues, cartItemAtrributevalues)) {
          //modify item id (to avoid react key error) and add item
          //to cart
          return {
            ...state,
            cart: [
              ...state.cart,
              { ...action.payload, id: uniqid(`${action.payload.id}-`) },
            ],
          };
        }
      } else {
        console.log("items are not the same");
        // add item to cart if does not already exist in cart
        return isAttributedSelected
          ? { ...state, cart: [...state.cart, action.payload] }
          : { ...state };
      }
      // console.log(attributeValues, item);
    }
    console.log("empty cart");
    //add item to empty cart
    return isAttributedSelected
      ? { ...state, cart: [...state.cart, action.payload] }
      : console.log("please select attributes");
  }

  if (action.type === INCREASE_AMOUNT) {
    const tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === DECREASE_AMOUNT) {
    const tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((i) => i.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === SUM_CART_AMOUNT) {
    const { amount, total, tax } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount, activePrice } = cartItem;
        const itemTotal = activePrice.amount * amount;
        cartTotal.total += parseFloat(itemTotal.toFixed(2));
        cartTotal.amount += parseFloat(amount.toFixed(2));
        cartTotal.tax += parseFloat((itemTotal * 0.21).toFixed(2));
        return cartTotal;
      },
      {
        amount: 0,
        total: 0,
        tax: 0,
      }
    );
    console.log(amount);
    return { ...state, amount, total, tax };
  }

  if (action.type === UPDATE_PRICE) {
    console.log(action.payload);
    const { label, symbol } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      const activePrice = cartItem.prices.find(
        (priceItem) => priceItem.currency.label === label
      );
      return { ...cartItem, activePrice: activePrice };
    });

    return { ...state, currencyDetails: action.payload, cart: tempCart };
  }
  console.log(state);
  return state;
};

export default reducer;
