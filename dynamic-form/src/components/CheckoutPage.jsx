// CheckoutPage.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  distributeAmount,
  removeContributor,
  updateContributorAmount,
} from "../store/contributors";

function CheckoutPage() {
  const contributors = useSelector((state) => state.contributors.contributors);
  const totalAmount = useSelector((state) => state.contributors.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveContributor = (id) => {
    dispatch(removeContributor(id));
    dispatch(distributeAmount());
  };

  const handleAmountChange = (id, amount) => {
    dispatch(updateContributorAmount({ id, amount }));
  };

  return (
    <div className="container">
      <h2>Checkout</h2>
      <h3>Total Amount: {totalAmount}</h3>
      <ul>
        {contributors.map((contributor) => (
          <li key={contributor.id}>
            {contributor.name}:{" "}
            <input
              type="number"
              value={contributor.amount}
              onChange={(e) =>
                handleAmountChange(contributor.id, e.target.value)
              }
            />
            <button onClick={() => handleRemoveContributor(contributor.id)}>
              Deselect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CheckoutPage;
