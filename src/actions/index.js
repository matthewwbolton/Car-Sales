export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = item => {
  // dispatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: item
  };
};

export const BUY_ITEM = "BUY_ITEM";

export const buyItem = item => {
  // dipsatch an action here to add an item
  return {
    type: "BUY_ITEM",
    payload: item
  };
};

export const INCREMENT_ADDITIONAL_PRICE = "INCREMENT_ADDITIONAL_PRICE";

export const incrementPrice = price => {
  return {
    type: INCREMENT_ADDITIONAL_PRICE,
    payload: price
  };
};

export const DECREMENT_ADDITIONAL_PRICE = "DECREMENT_ADDITIONAL_PRICE";

export const decrementPrice = price => {
  return {
    type: DECREMENT_ADDITIONAL_PRICE,
    payload: price
  };
};
