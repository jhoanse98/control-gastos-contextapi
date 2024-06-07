import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";
import {
  BudgetActions,
  BudgetState,
  budgetReducer,
  initialState,
} from "../reducers/budget-reducers";

type BudgetContextProps = {
  state: BudgetState;
  totalExpenses: number;
  remainingBudget: number;
  dispatch: Dispatch<BudgetActions>;
};

type BudgetProviderProps = {
  children: ReactNode;
};
export const BudgetContext = createContext<BudgetContextProps | null>(null);

export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const remainingBudget = state.budget - totalExpenses;

  return (
    <BudgetContext.Provider
      value={{
        state,
        totalExpenses,
        remainingBudget,
        dispatch,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
