import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// constants
import { SIGN_IN_ROUTE } from '../../constants/routes';
// contexts
import UserContext from '../../contexts/userContext';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if(!user)
      navigate(SIGN_IN_ROUTE);
    else
      props.onAddExpense({...enteredExpenseData, user: user._id});
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;