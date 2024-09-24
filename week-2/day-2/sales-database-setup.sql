CREATE SCHEMA `sales` ;

CREATE TABLE `sales`.`salesperson` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(32) NOT NULL,
  `last_name` VARCHAR(32) NOT NULL,
  `department` VARCHAR(32) NOT NULL,
  `hire_date` DATE NOT NULL,
  `salary` INT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `sales`.`sale` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_first_name` VARCHAR(32) NOT NULL,
  `customer_last_name` VARCHAR(32) NOT NULL,
  `date` DATE NOT NULL,
  `total` DECIMAL(18,2) NOT NULL,
  `salesperson_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `salesperson_id1_idx` (`salesperson_id` ASC) VISIBLE,
  CONSTRAINT `salesperson_id1`
    FOREIGN KEY (`salesperson_id`)
    REFERENCES `sales`.`salesperson` (`id`)
    ON DELETE NO ACTION
    ON UPDATE CASCADE);
    
INSERT INTO salesperson(first_name, last_name, department, hire_date, salary)
	VALUES("Ricky", "Roma", "Real Estate", "1940-04-25", 125000), 
		  ("Shelley", "Levine", "Offboarding", "1925-02-08", 26500), 
          ("Alec", "Blake", "Real Estate", "1958-04-03", 970000);
          
INSERT INTO sale(customer_first_name, customer_last_name, date, total, salesperson_id)
	VALUES("Mildred", "Periwinkle", "1992-01-16", 109000, 1),
		  ("Finn", "Cratchet", "1992-02-28", 225000, 1),
          ("Eloise", "Renfield", "1992-03-03", 188000, 1),
          ("Biff", "Plotz", "1992-01-13", 14750, 2),
          ("Thelonius", "Vanderbilt", "1992-01-01", 780000, 3),
          ("Shawna", "Betterwiles", "1992-01-30", 312000, 3),
          ("Kristoff", "Von Gluck", "1992-02-11", 199000, 3),
          ("Annabelle", "Caterwauler", "1992-02-14", 845000, 3),
          ("Defarius", "Winnebago", "1992-03-15", 595000, 3);
  
SELECT * FROM salesperson;
SELECT * FROM sale;

SELECT * FROM salesperson JOIN sale ON salesperson.id = sale.salesperson_id;

SELECT first_name AS "First Name", last_name AS "Last Name", SUM(total) AS "Total Sales" 
	FROM salesperson JOIN sale ON salesperson.id = sale.salesperson_id GROUP BY salesperson.id;