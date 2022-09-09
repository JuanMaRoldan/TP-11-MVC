const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

                        /* RECURSOS ESTATICOS */

app.use(express.static(path.join(__dirname,'public')));

                        /* MOTOR DE VISTAS */

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

                            /* RUTAS */

const mainRouter = require('./routes/main');

app.use('/', mainRouter)
/* app.get('/', (req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/about', (req,res) => res.sendFile(path.resolve(__dirname,'views','about.html'))); */




app.listen(port, ()=>{
    console.log(`Servidor Funcionando en http://www.localhost:${port} con exito`);
    });
    