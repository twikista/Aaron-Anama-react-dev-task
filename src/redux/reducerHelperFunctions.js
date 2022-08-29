const compareAttributes = (
  incomingCartItemAttributes,
  existingCartItemAttributes
) => {
  const outcomeOfComapare =
    incomingCartItemAttributes.every((item) =>
      existingCartItemAttributes.includes(item)
    ) &&
    existingCartItemAttributes.every((item) =>
      incomingCartItemAttributes.includes(item)
    );
  return outcomeOfComapare;
};

const increaseCartItemAmount = (storeState, cartItemToIncrease) => {
  const tempCart = storeState.cart.map((cartItem) => {
    if (cartItem.id === cartItemToIncrease.id) {
      return { ...cartItem, amount: cartItem.amount + 1 };
    }
    return cartItem;
  });
  return tempCart;
};

export { compareAttributes, increaseCartItemAmount };
