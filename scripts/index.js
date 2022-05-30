// Add the coffee to local storage with key "coffee"


let url= "https://masai-mock-api.herokuapp.com/coffee/menu";

let res = await fetch(url);

let data = await res.json();

console.log(date);