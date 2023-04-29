import {React, useState} from "react";
import { MdEdit, MdDelete } from "react-icons/md";


const ExpenseItem = ({
  expense: { ide, chargen, amountn },
  handleDelete,
  handleEdit
}) => {

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{chargen}</span>
        <span className="amount">${amountn}</span>
        {/* <span className="amount">${a}</span> */}

      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(ide)}
        >
          <MdEdit />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(ide)}
        >
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
