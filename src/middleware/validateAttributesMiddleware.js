import { ADD_TO_CART, DISPLAY_VALIDATION_MESSAGE } from "../redux/actions";

export function validateAttributesMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_TO_CART) {
        //check if attribute(s) is selected for item to be added to cart
        const isAttributedSelected =
          Object.keys(action.payload.selectedAttributes).length ===
          action.payload.attributes.length;
        if (!isAttributedSelected) {
          return dispatch({ type: DISPLAY_VALIDATION_MESSAGE });
        }
      }
      return next(action);
    };
  };
}
