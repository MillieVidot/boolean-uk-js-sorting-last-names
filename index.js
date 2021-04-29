const lastNameArr = ["Mason", "Marcora", "Rico", "Neves", "Ivanov"]
let userLastName = prompt(`What is your last name?`)
lastNameArr.push(userLastName)
console.log(lastNameArr.sort())
console.log(`My position in the array is:${lastNameArr.indexOf("Vidot")}`)

newArray = []
for (const lastName of lastNameArr) {
   newArray.push([lastName , lastName.toUpperCase()])
}
console.log(newArray)


// for (const lastName of lastNameArr) {
//    console.log(lastName.toUpperCase())
// }

// for (let i = 0; i < lastNameArr.length; i++) {
//    newArray.push([lastNameArr[i] , uppercaseNames[i]])
//    console.log(newArray)
// }






