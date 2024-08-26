// store/contributorsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: "",
  description: "",
  date: "",
  contributors: [],
};

const contributorsSlice = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    setTotalAmount(state, action) {
      state.totalAmount = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
    addContributor(state, action) {
      state.contributors.push(action.payload);
    },
    removeContributor(state, action) {
      state.contributors = state.contributors.filter(
        (contributor) => contributor.id !== action.payload
      );
    },
    updateContributorAmount(state, action) {
      const { id, amount } = action.payload;
      const contributorToUpdate = state.contributors.find(
        (contributor) => contributor.id === id
      );

      if (contributorToUpdate) {
        const remainingContributors = state.contributors.filter(
          (contributor) => contributor.id !== id && !contributor.isManual
        );
        const remainingAmount =
          state.totalAmount -
          amount -
          state.contributors
            .filter(
              (contributor) => contributor.isManual && contributor.id !== id
            )
            .reduce((sum, contributor) => sum + contributor.amount, 0);

        state.contributors = state.contributors.map((contributor) => {
          if (contributor.id === id) {
            return { ...contributorToUpdate, amount, isManual: true };
          }
          if (!contributor.isManual) {
            const newAmount = remainingAmount / remainingContributors.length;
            return { ...contributor, amount: newAmount };
          }
          return contributor;
        });
      }
    },
    distributeAmount(state) {
      const amountPerContributor =
        state.totalAmount / state.contributors.length;
      state.contributors = state.contributors.map((contributor) => ({
        ...contributor,
        amount: amountPerContributor,
        isManual: false,
      }));
    },
  },
});

export const {
  setTotalAmount,
  setDescription,
  setDate,
  addContributor,
  removeContributor,
  updateContributorAmount,
  distributeAmount,
} = contributorsSlice.actions;

export default contributorsSlice.reducer;
