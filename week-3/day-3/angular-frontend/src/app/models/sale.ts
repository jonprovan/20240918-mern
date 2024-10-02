export class Sale {
    // typing our variables here as well
    id: number;
    customer_first_name: string;
    customer_last_name: string;
    date: string;
    total: number;
    salesperson_id: number;

    constructor(id: number,
                customer_first_name: string,
                customer_last_name: string,
                date: string,
                total: number,
                salesperson_id: number) {
        this.id = id;
        this.customer_first_name = customer_first_name;
        this.customer_last_name = customer_last_name;
        this.date = date;
        this.total = total;
        this.salesperson_id = salesperson_id;
    }
}
