
// nomal function
function nameOfFunction() {
  return "some things";
}

// function ชื่อฟังก์ชั่น(parameter: type ของparameter): type ของค่าที่จะ return {คำสั่ง}


// anonymous function
let func = function () { return "some things"; };

function showMessage(): void { return undefined }
console.log(showMessage())



function foo(sample: number): number {
  return sample;
}

foo(1) // ok
foo("1") // error

let num1 = foo(2); // ok
num1 = "2"; // error

function bar(ex) {
  return ex;
}


// Optional Parameters

function human(fname: string, lname: string, age?: number): void {
  // ..
}

human("HOI", "Stroy", 25); // ok
human("HOI", "Stroy"); // ok
human("HOI"); // error


// Default Parameters

function addNum(num1: number = 0, num2: number = 0) {
  return num1 + num2;
}

addNum();
addNum(1);
addNum(1, 2);
addNum(1, 2, 3); // error

function addNumz(num1: number = 0, num2: number = 0, age?: number) {
  return num1 + num2;
}

addNumz(1, 2, 3)