import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT"})
    expect(state).toEqual([])
})

test("shoud remove by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])

})

test("shoud not remove expenses if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)

})

test("shoud add an expense", () => {
    const expense = {
        id: "108",
        description: "Coffee",
        note: "",
        amount: 200,
        createdAt: 20000,
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})


test("shoud edit an expense", () => {
    const updates = {
        description: "Updated desc",
        note: "Updated note",
        amount: 200,
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[1]).toEqual({...updates, id: expenses[1].id, createdAt:expenses[1].createdAt})
})

test("shoud not edit an expense if id not found", () => {
    const updates = {
        description: "Updated desc",
        note: "Updated note",
        amount: 200,
    }
    const action = {
        type: "EDIT_EXPENSE",
        id: "-1",
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})