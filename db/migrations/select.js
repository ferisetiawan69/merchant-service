const db = require("../../config/dbConn");

// Merchant
const selectQuery = `SELECT * FROM merchant`
db.query(selectQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('List merchant: ', results);
});

// Product
const selectQuery = `SELECT * FROM product`
db.query(selectQuery, function (error, results, fields) {
  if (error) throw error;
  console.log('List product: ', results);
});