import React, { useContext , useReducer, useEffect} from 'react'
import { ProductsAPI } from '../../data/apiProducts'
import { redirect } from 'react-router-dom'
import reducer from './reducer'
import {logProva} from './actions'

const url = ProductsAPI

const initialState={
    products:[],
    isLoading:true,
    isError:false,
    total:4, //per il carrello
    itemCounter:0 //quantità prodotti
}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    //Utilizzo di useReducer con state iniziale
    const [state, dispatch] = useReducer(reducer, initialState)

    
   //DataFetching
   /* useEffect(()=>{
    (async()=>{
        
    })
   },[]) */
    return <AppContext.Provider value={{ 
        ...state,
       }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}