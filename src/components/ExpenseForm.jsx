import React from "react";
import "../App.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  handleCharge,
  Charge,
  handleAmount,
  Amount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="">Charge</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g loan"
            value={Charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g value"
            value={Amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        {edit ? "edit" : "submit"}
        {/* submit */}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;
