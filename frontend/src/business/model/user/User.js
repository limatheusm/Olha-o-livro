class User {
    constructor() {
        this._name = "User 1";
        this._mail = "user@olhaolivro.com";
        this._phone = "(83) 9 9988-8899";
        this._imageURL = "https://scontent.frec3-2.fna.fbcdn.net/v/t1.0-9/20292831_1563732526991471_5299144803312892119_n.jpg?oh=82be979c7aebcc7dac4a9d6599e4e7a5&oe=5AA57AA0";
        this._materials = [];
        this._from = 'UFPB';
        this._tokenAuth = "";
    }

    get tokenAuth() {
        return this._tokenAuth;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name) {
            this._name = name;
        }
    }

    get mail() {
        return this._mail;
    }

    set mail(mail) {
        if (mail) {
            this._mail = mail;
        }
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        if (phone) {
            this._phone = phone;
        }
    } 
    
    get imageURL() {
        return this._imageURL;
    }

    set imageURL(imageURL) {
        if (imageURL) {
            this._imageURL = imageURL;
        }
    }

    get materials() {
        return this._materials;
    }

    set materials(materials) {
        if (materials) {
            this._materials = materials;
        }
    }

    get from() {
        return this._from;
    }

    set from(from) {
        if (from) {
            this._from = from;
        }
    }
}

export { User }