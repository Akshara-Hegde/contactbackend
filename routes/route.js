

// import {get,getAll,create,getUser,updateData,deleteData} from '../controller/controller'


const express = require('express');
const router = express.Router();
const {getUser,getAll,create,updateData,deleteData} = require('../controller/controller')


const validateToken = require("../middleware/validation");

router.use(validateToken);
router.route('/').get(getAll).post(create)
router.route('/:id').get(getUser).put(updateData).delete(deleteData)


module.exports = router
