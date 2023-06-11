import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (cur) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: cur,
        })
    }

    return (
        <div>
            <span>Currency:</span>
            <select onChange={(event)=>changeCurrency(event.target.value)}><option value="">Please choose a currency</option>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div>
    )
}

export default Currency;