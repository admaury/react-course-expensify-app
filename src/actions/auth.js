import { firebase, googleAuthProvider } from "../firebase/firebase";


// LOGIN

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const login = (uid) => ({
  type: "LOGIN",
  uid
})

// LOGOUT

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export const logout = () => ({
  type: "LOGOUT"
})
