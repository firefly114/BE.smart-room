const router = require("express").Router();
const wrapper = require('../../utils/wrapper');
const authService = require('../../services/auth');

router.post('/login', wrapper((req) => authService.login(req.body)));
router.post('/register', wrapper((req) => authService.register(req.body)));

module.exports = router;
