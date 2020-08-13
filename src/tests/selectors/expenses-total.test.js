import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expense", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("should correctly add up a single expense", () => {
    const res = selectExpensesTotal([expenses[1]]);
    expect(res).toBe(expenses[1].amount);
  });

  test("should correctly add up multiple expenses", () => {
    const res = selectExpensesTotal(expenses);
    const expectedRes = expenses.map(e => e.amount).reduce((sum, value) => sum+value )
   expect(res).toBe(expectedRes);
  });