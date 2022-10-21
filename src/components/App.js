import React,{useState,useEffect} from "react";
import AccountContainer from "./AccountContainer";


function App() {

  const[ transactions, setTransactions]= useState([])
  const[ searchedDescription, setSearchedDescription]= useState("")
  
  useEffect(()=> {
    fetch("http://localhost:8001/transactions")
    .then(res=> res.json())
    .then(transactions=> setTransactions(transactions))
  },[])

 function addTransaction(transaction){
  setTransactions([...transactions, transaction])
 }

 function onSearch(e){
  setSearchedDescription(e.target.value)
 }

//  const searchedResult = transactions.filter ((transaction)=> {
//   return transaction.description.toLowerCase().includes(searchedDescription.toLowerCase())
//  })

 function filteredTransactions(transactions, searchedDescription) {
  
  if(searchedDescription.length === 0) {
    return transactions
  }
  // console.log("searching "+searchedDescription)
  // return transactions.filter ((transaction)=> {
  //   console.log("description "+transaction.description.toLowerCase() + " search term "+searchedDescription.toLowerCase())
  //   transaction.description.toLowerCase().includes(searchedDescription.toLowerCase())
  //  })
  var newTransactions = []
  for (var j = 0; j < transactions.length; j++){
    if (transactions[j].description.toLowerCase().includes(searchedDescription.toLowerCase())) {
      console.log("MATCH!!!!")
      newTransactions.push(transactions[j])
    }
  
 }
 return newTransactions;
}

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer  transactions={filteredTransactions(transactions, searchedDescription)} addTransaction={addTransaction}  onSearch={onSearch}/>
    </div>
  );
}

export default App;
