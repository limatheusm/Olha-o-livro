
class Material {
    constructor(key) {
        this.title = "Livro de Python " + key
        this.type = "Emprestimo"
        this.description = "Lorem ipsum"
        this.imageURL = "https://s3.novatec.com.br/capas-ampliadas/capa-ampliada-9788575224083.jpg"
        this.local = "UFPB"
        this.date = "10/10/2017"
        this.key = key
    }
}

export { Material }