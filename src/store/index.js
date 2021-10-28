import { createStore, combineReducers } from "redux";

const initialState = {
  products: [],
  cartItems: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_FROM_DB": {
      return {
        ...state,
        products: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const cartReducer = (state = initialState, action) => {
  state = JSON.parse(localStorage.getItem("cartItems"))
    ? JSON.parse(localStorage.getItem("cartItems"))
    : initialState;
  switch (action.type) {
    case "ADD_ITEM_TO_CART": {
      let { cartItems } = state;
      const checkItem = cartItems.find((ele) => ele.id === action.payload.id);
      if (checkItem) {
        const updatedCart = cartItems.map((elem) => {
          if (elem.id === action.payload.id) {
            return {
              ...elem,
              quantity: elem.quantity + action.quantity,
            };
          } else {
            return { ...elem };
          }
        });
        localStorage.setItem(
          "cartItems",
          JSON.stringify({ ...state, cartItems: updatedCart })
        );
        return { ...state, cartItems: updatedCart };
      }
      const newCartItem = cartItems.filter(
        (elem) => elem.id !== action.payload.id
      );
      newCartItem.push({
        ...action.payload,
        quantity: action.quantity,
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify({ ...state, cartItems: newCartItem })
      );
      return { ...state, cartItems: newCartItem };
    }
    
    case "REMOVE_ALL": {
      localStorage.removeItem("cartItems");
      return { ...state, cartItems: [] };
    }

    case "UPDATE_ITEMS_IN_CART": {
      const cartItems = state.cartItems;
      let updatedCart = [];

      if (action.payload.quantity + action.quantity === 0) {
        updatedCart = cartItems.filter((elem) => elem.id !== action.payload.id);
        localStorage.setItem(
          "cartItems",
          JSON.stringify({ ...state, cartItems: updatedCart })
        );

        return { ...state, cartItems: updatedCart };
      } else {
        updatedCart = cartItems.map((elem) => {
          if (elem.id === action.payload.id) {
            return {
              ...elem,
              quantity: elem.quantity + action.quantity,
            };
          } else {
            return { ...elem };
          }
        });
        localStorage.setItem(
          "cartItems",
          JSON.stringify({ ...state, cartItems: updatedCart })
        );

        return { ...state, cartItems: updatedCart };
      }
    }
    case "TOTAL_CART_ITEMS": {
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

const reducer = combineReducers({
  AllProducts: productReducer,
  CartItems: cartReducer,
});

const store = createStore(reducer);

export default store;
