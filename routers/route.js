import express from 'express';

const router = express.Router()
// req- lo que emviamos res - lo que express responde
router.get('/',(req,res)=>{
    res.render('home',{
        pagina:'Inicio'
    })
})

router.get('/lineaBlanca',(req,res)=>{
    res.render('lineaBlanca',{
        pagina:'Linea Blanca'
    })
})

router.get('/ropa',(req,res)=>{
    res.render('ropa',{
        pagina:'Ropa'
    });
})

router.get('/juguetes',(req,res)=>{
    res.render('Juguetes',{
        pagina:'Juguetes'
    })
})

router.get('/computo',(req,res)=>{
    res.render('Computo',{
        pagina:'Computo'
    })
})

export default router