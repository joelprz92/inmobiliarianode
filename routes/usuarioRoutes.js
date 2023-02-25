import express from 'express';


const router = express.Router();


router.get('/', function(req, res) {
    res.json({msg: 'Hola Joel en JSON'})
});


router.get('/nosotros', function(req, res) {
    res.send('Info de nosotros')
});


export default router;