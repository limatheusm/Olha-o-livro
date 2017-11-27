# Olha o Livro!
__Backend__: API Restful feita em **NodeJS** + **Express** + **MongoDB**
__Frontend__: Aplicação Mobile Nativa para Android e iOS feito em **React Native**.

Para testar a aplicação, vá para [Execução](##execucao).
Para visualizar os Padrões de Projetos Implementados, vá para [Padrões](##padroes-de-projetos-implementados).
## Padrões de Projetos Implementados

### Singleton
```js
// Arquivo frontend/src/business/control/material

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
// Arquivo frontend/src/business/control/material

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

### Factory Method
```js
// Arquivo frontend/src/business/control/material

export default class MaterialFactory extends MaterialAbstractFactory {
    
    ...

    getMaterial(type) {
        switch (type) {
            case 'material':
                return new Material();
            case 'physicalMaterial':
                return new PhysicalMaterial();
            case 'virtualMaterial':
                return new VirtualMaterial();
            default:
                throw new Error("Material type error!");
        }
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