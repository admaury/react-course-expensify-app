import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log("removed", snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log("changed", snapshot.key, snapshot.val())
// })

// database.ref("expenses").on("child_added", (snapshot) => {
//     console.log("added", snapshot.key, snapshot.val())
// })

// database.ref("expenses").on(
//   "value",
//   (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   },
//   (err) => {
//     console.log("Error while fetching expenses", err);
//   }
// );

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 100950,
//   createdAt: 982578577878989,
// });

// database.ref("notes/-MF0EXlDhlBAuxLVzFG6").remove();

// database.ref("notes").push({
//   title: "Course topics",
//   body: "Node, React, Firebase",
// });

// const firebaseNotes = {
//   notes: {
//     a12bsgt: {
//       title: "First note",
//       body: "This is my note",
//     },
//     jkhljhkjlhqs: {
//       title: "Another note",
//       body: "This is another note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "First note",
//     body: "This is my note",
//   },
//   {
//     id: "761ase",
//     title: "Another note",
//     body: "This is another note",
//   },
// ];

// database.ref("notes").set(notes);

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (err) => {
//     console.log("Error with data fetching", err);
//   }
// );

// setTimeout(() => {
//   database.ref().update({
//     name: "Amaury de la Taille",
//     "job/title": "Manager IT",
//     "job/company": "Google",
//   });
// }, 3000);

// const onValueChange = database.ref().on("value", (snapshot) => {
//     console.log(snapshot.val());
//   }, (err) => {
//       console.log("Error with data fetching", err)
//   });

// setTimeout(() => {
//   database.ref("age").set(60);
// }, 7000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 15000);

// setTimeout(() => {
//   database.ref("age").set(62);
// }, 22000);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log("Error fetching data", err);
//   });

// database
//   .ref()
//   .set({
//     name: "Amaury",
//     age: 41,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: "Facebook"
//     },
//     isSingle: false,
//     location: {
//       city: "Koh Lanta",
//       country: "Thailand",
//     },
//   })
//   .then(() => {
//     console.log("Data saved");
//   })
//   .catch((err) => {
//     console.log("This failed", err);
//   });

//   database.ref().update({
//       name: "Amaury updated",
//       age: 55
//   })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': "Amazon",
//     'location/city': "Seatle"
// })

// database.ref().set("This is my test data");

// database.ref("age").set(42);

// database
//   .ref("attributes")
//   .set({
//     height: 176,
//     weight: 62,
//   })
//   .then(() => {
//     console.log("Data updated");
//   })
//   .catch((err) => {
//     console.log("This update failed", err);
//   });

// console.log("I made a request to change the data");

// database.ref("isSingle").set(null);

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("removed isSingle");
//   })
//   .catch((err) => {
//     console.log("removed isSingle failed", err);
//   });
