class Sale {
    id;
    customer_first_name;
    customer_last_name;
    date;
    total;
    salesperson_id;

    constructor(id, customer_first_name, customer_last_name, date, total, salesperson_id) {
        this.id = id;
        this.customer_first_name = customer_first_name;
        this.customer_last_name = customer_last_name;
        this.date = date;
        this.total = total;
        this.salesperson_id = salesperson_id;
    }
}

module.exports = Sale;