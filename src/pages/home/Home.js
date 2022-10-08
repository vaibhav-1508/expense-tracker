import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
// components
import NewExpense from "../../components/NewExpense/NewExpense";
import Expenses from "../../components/Expenses/Expenses";
// contexts
import UserContext from "../../contexts/userContext";
// constants
import { SIGN_IN_ROUTE } from "../../constants/routes";
import { GET_EXPENSE_ENDPOINT, SET_EXPENSE_ENDPOINT } from "../../constants/endpoints";
// mui
import { IconButton, Tooltip } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

// const DUMMY_EXPENSES = [
//   {
//     id: 'e1',
//     title: 'Toilet Paper',
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
//   {
//     id: 'e3',
//     title: 'Car Insurance',
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: 'e4',
//     title: 'New Desk (Wooden)',
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    if(user)
      try {
        axios
          .get(GET_EXPENSE_ENDPOINT + "/" + user?._id)
          .then((res) => {
            setExpenses(res.data);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
      else
        navigate(SIGN_IN_ROUTE);
  }, [user]);

  const handleSignOut = () => {localStorage.removeItem("expense-tracker"); setUser(null); navigate(SIGN_IN_ROUTE);};

  const addExpenseHandler = (expense) => {
    if (user)
      try {
        axios
          .post(SET_EXPENSE_ENDPOINT, expense)
          .then((res) => {
            setExpenses(expenses => [res.data, ...expenses]);
          })
          .catch((err) => console.log(err));
      } catch (err) {
        console.log(err);
      }
    else navigate(SIGN_IN_ROUTE);
  };
  return (
    <div className="home">
      <Tooltip title="Logout">
      <IconButton onClick={() => handleSignOut()}>
        <LogoutRoundedIcon />
      </IconButton>
      </Tooltip>
      <h1 className="home__heading">Expense Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
