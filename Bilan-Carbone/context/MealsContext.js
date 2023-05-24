import React, {createContext, useState} from 'react';
import { getRecipe } from '../utils/RecipesService.ts';
export const CartContext = createContext();
export function CartProvider(props) {
  const [items, setItems] = useState([]);

  function addItemToCart(id) {
    const recipe = getRecipe(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              recipe,
              totalco2: recipe.co2 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalco2 += recipe.co2;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalco2() {
      return items.reduce((sum, item) => (sum + item.totalco2), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalco2}}>
      {props.children}
    </CartContext.Provider>
  );
}