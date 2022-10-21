import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, addTransaction, onSearch}) {


  return (
    <div>
      <Search onSearch={onSearch}/>
      <AddTransactionForm addTransaction={addTransaction}/>
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
