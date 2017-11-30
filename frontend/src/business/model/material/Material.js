import { User } from '../user/';

class Material {
    constructor() {
        // this.title = 'Livro de Python';
        // this.type = 'Livro';
        // this.category = ['Programação'];
        // this.sharingType = 'Empréstimo';
        // this.description = 'Este livro é orientado ao iniciante em programação. Os conceitos básicos de programação, ' +
        //     'como expressões, variáveis, repetições, decisões, listas, funções, arquivos e banco de dados.';
        // this.imageURL = 'https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg';
        // this.local = 'UFPB';
        // this.date = '10/10/2017';
        // this.donator = '5a1df25a18314d186a2506a8';
        // this.heart = 54;
        // this.available = true;
        this.title = '';
        this.type = '';
        this.category = [];
        this.sharingType = '';
        this.description = '';
        this.imageURL = '';
        this.local = '';
        this.date = '10/10/2017';
        this.donator = '';
        this.heart = 0;
        this.available = true;
    }
}

export { Material };
