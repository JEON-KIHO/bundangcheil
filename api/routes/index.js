const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('express backend server')
})

module.exports = router;
