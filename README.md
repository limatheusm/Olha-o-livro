# Olha o Livro!
__Backend__: API Restful feita em **NodeJS** + **Express** + **MongoDB**
__Frontend__: Aplicação Mobile Nativa para Android e iOS feito em **React Native**.

Para testar a aplicação, vá para [Execução](#execução).

Para visualizar os Padrões de Projetos Implementados, vá para [Padrões](#padrões-de-projetos-implementados).

## Padrões de Projetos Implementados

### Criação

* [Singleton](#singleton)
* [Abstract Factory](#abstract-factory)
* [Factory Method](#factory-method)

### Estrutural

* [Facade](#facade)
* [Proxy](#proxy)

### Comportamental

* [Iterator](#iterator)

## Implemetações

### Singleton
```js
// Arquivo frontend/src/business/control/material/MaterialFactory

...

let instance = null;

export default class MaterialFactory extends MaterialAbstractFactory {
    
    constructor() { 
        super();
        
        if (!instance) {
            instance = this;
        }

        return instance;
    }
    
    ...
}

```

```js
// Arquivo frontend/src/business/control/user/UserFactory

...

let instance = null;

export default class UserFactory extends UserAbstractFactory {
    
    constructor() { 
        super();
        
        if (!instance) {
            instance = this;
        }

        return instance;
    }
    
    ...
}

```

### Proxy
```js

```

### Iterator
```js

```

### Facade
```js

```

### Abstract Factory
```js
// Arquivo frontend/src/business/control/material/MaterialAbstractFactory

export default class MaterialAbstractFactory {
    constructor() { 

    }
    createMaterial() {
        throw new Error("Abstract method!");
    }
    createPhysicalMaterial() {
        throw new Error("Abstract method!");
    }
    createVirtualMaterial() {
        throw new Error("Abstract method!");
    }
}

```

```js
// Arquivo frontend/src/business/control/user/UserAbstractFactory

export default class UserAbstractFactory {
    constructor() { 

    }
    createUser() {
        throw new Error("Abstract method!");
    }
    createUserAdm() {
        throw new Error("Abstract method!");
    }
    createUserDonator() {
        throw new Error("Abstract method!");
    }
}

```

### Factory Method
```js
// Arquivo frontend/src/business/control/material/MaterialFactory

export default class MaterialFactory extends MaterialAbstractFactory {
    
    ...

    getMaterial(type) {
        switch (type) {
            case 'material':
                return this.createMaterial();
            case 'physicalMaterial':
                return this.createPhysicalMaterial();
            case 'virtualMaterial':
                return this.createVirtualMaterial();
            default:
                throw new Error("Material type error!");
        }
    }

    createMaterial() {
        return new Material();
    }

    createPhysicalMaterial() {
        return new PhysicalMaterial();
    }

    createVirtualMaterial() {
        return new VirtualMaterial();
    }
}

```

```js
// Arquivo frontend/src/business/control/user/UserFactory

export default class UserFactory extends UserAbstractFactory {
    
    ...

    getMaterial(type) {
        switch (type) {
            case 'user':
                return this.createUser();
            case 'userAdm':
                return this.createUserAdm();
            case 'userDonator':
                return this.createUserDonator();
            default:
                throw new Error("Material type error!");
        }
    }

    createUser() {
        return new User();
    }

    createUserAdm() {
        return new UserAdm();
    }

    createUserDonator() {
        return new UserDonator();
    }
}

```




## Execução
### Instale as dependencias:
#### Backend
```console
    cd backend && npm install
```
#### Frontend
```console
    cd frontend && npm install && react-native link
```

### Inicie o mongodb

```console
    mongod
```

### Inicie o backend
#### Para dev

```console
    cd backend && npm run dev
```
#### Para produção

```console
    cd backend && npm run prod
```

### Inicie a aplicação React Native
#### Para iOS
```console
    react-native run-ios
```

#### Para Android
```console
    react-native run-android
```