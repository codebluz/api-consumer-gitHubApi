// Função que trata o retorno do repositório git limitando o response da api à repostórios da linguagem C ordenado do mais antigo ao mais novo e reduzindo o retorno aos 5 mais antigos

module.exports = {
  handleData(data) {
    let list = [];

    for (let i in data) {
      if (data[i].language === "C#") {
        list.push({
          name: data[i].name,
          description: data[i].description,
          created_at: data[i].created_at,
          language: data[i].language,
        });
      }
    }
    list = list.sort(list.created_at);
    list = list.slice(0, 5);
    return list;
  },
};
