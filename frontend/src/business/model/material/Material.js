import { User } from '../user/'
class Material {
    constructor() {
        this._key = Math.floor(Math.random() * 99) + 1; // Gera numero aleatorio 1-99
        this._title = "Livro de Python " + this._key;
        this._type = "Livro";
        this._category = "Programação"
        this._sharingType = "Empréstimo";
        this._description = "Este livro é orientado ao iniciante em programação. Os conceitos básicos de programação, " +
            "como expressões, variáveis, repetições, decisões, listas, funções, arquivos e banco de dados.";
        this._imageURL = "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg";
        this._local = "UFPB";
        this._date = "10/10/2017";
        this._donator = new User();
        this._heart = 54;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (title)
            this._title = title;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        if (type)
            this._type = type;
    }

    get category() {
        return this._category;
    }

    set category(category) {
        if (category)
            this._category = category;
    }

    get sharingType() {
        return this._sharingType;
    }

    set sharingType(sharingType) {
        if (sharingType)
            this._sharingType = sharingType;
    }

    get description() {
        return this._description;
    }

    set description(description) {
        if (description)
            this._description = description;
    }

    get imageURL() {
        return this._imageURL;
    }

    set imageURL(imageURL) {
        if (imageURL)
            this._imageURL = imageURL;
    }

    get local() {
        return this._local;
    }

    set local(local) {
        if (local)
            this._local = local;
    }

    get donator() {
        return this._donator;
    }

    get heart() {
        return this._heart;
    }

    set heart(heart) {
        if (heart)
            this._heart = heart;
    }

    get key() {
        return this._key;
    }
}

export { Material }