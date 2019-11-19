// cohesion (group highly related attributes and functions)
export class Point {
    
    constructor(private _a?: number, private _b?: number) { // any type placeholder
    }                                                     // access modifier makes field 

    draw() {
        console.log('X: ' + this._a + ', Y:' + this._b);
    }

    get a() { // get property
        return this._a;
    }

    set a(value) { // set property
        if (value < 0)
            throw new Error('Value cannot be less than 0.');

        this._a = value;
    }
}
