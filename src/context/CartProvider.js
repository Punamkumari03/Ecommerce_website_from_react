import React, { useReducer } from "react";
import CartContext from "./cart-context";

const email = localStorage.getItem("email");
// const userName = email.replace("@gmail.com", "");
// console.log(userName)
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // console.log(action.item)
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      fetch(
        `https://crudcrud.com/api/1539a3ead9c04e3d8a918876381c393a/${email}`,
        {
          method: "PUT",
          body: JSON.stringify({
            updatedItem,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        return res.json().then((data) => {
          console.log(data);
        });
      });
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const newItem = { ...action.item, quantity: 1 };
      updatedItems = state.items.concat(newItem);
      // axios.post('https://crudcrud.com/api/8a289e96445543a99fe088e3ee36124a').then(res => {
      //     console.log(res,'after post request')
      // })
      fetch(
        `https://crudcrud.com/api/1539a3ead9c04e3d8a918876381c393a/${email}`,
        {
          method: "POST",
          body: JSON.stringify({
            newItem,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        // console.log(res.data,'after posting')
        return res.json().then((data) => {
          console.log(data);
        });
      });
    }

    // const updatedItems = state.items.concat(action.item);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if(existingItem.quantity === 1){
            updatedItems = state.items.filter(item => item.id !== action.id);
      } else{
        const updatedItem = {...existingItem, quantity:existingItem.quantity - 1}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return{
        items: updatedItems,
        totalAmount:updatedTotalAmount
      }
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    // console.log(item,'addTocard in cartProvider')
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
