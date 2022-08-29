import {
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  SUM_CART_AMOUNT,
  UPDATE_PRICE,
  DISPLAY_VALIDATION_MESSAGE,
  CLOSE_VALIDATION_MESSAGE,
} from "./actions";
import { loadStateFromLocalStorage } from "./localStoragePersist";
import {
  compareAttributes,
  increaseCartItemAmount,
} from "./reducerHelperFunctions";

const persistedState = loadStateFromLocalStorage();
const initialState = {
  cart: [],
  total: 0,
  amount: 0,
  tax: 0,
  currencyDetails: { label: "USD", symbol: "$" },
  showValidationModal: false,
  persistedState,
};

const reducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    /*check if cart is empty*/
    if (state.cart.length) {
      /*if cart not empty, check if item to be added to cart already
      exist in cart*/
      const existingCartItem = state.cart.filter(
        (i) => i.name === action.payload.name
      );

      if (existingCartItem.length) {
        let haveSameAttributeValues = [];
        for (let i = 0; i < existingCartItem.length; i++) {
          /*iterate over each matched existing item in cart and get the 
        selected attribute(s) values*/
          const cartItemAtrributevalues = Object.values(
            existingCartItem[i].selectedAttributes
          );

          /*get values of selected attributes for item to be added to cart*/
          const selectedAttributeValues = Object.values(
            action.payload.selectedAttributes
          );

          /*compare attribute values of item to added to cart with existing
          cart item attribute values*/
          const isTheSame = compareAttributes(
            selectedAttributeValues,
            cartItemAtrributevalues
          );
          haveSameAttributeValues = [...haveSameAttributeValues, isTheSame];
        }

        /*if item to be added to cart and existing cart item have the
        same attribute values, then don't add but increase its amount*/
        if (haveSameAttributeValues.includes(true)) {
          const index = haveSameAttributeValues.findIndex((i) => i === true);
          const tempCart = increaseCartItemAmount(
            state,
            existingCartItem[index]
          );
          return { ...state, cart: tempCart };
        }

        /*if item to be added to cart and existing cart item have different 
        attribute values, then add to cart*/

        if (!haveSameAttributeValues) {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload }],
          };
        }
      } else {
        /*add item to cart if it does not already exist in cart*/
        return { ...state, cart: [...state.cart, action.payload] };
      }
    }
    /*add item to empty cart*/
    return { ...state, cart: [...state.cart, action.payload] };
  }

  if (action.type === INCREASE_AMOUNT) {
    const tempCart = increaseCartItemAmount(state, action.payload);
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
    return { ...state, amount, total, tax };
  }

  if (action.type === UPDATE_PRICE) {
    const { label } = action.payload;
    const tempCart = state.cart.map((cartItem) => {
      const activePrice = cartItem.prices.find(
        (priceItem) => priceItem.currency.label === label
      );
      return { ...cartItem, activePrice: activePrice };
    });

    return { ...state, currencyDetails: action.payload, cart: tempCart };
  }

  if (action.type === DISPLAY_VALIDATION_MESSAGE) {
    return { ...state, showValidationModal: true };
  }

  if (action.type === CLOSE_VALIDATION_MESSAGE) {
    return { ...state, showValidationModal: false };
  }

  return state;
};

export default reducer;
