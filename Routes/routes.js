const express = require('express')
const router = express.Router()
const createuser = require('../controller/createusercontroller')
const userLogin = require('../controller/userLogin')
const verifyToken = require('../controller/verifyToken')

router.post('/createuser',verifyToken,createuser)

router.post('/login',userLogin)


module.exports = router