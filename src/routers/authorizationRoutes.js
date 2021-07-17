const { Router } = require('express');
const router = Router();
const controller = require('../controllers');

// Joi validation middleware
const validation = require('../middlewares/validation');

// validation rules are maintained in this file
const validationRules = require('../validationRules');

// validating `req.body`
router.post('/login', validation(validationRules.login), controller.login);

// validating `req.query`
router.get('/getBooks', validation(validationRules.getBooks, 'query'), controller.getAllBooks);

// validating `req.params`
router.get('/getBook/:id', validation(validationRules.getBookByID, 'params'), controller.getBookById);

module.exports = router;
