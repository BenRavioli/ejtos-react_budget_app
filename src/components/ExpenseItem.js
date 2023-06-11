import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency,dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} 
        // Button styling lol
        style={{backgroundColor: '#00cc00', textAlign: 'center', fontSize: '20px', height: '25px', width: '25px', color: 'white', borderRadius: '50%'}}>
            <span style={{verticalAlign: 'center', lineHeight: 'normal'}}>+</span></button></td> 

            <td><button onClick={event=> decreaseAllocation(props.name)} 
        style={{backgroundColor: '#ff0000', textAlign: 'center', fontSize: '20px', height: '25px', width: '25px', color: 'white', borderRadius: '50%'}}>
            <span style={{verticalAlign: 'center', lineHeight: 'normal'}}>-</span></button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;