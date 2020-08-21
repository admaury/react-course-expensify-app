const { database } = require("firebase");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({name: "Amaury", age: 41});
    reject("Something went wrong");
  }, 3000);
});

console.log("before");

promise
  .then((data) => {
    console.log("Hello", data.name+".", "You are", data.age, "years old");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

console.log("after");
