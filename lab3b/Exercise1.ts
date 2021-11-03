class Unversity{
    name: string;
    dept: string;

    constructor(name: string, dept: string){
        this.name = name;
        this.dept = dept;

    }

    graduation(year : number): void{
        console.log(`Graduation ${this.dept} ${year} students`);

    }
}

let miu : Unversity = new Unversity("MIU" , "MSD");
miu.graduation(2021);


