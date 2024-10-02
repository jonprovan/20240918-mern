export class Salesperson {

    //properties
    id: number;
    first_name: string;
    last_name: string;
    department: string;
    hire_date: string;
    salary: number;

    //constructor
    constructor(id: number,
                first_name: string,
                last_name: string,
                department: string,
                hire_date: string,
                salary: number) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.department = department;
        this.hire_date = hire_date;
        this.salary = salary;
    }

}
