import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transactions: [
        {id: 1, text: 'Floor', amount: -10},
        {id: 2, text: 'coal', amount: 70},
        {id: 3, text: 'Pen', amount: -100},
        {id: 4, text: 'Rice', amount: 10}
    ]
}
//create context
export const GlobalContext = createContext(initialState);

//create provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }} >
        {children}
    </GlobalContext.Provider>);
}