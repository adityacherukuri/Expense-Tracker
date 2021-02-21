import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts
    .reduce((accumulator, currentValue) => (accumulator += currentValue), 0)
    .toFixed(2);

  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
