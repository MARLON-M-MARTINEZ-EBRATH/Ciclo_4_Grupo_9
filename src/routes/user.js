const express = require('express');
const router = express.Router();
const userSchema = require('../../models/usuario')
module.exports = router;

router.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => console.error({message: error}))
})