import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const changeBudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return total += item.cost;
        }, 0);

        if (val < totalExpenses) {
            alert("Cannot reduce budget already allocated");
        } else if (val > 20000) {
            alert('Budget cannot exceed 20,000')
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }

    return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input type="number" step="10" value={budget} onChange={(event)=>changeBudget(event.target.value)}></input>
		</div>
    );
};
export default Budget;