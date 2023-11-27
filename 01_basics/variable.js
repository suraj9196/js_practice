/*
prefer not to use var
because of issue in block and functional scope
*/


const accountId = 12345; //we can't be change constant value 
var accountName = "suraj"
let accountNumber = "23456"
accountCity = "morena" // this is not good way but it can happen
let accountState;  // it will print undefined value

//accountId = 23455
//console.log(accountId);  // not allowed

accountName = "mahesh"
accountNumber = "98765"
accountCity = "bangalore"

// this is another way to print all value at one time
console.table([accountId,accountName,accountNumber,accountCity,accountState])