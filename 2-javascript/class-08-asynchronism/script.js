// Timeout and interval

console.log("Antes");

setTimeout(() => {
  console.log("timeout");
}, 0);

setInterval(() => {
  console.log("interval");
}, 0);

//setInterval(() => {
 // const clock = new Date();
 // console.log(clock.toLocaleTimeString());
//}, 1000);

console.log("Depois");

// Promises

const urlAPI = "https://jsonplaceholder.typicode.com";

fetch( urlAPI + "/users")
.then((response)=> response.json())
.then((data)=> console.log(data));

console.log("Final");

