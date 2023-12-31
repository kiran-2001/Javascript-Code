const accountId = 45
let accountEmail = "kirankolte@gmail.com"
var accountPassword = "12334"
accountCity = "jaipur"

let accountState;

// accountId  = 2   not allowed
accountEmail = "abc@gmail.com"
accountPassword = "5432"
accountCity = "Pune"

/*
Prefer not not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);