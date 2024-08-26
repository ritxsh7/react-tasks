// FormPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setTotalAmount,
  setDescription,
  setDate,
  addContributor,
  distributeAmount,
} from "../store/contributors";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const [totalAmount, setAmount] = useState("");
  const [description, setDesc] = useState("");
  const [date, setDateValue] = useState("");
  const [contributor, setContributor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(setTotalAmount(totalAmount));
    dispatch(setDescription(description));
    dispatch(setDate(date));
    dispatch(addContributor({ id: "user", name: "You", amount: 0 }));
    dispatch(distributeAmount());
    navigate("/checkout");
  };

  const handleAddContributor = () => {
    dispatch(addContributor({ id: Date.now(), name: contributor, amount: 0 }));
    setContributor("");
  };

  return (
    <div className="container">
      <h2>Enter Details</h2>
      <input
        type="number"
        value={totalAmount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Total Amount"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDateValue(e.target.value)}
      />
      <input
        type="text"
        value={contributor}
        onChange={(e) => setContributor(e.target.value)}
        placeholder="Add Contributor"
      />
      <button onClick={handleAddContributor}>Add Contributor</button>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default FormPage;
