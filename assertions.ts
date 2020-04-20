let someValue: any = "123";

let lengthOfValue :number = (<string>someValue).length;
console.log(<string>someValue)
// or
// let lengthOfValue :number = (someValue as string).length;

console.log(lengthOfValue) // 3