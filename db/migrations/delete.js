const db = require("../../config/dbConn");

// Merchant
const deleteQueryMerchant = `DELETE FROM merchant WHERE id = ?`
const data = [3]
db.query(deleteQueryMerchant, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});

// Product
const deleteQueryProduct =  `DELETE FROM product WHERE id = ?`
const data = [2]
db.query(deleteQueryProduct, data, function (err, deleted) {
  if (err) throw err;
  console.log(deleted);
});