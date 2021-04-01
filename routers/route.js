import express from 'express';

const router = express.Router()
// req- lo que emviamos res - lo que express responde
router.get('/',(req,res)=>{
    res.send('Home')
})

router.get('/lineaBlanca',(req,res)=>{
    res.send('LineaBlanca')
})

router.get('/ropa',(req,res)=>{
    res.send('Ropa')
})

router.get('/juguetes',(req,res)=>{
    res.send('Juguetes')
})

router.get('/computo',(req,res)=>{
    res.send('Computo')
})

export default router