var pbmodel = require("./model");
module.exports = {
    list(req, res){
        var pb = pbmodel.connection();
        var data = req.body;
        pb.query(`SELECT * from contacts where username = ${data.username}`, function (err, rows, fields) {
            if (err) throw err;
            res.json(rows)
          });
    },
    create(req, res){
        var pb = pbmodel.connection();
        var uname = req.session.uname;
        var data = req.body;
        pb.query(`INSERT INTO contacts (username, contact_name, contact_no) values ('${uname}', '${data.contact_name}', '${data.contact_no}')`, function (err, rows, fields) {
            if (err) throw err;
            res.status(204).json({ status: "Created" });
          });
    },
    delete(req, res){
        var pb = pbmodel.connection();
        var data = req.params.id;
        pb.query(`DELETE from contacts where id = '${data}'`, function (err, rows, fields) {
            if (err) throw err;
            res.status(204).json({ status: "Deleted" });
          });
    },
    find(req, res){
        var pb = pbmodel.connection();
        var data = req.session.uname;
        pb.query(`SELECT * from contacts where username = '${data}'`, function (err, rows, fields) {
            if (err) throw err;
            res.json(rows)
          });
    },
    update(req, res){
        var pb = pbmodel.connection();
        var data = req.body;
        pb.query(`UPDATE contacts set contact_name = '${data.contact_name}', contact_no = '${data.contact_no}' where id = '${data.id}'`, function (err, rows, fields) {
            if (err) throw err;
            res.status(204).json({ status: "Updated" });
          });
    }
    
}