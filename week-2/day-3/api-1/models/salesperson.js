class Salesperson {
    id;
    first_name;
    last_name;
    department;
    hire_date;
    salary;

    constructor(id, first_name, last_name, department, hire_date, salary) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.department = department;
        this.hire_date = hire_date;
        this.salary = salary;
    }
}

module.exports = Salesperson;