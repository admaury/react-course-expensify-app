import authReducer from "../../reducers/auth";

test("shoud set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "123abc",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("shoud clear uid for logout", () => {
  const action = {
    type: "LOGOUT",
  };
  const state = authReducer({ uid: "123abc" }, action);
  expect(state).toEqual({});
});
