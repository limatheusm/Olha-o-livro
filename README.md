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
* [Decorator](#decorator)

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

```js
// Arquivo backend/src/infra/api/DAO/UserDAO

...


let _instance = null;

class UserDAO{

    constructor () {
        if (!_instance) _instance = this;

        return _instance;
    }
    ...
}

```

```js
// Arquivo backend/src/infra/api/DAO/MaterialDAO

...


let _instance = null;

class MaterialDAO{

    constructor () {
        if (!_instance) _instance = this;

        return _instance;
    }
    ...
}

```


### Proxy
```js
// Arquivo backend/src/infra/api/DAO/UserDAOProxy

const UserDAO = require('./UserDAO');

class UserDAOProxy{
    constructor(){
        this.dao = new UserDAO();
    }

    insert (req, res){
        if (this._defaultValidation(req.headers)){
            this.dao.insert(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }
    ...

    _defaultValidation (headers) {
        return (headers.token && (headers.token === "oolivro" || headers.token === "oolivroadm"));
    }
}
```

```js
// Arquivo backend/src/infra/api/DAO/MaterialDAOProxy

const MaterialDAO = require('./MaterialDAO');

class MaterialDAOProxy{
    constructor(){
        this.dao = new MaterialDAO();
    }

    insert (req, res){
        if (this._defaultValidation(req.headers)){
            this.dao.insert(req.body, res);

        }else{
            res.send({'error' : true, 'message' : 'Sem permissão!'});
        }
    }
    ...

    _defaultValidation (headers) {
        return (headers.token && (headers.token === "oolivro" || headers.token === "oolivroadm"));
    }
}
```

### Decorator
```js
// Arquivo backend/src/business/control/Control

class Control{
    constructor () {}

    execute () {}
}


// Arquivo backend/src/business/control/user/UserControl

const Control = require('../Control');

class UserControl extends Control{
    constructor (userDao ,daoOperation) {
        super();
        this.userDao = userDao;
        this.daoOperation = daoOperation;
    }

    execute(req, res){
        this.userDao[this.daoOperation](req, res)
    }

    getDaoOperation () {
        return this.daoOperation;
    }

    getUserDao() {
        return this.userDao;
    }
}

// Arquivo backend/src/business/control/user/UserControlDecorator

const UserControl = require('./UserControl');

class UserControlDecorator extends UserControl{
    constructor (userControl){
        super(userControl.getUserDao(), userControl.getDaoOperation());
        this.control = userControl;
    }

    execute (req, res) {
        this.control.execute(req, res);
    }
}

// Arquivo backend/src/business/control/user/UserRemoveControl

const UserControlDecorator = require('./UserControlDecorator');

class UserRemoveControl extends UserControlDecorator{
    constructor (userControl, voidValidator) {
        super(userControl);
        this.voidValidator = voidValidator
    }

    execute (req, res) {
        let message = '';

        message = this.voidValidator.valid(req.query)
        
        if (message !== ''){
            res.send({'error' : true, 'message' : message});

        } else {
            super.execute(req, res);
        }
    }
}

```


### Iterator
```js
// Arquivo frontend/src/business/Iterator

export default class Iterator {
  constructor() {
  }

  first() {
    throw new Error('Abstract method!');
  }

  next() {
    throw new Error('Abstract method!');
  }

  isDone() {
    throw new Error('Abstract method!');
  }

  currentItem() {
    throw new Error('Abstract method!');
  }
}

// Arquivo frontend/src/business/control/material/MaterialsIterator

...
export default class MaterialsIterator extends Iterator {
  constructor(aggregate) {
    super();
    this.index = 0;
    this.aggregate = aggregate;
  }

  first() {
    return this.aggregate.list[0];
  }

  next() {
    this.index += 1;
    return this.aggregate.list[this.index];
  }

  isDone() {
    return this.index === this.aggregate.list.length;
  }

  currentItem() {
    if (this.isDone()) {
      this.index = this.aggregate.list.length - 1;
    } else if (this.index < 0) {
      this.index = 0;
    }
    return this.aggregate.list[this.index];
  }
}

// Arquivo frontend/src/business/Aggregate

export default class Aggregate {
  constructor() {
  }

  createIterator() {
    throw new Error('Abstract method!');
  }
}

// Arquivo frontend/src/business/control/material/MaterialsAggretate

...
export default class MaterialsAggregate extends Aggregate {
  constructor(list) {
    super();
    this.list = list;
  }

  createIterator() {
    this.iterator = new MaterialsIterator(this);
  }
}

// Arquivo frontend/src/business/BusinessFacade
...
getMaterialsAggregate(list) {
    return new MaterialsAggregate(list);
  }

...

// Arquivo frontend/src/components/MaterialDetails

...
  buildDonator() {
    const donatorID = this.state.material.donator;
    const nav = this.props.navigation;
    this.businessFacade.getAllMyMaterials(donatorID, (isSuccess, res) => {
      if (isSuccess) {
        let alreadyHelped = 0;
        let registeredMaterials = 0;
        registeredMaterials = res.length;
        const materialsAggregate = this.businessFacade.getMaterialsAggregate(res);
        for (
          materialsAggregate.createIterator(res); 
          !materialsAggregate.iterator.isDone(); 
          materialsAggregate.iterator.next()) {
          const material = materialsAggregate.iterator.currentItem();
          if (!material.available) {
            alreadyHelped++;
          }
        }
        const donator = this.state.donator;
        donator.alreadyHelped = alreadyHelped;
        donator.registeredMaterials = registeredMaterials;
        nav.navigate('DonatorDetails', { donator });
      }
    });
  }
...

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

```js
// Arquivo backend/src/business/control/user/UserControlFactory

...

class UserControlFactory{

    constructor () {
        this.controls = {}
        this.controls.register = new UserRegisterControl(new UserControl(new UserDaoProxy(), 'insert'),
                                                         new UserCompleteValidator());
        this.controls.edit = new UserEditControl (new UserControl(new UserDaoProxy(), 'update'),
                                                  new UserCompleteValidator());
        this.controls.donator = new DonatorDetailControl(new UserControl(new UserDaoProxy(), 'find'),
                                                     new VoidValidator());
        this.controls.login = new LoginControl(new UserControl(new UserDaoProxy(), 'login'),
                                               new LoginValidator());
        this.controls.remove = new UserRemoveControl(new UserControl(new UserDaoProxy(), 'remove'),
                                                     new VoidValidator());
        this.controls.report = new UserReportControl(new UserControl(new UserDaoProxy(), 'report'));
    }

    getControl (controlType) {
        return this.controls[controlType];
    }
}

```

```js
// Arquivo backend/src/business/control/material/MaterialControlFactory

...

class MaterialControlFactory{
    constructor () {
        this.controls = {};
        this.controls.list = ListMaterialControl;
        this.controls.delete = MaterialDeleteControl;
        this.controls.rate = MaterialRateControl;
        this.controls.search = SearchMaterialControl;
        this.controls.detail = MaterialDetailControl;
        this.controls.edit = MaterialEditControl;
        this.controls.register = MaterialRegisterControl;
        this.controls.all = MaterialListAllControl;
        this.controls.report = MaterialReportControl;
    }

    getControl (controlType) {
        let control = this.controls[controlType];

        return new control(new MaterialDaoProxy());
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