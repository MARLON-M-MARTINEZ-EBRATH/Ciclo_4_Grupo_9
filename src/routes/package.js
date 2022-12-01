const express = require('express');
const router = express.Router();
const packageSchema = require('../../models/paquetes')
module.exports = router;

router.post('/packages', (req, res)=>{
    const user = packageSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => console.error({message: error}))
})