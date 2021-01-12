export const increment = (number) => {
    return {
      type: "GET_DATA",
      payload: number,
    };
  };
  export const updateCart = (data) => {
    return {
      type: "ADD_TO_CART",
      payload: data,
    };
  };
  export const updateCategory = (data) => {
    return {
      type: "ADD_TO_CATER",
      payload: data,
    };
  };
  export const updateTotalPrice = (number) => {
    return {
      type: "UPDATE_TOTAL_PRICE",
      payload: number,
    };
  };