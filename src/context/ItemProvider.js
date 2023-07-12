import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const ItemProvider = (props) => {
  const [cartItems, setcartItems] = useState([]);

  const email = localStorage.getItem("email");
  const loggedInEmail = email && email.replace("@gmail.com", "");
  console.log(loggedInEmail, "loggedInEmail");

  const url = `https://crudcrud.com/api/8f4f1b66902e4362ade81b08b967149e/${loggedInEmail}`;

  useEffect(() => {
    const getDetails = async () => {
      const response = await fetch(`${url}`);
      const data = await response.json();
      console.log(data, "data after refreshed");
      setcartItems(data);
    };
    getDetails();
  }, [loggedInEmail,url]);

  const addItemFromCartHandler = async (product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );
    const existingCartItem = cartItems[existingCartItemIndex];

    let updatedCart;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };

      updatedCart = [...cartItems];
      updatedCart[existingCartItemIndex] = updatedItem;
      setcartItems(updatedCart);
			console.log(existingCartItem,"existingCartItem")

      fetch(`${url}/${updatedItem._id}`,{
        method: "PUT",
        headers: {
          "Content-Type":"application/json",
        },
				body: JSON.stringify( {
					id: existingCartItem.id,
					title: existingCartItem.title,
					price: existingCartItem.price,
					imageUrl: existingCartItem.imageUrl,
					quantity: existingCartItem.quantity+1,
				}),
      })

    } else {
      const newItem = { ...product, quantity: 1 };
      const response = await fetch(`${url}`, {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data, "afterPosting");

      updatedCart = [...cartItems, data];
      setcartItems(updatedCart);
    }
  };

  const removeItemFromCartHandler = async (product) => {
    const itemIndex = cartItems.findIndex(
      (item) => item.title === product.title
    );
    const deleteItem = cartItems[itemIndex];
    console.log(deleteItem, "item in delete");

    let updatedCart;
    if (deleteItem.quantity === 1) {
      updatedCart = cartItems.filter((item) => item.title !== product.title);
      setcartItems(updatedCart);
      await fetch(`${url}/${deleteItem._id}`, {
        method: "Delete",
      });
 
    } else {
      const updatedItem = {
        ...deleteItem,
        quantity: deleteItem.quantity - 1,
      };

      updatedCart = [...cartItems];
      updatedCart[itemIndex] = updatedItem;
      setcartItems(updatedCart);

      await fetch(`${url}/${deleteItem._id}`, {
        method: "PUT",
        body: JSON.stringify({
					id: deleteItem.id,
					title: deleteItem.title,
					price: deleteItem.price,
					imageUrl: deleteItem.imageUrl,
					quantity: deleteItem.quantity-1,
				}),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  const obj = {
    items: cartItems,
    addItem: addItemFromCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={obj}>{props.children}</CartContext.Provider>
  );
};

export default ItemProvider;