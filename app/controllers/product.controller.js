const db = require("../../config/dbConn")
let Validator = require("validatorjs");

function insertProduct(req, res) {
    const data = req.body;
    const rules = {
        name: "required|min:3|max:50",
        quantity: "required|min:1",
        price: "required|min:10000",
    };
    const validation = new Validator(data, rules);
    const insertQuery = `INSERT INTO product (name, quantity, price) VALUES (?, ?, ?);`
    if (validation.passes()) {
        db.query(insertQuery, data, function (error, results, fields) {
            if (error) throw error;
        });
        res.send({ message: "Product data has been inserted", data: data })
    } else {
        res.send({ message: 'Error on: ', data: validation.errors.all() });
    }
}

function listProduct(req, res) {
    const selectQuery = `SELECT * FROM product`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: "Data is found", data: results })
    });
}

function updateProduct(req, res) {
    const updateQuery = `UPDATE product SET name = ?, quantity = ?, price = ?, updated_at = CURRENT_TIMESTAMP() WHERE id  = ?`;
    const data = [req.body, req.params.id];
    const rules = {
        name: "min:3|max:50",
        quantity: "min:1",
        price: "min:10000",
    };
    const validation = new Validator(req.body, rules);
    if (validation.passes()) {
        db.query(updateQuery, data, function (error, result, fields) {
            if (error) throw error;
        });
        res.send({ message: "Product data has been updated", data: data});
    } else {
        res.send({ message: 'Error on: ', data: validation.errors.all() });
    }
}

function deleteProduct(req, res) {
    const deleteQuery = `DELETE FROM product WHERE id = ?`
    const data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: "Product data has been deleted" });
}

module.exports = {
    insertProduct,
    listProduct,
    updateProduct,
    deleteProduct
};