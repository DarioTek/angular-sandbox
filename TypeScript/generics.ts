// 1. The Generic Interface (Blueprint)
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// 2. A concrete class implementing the generic interface
class PocketBackpack<Type> implements Backpack<Type> {
  private content!: Type;

  add(obj: Type): void {
    this.content = obj;
  }

  get(): Type {
    return this.content;
  }
}

// 3. Instantiate the backpack specifically for STRINGS
const stringBackpack = new PocketBackpack<string>();

// Allowed: Passing a string
stringBackpack.add("Hello TypeScript"); 

// Read the string out (inferred type is `string`)
const item = stringBackpack.get();
console.log(item); 

// ❌ COMPILE ERROR: Argument of type 'number' is not assignable to parameter of type 'string'
// stringBackpack.add(23);