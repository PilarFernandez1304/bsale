import express from'express'
import router from './routers/route.js'
import sequelize from './config/db.js'


const app = express();

/// conectar a la base de datos

sequelize.authenticate()
    .then(()=>console.log('Base de datos conectada'))
    .catch(error=>console.log(error))


// definir puerto
const port = process.env.PORT || 4000
// habilitar PUG
app.set('view engine','pug')


// middlewqres
// Obtenr el a;o actual
app.use((req,res,next)=>{
    const year = new Date()
    res.locals.actualYear=year.getFullYear();
    res.locals.nombreSitio="Agencia de Viajes"
    next()
})
// definir la carpeta publica

app.use(express.static('public'))


// agregarouter
app.use('/',router);

app.listen(port,()=>{
    console.log(`el Servidor esta funcionando en el puerto ${port}`)
})