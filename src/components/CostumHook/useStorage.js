import React, { useState } from 'react'

const useStorage = (key) => {
  const [items,setItems] = useState(()=>{
    //recupero dallo storage oppure array vuoto
    return JSON.parse(localStorage.getItem(key)) || []
  })

  //Aggiunta nuovo prodotto

  const addItem = (newItem)=>{
    const isItemExist = items.some(item=> item.title === newItem.title);

    if(!isItemExist){
        
        const updateItems = [...items,newItem];
        setItems(updateItems);
        localStorage.setItem(key, JSON.stringify(updateItems));


        return {success:true}
    }else{

        // prodotto già esistente nella wishlist o carrello
        return {success:false}

    }

  }

  //Rimozione prodotto

  const removeItem = (itemTitle)=>{
    const updateItems = items.filter(item=> item.title !== itemTitle);
    setItems(updateItems);
    localStorage.setItem(key, JSON.stringify(updateItems));
    return {success:true}
  }

  return {items, addItem, removeItem}
}

export default useStorage