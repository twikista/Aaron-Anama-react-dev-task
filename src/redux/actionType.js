import {
  ADD_TO_CART,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  SUM_CART_AMOUNT,
} from "./actions";

const addToCart = (payload) => {
  return { type: ADD_TO_CART, payload };
};

const increaseAmount = (payload) => {
  return { type: INCREASE_AMOUNT, payload };
};

const decreaseAmount = (payload) => {
  return { type: DECREASE_AMOUNT, payload };
};

const sumCartAmount = () => {
  return { type: SUM_CART_AMOUNT };
};

export { addToCart, increaseAmount, decreaseAmount, sumCartAmount };
