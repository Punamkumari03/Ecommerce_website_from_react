import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const ItemProvider = (props) => {

    const [cartItems,setcartItems] = useState([]);
    // const [isAddingToCart,setIsAddingToCart] = useState(false);

  const email = localStorage.getItem('email')
  const loggedInEmail = email.replace('@gmail.com','')
console.log(loggedInEmail,'loggedInEmail')
    useEffect( () => {
        const getDetails = async() => {
            const response = await fetch(`https://crudcrud.com/api/0c9bace70b9b46e8ac585b172344d376/${loggedInEmail}`)
            const data = await response.json();
            console.log(data, "data after refreshed");

            const loadedProducts = []
            for (const id in data) {
                loadedProducts.push({id,...data[id]})
                // console.log(data[key],"inLoop")
            }
            console.log(loadedProducts,"loadedProducts after refreshed outLoop")
            setcartItems(loadedProducts);
        }
        getDetails();

    }, [loggedInEmail])

    
    const addItemFromCartHandler = async (product) => {
        // setIsAddingToCart(product.title);
        const existingCartItemIndex = cartItems.findIndex(item => item.title === product.title);
        const existingCartItem = cartItems[existingCartItemIndex]; 
        // console.log(existingCartItem,"existing");
        
        let updatedCart;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                quantity : existingCartItem.quantity + 1
            }

            updatedCart = [...cartItems]
            updatedCart[existingCartItemIndex] = updatedItem;
            setcartItems(updatedCart);

            const response = await fetch(`https://crudcrud.com/api/0c9bace70b9b46e8ac585b172344d376/${loggedInEmail}/${existingCartItem.id}`,{
                method : "PUT",
                body : JSON.stringify(updatedItem), 
                headers : {
                    'Content-Type' : 'application/json'
                }
            })
            const data = await response.json();
            console.log(data,"afterIncresingQuantity")
        }

        else{

            const newItem = {...product,quantity:1}
            const response = await fetch(`https://crudcrud.com/api/0c9bace70b9b46e8ac585b172344d376/${loggedInEmail}`,{
                method : "POST",
                body : JSON.stringify(newItem),
                headers : {
                    'Content-Type' : 'application/json'
                }
            })

            const data = await response.json();
            console.log(data,"afterPosting");

            const updatedItem = {...newItem, id : data.name };

            updatedCart = [...cartItems,updatedItem]
            setcartItems(updatedCart);
        }
        // setIsAddingToCart(null);
    };

    const removeItemFromCartHandler= async (product) => {

        const itemIndex = cartItems.findIndex(item => item.title === product.title);
        const item = cartItems[itemIndex];
        console.log(item,"item in delete")

        let updatedCart;
        if (item.quantity === 1) {
            updatedCart = cartItems.filter(item => item.title !== product.title);
            setcartItems(updatedCart);
            const response = await fetch(`https://crudcrud.com/api/0c9bace70b9b46e8ac585b172344d376/${loggedInEmail}/${item.id}`,{
                method : "Delete"
            })
            const data = await response.json();
            console.log(data,"afterDelete")
        }

        else{
            const updatedItem = {
                ...item,
                quantity : item.quantity-1
            }

            updatedCart = [...cartItems];
            updatedCart[itemIndex] = updatedItem;
            setcartItems(updatedCart);

            const response = await fetch(`https://crudcrud.com/api/0c9bace70b9b46e8ac585b172344d376/${loggedInEmail}/${item.id}`,{
                method : "PUT",
                body : JSON.stringify(updatedItem), 
                headers : {
                    'Content-Type' : 'application/json'
                }
            })

            const data = await response.json();
            console.log(data,"afterDecreseQuantity")

        }
        
    };


    const obj = {
        items : cartItems,
        addItem: addItemFromCartHandler,
        removeItem: removeItemFromCartHandler,
       
    }

    return (
        <CartContext.Provider value={obj} >
            {props.children}
        </CartContext.Provider>
    )

}

export default ItemProvider;