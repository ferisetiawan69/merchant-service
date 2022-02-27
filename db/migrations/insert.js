const db = require("../../config/dbConn");
// Merchant
const dataMerchant = [
	{name: "Killua", password: "kll001", phone_number: "08123444", address: "Osaka"},
	{name: "Hisoka", password: "hsk001", phone_number: "08123555", address: "Tokyo"},
	{name: "Feitan", password: "ftn001", phone_number: "08123666", address: "Kyoto"},
]

dataMerchant.forEach((value) => {
	let insertQuery = `INSERT INTO merchant SET ?;`;
	db.query(insertQuery, value, function (error, results, fields) {
		if (error) throw error;
		console.log('Merchant data has been inserted');
	});
});

// Product
const dataProduct = [
	{merchant_id:1, name: "Ohlins Suspension", quantity: "2", price: "8000000"},
	{merchant_id:2, name: "Maxxis Tires", quantity: "4", price: "500000"},
	{merchant_id:3, name: "Motul Oil", quantity: "5", price: "150000"},
]

dataProduct.forEach((value) => {
	let insertQuery = `INSERT INTO product SET ?;`;
	db.query(insertQuery, value, function (error, results, fields) {
		if (error) throw error;
		console.log('Product data has been inserted');
	});
});