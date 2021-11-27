import data from "./data";

const reducer = (state, action) => {
  switch (action.type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    case "FILL_CART":
      let priceone = 0;
      action.payload.forEach((item) => {
        const price = parseFloat(item.price);
        priceone += price;
      });
      return {
        ...state,
        cart: action.payload,
        amount: action.payload.length,
        price: priceone,
      };
    case "CLEAR_CART":
      return { ...state, cart: [], amount: 0, price: 0 };
    case "CHANGE_AMOUNT":
      let editIndex = 0;
      state.cart.every((item) => {
        if (item.id === action.payload.id) {
          return false;
        } else {
          editIndex++;
          return true;
        }
      });
      const price = state.cart.find(
        (item) => item.id === action.payload.id
      ).price;
      const newCart = state.cart;
      newCart[editIndex].amount += action.payload.change;
      let um = state.price + price * action.payload.change;
      um = Math.round(um * 100) / 100;
      return {
        ...state,
        amount: state.amount + action.payload.change,
        cart: newCart,
        price: um,
      };
    case "DELETE":
      const fnewCart = state.cart.filter((item) => {
        return action.payload !== item.id;
      });
      return { ...state, cart: fnewCart };
    case "DELETEy":
      const fdnewCart = state.cart.filter((item) => {
        return action.payload.id !== item.id;
      });
      return {
        ...state,
        cart: fdnewCart,
        amount: state.amount - action.payload.amount,
        price:
          Math.round(
            (state.price -
              action.payload.amount *
                state.cart.find((item) => item.id === action.payload.id)
                  .price) *
              100
          ) / 100,
      };
    default:
      return state;
  }
};
let price = 0;
data.forEach((yes) => {
  price += yes.price;
});
const initialState = {
  cart: data,
  isLoading: false,
  amount: data.length,
  price: price,
};

export { initialState, reducer };
