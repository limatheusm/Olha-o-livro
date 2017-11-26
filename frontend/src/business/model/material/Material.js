import { User } from '../user/'
class Material {
    constructor(key) {
        this.title = "Livro de Python " + key;
        this.type = "Livro";
        this.category = "Programação"
        this.sharingType = "Empréstimo";
        this.description = "Este livro é orientado ao iniciante em programação. Os conceitos básicos de programação, " +
                           "como expressões, variáveis, repetições, decisões, listas, funções, arquivos e banco de dados.";
        this.imageURL = "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg";
        this.local = "UFPB";
        this.date = "10/10/2017";
        this.donator = new User();
        this.heart = 54;
        this.key = key;
    }
}

export { Material }