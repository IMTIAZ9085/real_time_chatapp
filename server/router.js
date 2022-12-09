const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
      res.send('server is on the login page');
});


router.get('/chat',(req,res) => {
      res.send('server is on the chat page');
});

module.exports = router;