class Box {
  _name = "Игорь";
  _age = 19;

  constructor(name, age) {
    console.log('Создание класса');
    this.name = name;
    this.age = age;
  }

  hi() {
    console.log('Привет ' + this.name);
  }

  get Name() {
    return this._name;
  }

  set Name(value) {
    this._name = value
    console.log('Мое имя ' + value);
  }

  get Age() {
    return this._age
  }

  set Age(value) {
    this._age = value
    console.log(2024 - this._age);
  }
}

let myBox = new Box("Оля", 29);
let myBox2 = new Box("Игорь", 18);
let myBox3 = new Box('Ваня', 40);
myBox.Age = 19;
myBox.Name = 'Игорь';

myBox3.hi();
console.log(myBox instanceof Box);


//console.log(myBox.name);
//console.log(myBox2.name);
