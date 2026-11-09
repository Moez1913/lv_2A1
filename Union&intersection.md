Union & intersection:

Union (|): Allows a value to be one of multiple possible types.



Intersection: Combines multiple types into one type. The result must contain all required properties from both types.


example:

type Data = string | number;

let value: Data = "Hello"; 
value = 100;               


type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const user: Person = {
  name: "Moez",
  age: 27
};