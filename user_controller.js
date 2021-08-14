var usermodel = require("./model");
module.exports = {
    list(req, res){
        var pbuser = usermodel.connection();
        pbuser.query("SELECT * from admin", function (err, rows, fields) {
            if (err) throw err;
            res.json(rows)
          });
    },
    login(req, res){
        var pbuser = usermodel.connection();
        var data = req.body;
        pbuser.query(`SELECT * from admin where username = '${data.username}' and password = '${data.password}'`, function (err, rows, fields) {
            if (err) throw err;
            if (rows.length != 0) {
                res.status(200).json({ status: "Success"})
                req.session.uname = data.username;
                req.session.save()
            }else
                res.status(200).json({ status: "Invalid User"})
          });
    },
    register(req, res){
        var pbuser = usermodel.connection();
        var data = req.body;
        pbuser.query(`INSERT INTO admin (username, password) values ('${data.username}', '${data.password}')`, function (err, rows, fields) {
            if (err) { 
                res.status(500).json({ status: err.message });
            }else{
                res.status(204).json({ status: "Created" });
            }
          });
    },
    delete(req, res){
        var pbuser = usermodel.connection();
        var data = req.params.id;
        pbuser.query(`DELETE from admin where id = '${data}'`, function (err, rows, fields) {
            if (err) throw err;
            res.status(204).json({ status: "Deleted" });
          });
    },
    find(req, res){
        var pbuser = usermodel.connection();
        var data = req.params.id;
        pbuser.query(`SELECT * from admin where id = '${data}'`, function (err, rows, fields) {
            if (err) throw err;
            res.json(rows)
          });
    },
    update(req, res){
        var pbuser = usermodel.connection();
        var data = req.body;
        pbuser.query(`UPDATE admin set username = '${data.username}', password = '${data.password}' where id = '${data.id}'`, function (err, rows, fields) {
            if (err) throw err;
            res.status(204).json({ status: "Updated" });
          });
    },
    logout(req, res){
        req.session.destroy();
        res.status(204).json({ status: "Session Destroyed" });
    },
    
}