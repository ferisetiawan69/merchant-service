const db = require("../../config/dbConn")
const Validator = require("validatorjs")

function insertMerchant(req, res) {
    const dataMerchant = req.body
    const rules = {
        name: "required|min:3|max:50",
        password: "required|min:1",
        phone_number: "required",
        address: "required",
    };

    const validation = new Validator(dataMerchant, rules);
    const insertQuery = `INSERT INTO merchant SET ?;`;
    if (validation.passes()) {
        db.query(insertQuery, dataMerchant, function (error, results, fields) {
            if (error) throw error;
        });
        res.send({ message: "Merchant data has been inserted", data: dataMerchant })
    } else {
        res.send({ message: "Error on: ", data: validation.errors.all() });
    }
}

function listMerchant(req, res) {
    const selectQuery = `SELECT * FROM merchant`

    db.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: "Data is found", data: results })
    });
}

function updateMerchant(req, res) {
    const updateQuery = `UPDATE merchant SET ? WHERE id = ?`;
    const data = [req.body, req.params.id];
    const rules = {
        phone_number: "required",
        address: "required",
    };
    const validation = new Validator(req.body, rules);
    if (validation.passes()) {
        db.query(updateQuery, data, function (error, result, fields) {
            if (error) throw error;
        });
        res.send({ message: "Merchant data has been updated", data: req.body})
    } else {
        res.send({ message: 'Error on: ', data: validation.errors.all() });
    }
}

function deleteMerchant(req, res) {
    const deleteQuery = `DELETE FROM merchant WHERE id = ?`
    const data = [req.params.id]
    db.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: "Merchant Data has been deleted" })
}

module.exports = {
    insertMerchant,
    listMerchant,
    updateMerchant,
    deleteMerchant,
};