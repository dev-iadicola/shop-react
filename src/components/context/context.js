import React, { useContext , useReducer, useEffect} from 'react'
import { ProductsAPI } from '../../data/apiProducts'
import { redirect } from 'react-router-dom'
import reducer from './reducer'
import {DATA_FETCHING_FAIL, DATA_FETCHING_STARTED, DATA_FETCHING_SUCCESS, DATA_STORAGE_STARTED, logProva} from './actions'
import useStorage from '../CostumHook/useStorage'
import axios from 'axios'

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

    
   //DATA FETCHING AUTOMATICO
   useEffect(()=>{
    // IIFE
    (async()=>{
        dispatch({type: DATA_FETCHING_STARTED})
        // console.log('start')
        try{
            //success
            const response = await axios.get(url);
            dispatch({type: DATA_FETCHING_SUCCESS, payload:response.data})
            // console.log(response.data)

        }catch(e){
            dispatch({type: DATA_FETCHING_FAIL, payload:e});
            // console.log(e)
        }
    })();
   },[])

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