// OBJECT DESTRUCTURING

// const person = {
//     name: "Amaury",
//     age: 41,
//     location: {
//         city: "Bangkok",
//         temp: 88
//     }
// }
// const { name: firstName  = "Anonymous", age } = person;
// const { city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}.`)
// console.log(`It is ${temperature} in ${city}.`)

// const book = {
//     title: "A great book",
//     author: "Brian Toto",
//     publisher: {
//         name: "Penguin"
//     }
// }
// const { name: publisherName = "Self-Published"} = book.publisher;
// console.log(`${publisherName} has published ${book.title}`)




// ARRAY DESTRUCTURING

// const address2 = ["1299 Juniper Street", "Bangkok", "Pennsylvania", "15689"]
// const address = ["1299 Juniper Street", "Bangkok", , "15689"]
// const [ , city, state = "Unknown state", ] = address;
// console.log(`You are in ${city}, ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [itemName, ,mediumPrice] = item

console.log(`A medium ${itemName} costs ${mediumPrice}`)