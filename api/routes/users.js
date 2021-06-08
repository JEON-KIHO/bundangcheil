const express = require('express');
const router = express.Router();

/* GET users listing. */
router.post('/checkUser', function(req, res, next) {
  const body = req.body;
  const variable = {
    name: '전기호',
    phone: '01022712202'
  }

  const eqn = body.name === variable.name
  const eqp = body.phone === variable.phone

  res.json({ userState: eqn && eqp, phone: variable.phone, name: variable.name })
});

module.exports = router;
