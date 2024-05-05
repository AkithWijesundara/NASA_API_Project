const router = require("express").Router();
const { authenticateToken } = require("../middleware/autorization");

const {
    registerUser,
    login
} = require("../controllers/userController");


//register
router.post('/signup',registerUser);

//login
router.post('/login',login);


module.exports = router;