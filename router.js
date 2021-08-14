var usercontrol = require("./user_controller");
var pbcontrol = require("./pb_controller");

const express = require('express');
var router = express.Router();

router.get('/list', usercontrol.list);
router.get('/list/:id', usercontrol.find);
router.post('/register', usercontrol.register);
router.delete('/delete/:id', usercontrol.delete);
router.put('/update', usercontrol.update);
router.post('/login', usercontrol.login);
router.get('/logout', usercontrol.logout);

// router.get('/pblist', pbcontrol.list);
router.post('/create', pbcontrol.create);
router.get('/pblist', pbcontrol.find);
router.delete('/pbdelete/:id', pbcontrol.delete);
router.put('/pbupdate', pbcontrol.update);


module.exports = router;
