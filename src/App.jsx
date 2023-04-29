import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";
import './App.css'
import Alert from "../src/components/Alert";

// const initialExpenses = [
//   { ide: uuidv4(), chargen: "rent", amountn: 1600 },
//   { ide: uuidv4(), chargen: "car payment", amountn: 400 },
//   { ide: uuidv4(), chargen: "credit card bill ", amountn: 1200 },
// ];

const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [chargen, setCharge] = useState("");
  const [amountn, setAmount] = useState("");
  const [iid, setIId] = useState("");
  const [Edit, setEdit]=useState(false)
  const [alert, setAlert] = useState({show: false})
 
  // console.log(iid);
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleCharge = (e) => {
    // e.preventDefault();
    console.log(chargen);
    setCharge(e.target.value);
  };

  const handleAmount = (e) => {
    // e.preventDefault();
    console.log(amountn);
    setAmount(parseInt(e.target.value));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (chargen !== "" && amountn > 0) {
      if (Edit) {
        let tempExpenses = expenses.map(item => {
          return item.ide === iid ? { ...item, chargen, amountn } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { ide: uuidv4(), chargen, amountn};
        setExpenses([...expenses,singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setAmount("");
      console.log(expenses)
    } else {
      // handleAlert({
      //   type: "danger",
      //   text: `charge can't be empty value and amount value has to be bigger than zero`
      // });
    }
  };

  const handleEdit = (ids) => {
    let expense = expenses.find((item) => item.ide === ids);
    let { chargen, amountn } = expense;
    setCharge(chargen);
    setAmount(amountn);
    setIId(ids);
    setEdit(true);
    console.log(iid);
  };

  const handleDelete = (idr) => {
   let tempExpenses = expenses.filter(item=>item.ide !== idr)
   setExpenses(tempExpenses)
  };
  const handleAlert= ({type, text})=>{
  setAlert({show: true, tpe:type, txt:text});
  setTimeout(()=>{
    setAlert({show: false})
  },7000)
}

  return (
    <>
      {alert.show && <Alert type={alert.tpe} text={alert.txt}/>}
      <h1>Daily Expenses & Tasks</h1>
      <main>
        <ExpenseForm
          Charge={chargen}
          Amount={amountn}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={Edit}
        />

        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </main>

        <h1>
          Total Spending:
          <span>
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amountn);
          }, 0)}
          </span>
        </h1>

      
    </>
  );
}

export default App;
