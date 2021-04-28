const lastName = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]
let userLastName = prompt(`What is your last name?`)
lastName.push(userLastName)
console.log(lastName.sort())
console.log(`My position in the array is:${lastName.indexOf("Vidot")}`)
console.log((lastName.toString()).toUpperCase())
