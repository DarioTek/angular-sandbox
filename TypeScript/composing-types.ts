// Composing types using union types
type MyBool = true | false;

//A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be:
//type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// function getLength(obj: string | string[]): number {
//   return obj.length;
// }

function getLength(obj: string | string[]): number {
  if (typeof obj === "string") {
    console.log("String detected");
    return obj.length;
  }

  console.log("Array detected");
  return obj.length;
}

console.log(getLength("hello"));
console.log(getLength(["hello", "world"])); 
//console.log(getLength(WindowStates));

type WindowStates = "open" | "closed" | "minimized";

const windowStates: WindowStates[] = ["open", "closed", "minimized"];

function getWindowStateCount(): number {
    return windowStates.length;
}

console.log('Window states count: ' + getWindowStateCount()); // 3

