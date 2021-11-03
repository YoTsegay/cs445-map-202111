class Employee{
   private employeeId:number;
   private firstname:string;
   private lastname:string;
   private salary:number;
   private saleRecords:[];
       

   constructor(employeeId,firstname,lastname,salary,saleRecords){
       employeeId=employeeId;
       firstname=firstname;
       lastname=lastname;
       salary=salary;
       saleRecords= saleRecords;

   }

   public toString(){
       return `Employee id:$
       {this.employeeId} $
       firstname:${this.firstname}
       lastname: ${this.lastname}
       this.salary: ${this.salary}`

       }

       public getTotalSalesRecorded(){
           let sum = 0;
           for(let i = 0; i<this.saleRecords.length; i++){
               sum+= this.saleRecords[i];
           }
           return sum;
       }
   }

   let array =[15,10,13];
   const emp = new Employee('000-01-101','Anna','smith', 25500.50, array);
   emp.toString();
   emp.getTotalSalesRecorded();
   console.log(toString);
   console.log(emp.getTotalSalesRecorded());

