// class person {
//   personName;
//   personAddress;
//   personPerson;

//   construction(personName, personAddress, personPhone) {
//     this.personAddress = personAddress;
//     this.personName = personName;
//     this.personPhone = personPhone;
//   }
//   dance() {
//     console.log(`${this.personName}Danced`);
//   }
// }

// const personFirst = new person("prashansha", "butwal", "974637");
// const personSecond = new person("prasha", "kathmandu", "974638");

// console.log(personFirst.personName);
// console.log(personSecond.personAddress);
// personFirst.dance();

// ENCAPSULATION -> BIND PROPERTY AND BEHAVIOUR TOGETHER IN ONE OBJECT
// ABSTRACTION -> HIDE UNNECESSARY COMPLECITY
// POLYMORPHISM -> SAME FUNCTIONALITY WITH DIFFERENT IMPLEMENTATION (MANY)
// INHERITANCE -> RESUE CODE AND MAK IT MORE EFFICIENT

// ENCAPSULATION

// class engine {
//   #engineNumber;
//   #engineRPM;

//   construction(engineNumber, engineRPM) {
//     this.#engineNumber = engineNumber;
//     this.#engineRPM = engineRPM;
//   }
//   getEngineNumber() {
//     return this.#engineNumber;
//   }
// }
// const engine = new engine("m3d343", 343);
// console.log(engine.getEngineNumber());

// create class animal
//include public property color, hasfur and breed
// include private property heart and lungs
// include method getAnimalDetails()that prints public property in nicer format
//include breathe and pump method ,use private property heart and lungs for that

class Animal {
  color;
  hasfur;
  breed;
  #heart;
  #lungs;
  constructor(color, hasfur, breed, heart, lungs) {
    this.color = color;
    this.hasfur = hasfur;
    this.breed = breed;
    this.#heart = heart;
    this.#lungs = lungs;
  }
  getAnimalDetails() {
    console.log(`${this.color} ${this.hasfur} ${this.breed}`);
  }
  breath() {
    console.log(`${this.#heart}`);
  }
  lungs() {
    console.log(`${this.#lungs}`);
  }
}
const animal1 = new Animal("brown", true, "dog", "strong", "healthy");
animal1.getAnimalDetails();
animal1.breath();
animal1.lungs();
