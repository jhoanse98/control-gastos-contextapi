import {v4 as uuidv4} from 'uuid'
import { DraftExpense, Expense } from "../types"

export type BudgetActions = 
    { type: 'add-budget', payload: { budget: number } } |
    { type: 'show-modal' } |
    { type: 'close-modal' } |
    { type: 'add-expense', payload: {expense : DraftExpense}}
    

export type BudgetState = {
    budget: number,
    modal: boolean,
    expenses: Expense[]
}

export const initialState: BudgetState = {
    budget: 0,
    modal: false,
    expenses: []
}

const createExpense = (expense: DraftExpense): Expense => {
    const id = uuidv4();
    return {...expense, id}
}

export const budgetReducer = (state: BudgetState = initialState, action: BudgetActions) => {
    if (action.type === 'add-budget') {
        return {
            ...state,
            budget: action.payload.budget
        }
    }

    if (action.type === 'show-modal') {
        return {
            ...state,
            modal: true,
        }
    }

    if (action.type === 'close-modal') {
        return {
            ...state,
            modal: false,
        }
    }

    if (action.type === 'add-expense') {
        const newExpense = createExpense(action.payload.expense)
        return {
            ...state,
            expenses: [...state.expenses, newExpense],
            modal: false,
        }
    }

    return state
}