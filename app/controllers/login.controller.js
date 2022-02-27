const db = require("../../config/dbConn")
const jwt = require("jsonwebtoken")

function login(req, res) {
    let param = [req.body.name, req.body.password]
    let selectQuery = `SELECT * FROM merchant where name = ? and password = ?`

    db.query(selectQuery, param, function(error, results, fields) {
        if (error) throw error;
        if (results.length < 1) {
            return res.status(400).send({ message: "Data not found", data: results })
        }
        // Information about users saved to payload
        const payload = {
            id: results.id,
            name: results.name,
        }
        const token = jwt.sign(payload, "secret", { expiresIn: "7d" })

        return res.send({ message: "Data is found", data: { token: token } })
    });
}

module.exports = {
    login,
}