// Inicialização de módulo
const axios = require('axios');
const filter = require('../functions/filter');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


// Criação e exportação do módulo contendo o método get com tratamento de erro.
module.exports = {
  async pesquisarPerfilGitHub(request, response) {
    await axios
      .get("https://api.github.com/orgs/takenet/repos")
      .then(function (result) {
        console.log("Repositório retornado com sucesso!");
        response.send(filter.handleData(result.data));
      })
      .catch((err) => {
        response.json({ msg: "Repostitório não encontrado " + err });
      });
  },
};
