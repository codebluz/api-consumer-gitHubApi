const express = require('express');
const app = express();
const router = require('./router/router');
const port = process.env.PORT || 3000;

app.use(router);
app.listen(port, function(req, res) {
    console.log("Servidor rodando na porta "+port);
});