// defining a variable
let a: number;
a = 1;

// grouping constants
enum Color { Red = 0, Yellow = 1, Blue = 2 };
let backgroundColor = Color.Red;

// casting
let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

// defining functions
let log = function(message: string) { // original
    console.log(message);
}

let dolog = (message: string) => { // better
    console.log(message);
}

// dealing with many parameters
/* 
interface Point { // encapsulate params w/ interface
    x: number,
    y: number
}

let drawPoint = (point: Point) => { // pass params 
    // ...
}
*/

import { Point } from './point';

// implementing Point class
let point = new Point(); // no error due to any type placeholder
let getA = point.a; // get a value w/ property (looks like a field, acts like a method)
point.a = 10; // set a value
point.draw();