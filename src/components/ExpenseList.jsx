import React from 'react'
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {
  return (
    <div>
       <ul className="list">
        {expenses.map(expense => {
           return ( 
            <ExpenseItem
              key={expense.ide}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
    </div>
  )
}

export default ExpenseList