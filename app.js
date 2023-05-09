//npm run dev
const express= require('express');
const path = require('path');
const app = express();
const PORT= process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'./views/index.html'))
})
app.get('/register', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})
app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'))
})
app.use(express.static('public'))

app.listen(PORT, ()=>{
    console.log('Servidor escuchando en el puerto'+PORT);
})
