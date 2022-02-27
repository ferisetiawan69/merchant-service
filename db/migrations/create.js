const db = require("../../config/dbConn");

// Merchant Database
let createMerchantQuery = `
CREATE TABLE IF NOT EXISTS merchant (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (50) NOT NULL,
    password VARCHAR (50) NOT NULL,
    phone_number VARCHAR (20) NOT NULL,
    address VARCHAR (200) NOT NULL,
    join_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id)
)
`;

db.query(createMerchantQuery, function (error, results, fields) {
    if (error) throw error;
    console.log("Merchant table has been created");
})

// Product Database
let createProductQuery = `
CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    merchant_id INT NOT NULL,
    name VARCHAR (50) NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY (id),
    FOREIGN KEY (merchant_id) REFERENCES merchant (id)
)
`;

db.query(createProductQuery, function (error, results, fields) {
    if (error) throw error;
    console.log("Product table has been created");
})