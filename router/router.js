const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get('/repositorioTake', controller.pesquisarPerfilGitHub);

module.exports = router;
