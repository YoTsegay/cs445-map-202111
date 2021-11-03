

class animal {

}

interface yohana {

}

abstract class Employee extends animal implements yohana {

    constructor(public fname:string, private lname: string, salary: number) {
        super();
    }
}


let course: (string | number);
let data: string | number;
function process(code: (string | number)) { }


// let emp:[number, string] = [1, "steve"];
// let emp1:(number|string) = 23423;
// let emp2: Array<string> = "steve";
// let emp3: string[] = "steve";
