const express = require('express'); // express = micro framework que ajuda na definição de rotas etc..
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://teste-9:teste-9@oministack-94xrw.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// Get, post, put, delete
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição,delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json());
app.use(routes);



app.listen(3333);