const db = require("../../config/dbConn");

// Merchant
const updateQuery = `UPDATE merchant SET address = ?, updated_at = CURRENT_TIMESTAMP() WHERE id  = ?`;
const data = ["Hiroshima", 1]
db.query(updateQuery, data, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});

// Product
const updateQuery = `UPDATE product SET name = ?, updated_at = CURRENT_TIMESTAMP() WHERE id  = ?`;
const data = ["YSS Suspension", 1]
db.query(updateQuery, data, function (err, updated) {
  if (err) throw err;
  console.log(updated);
});