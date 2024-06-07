import React, { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

const ExpensesList = () => {
  const { state } = useBudget();

  const filteredCategories = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;
  const isEmpty = useMemo(
    () => filteredCategories.length === 0,
    [filteredCategories]
  );
  return (
    <div className="mt-10 shadow-lg rounded-lg bg-white p-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold"> No hay gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5 ">
            Listado de Gastos.
          </p>
          {filteredCategories.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
