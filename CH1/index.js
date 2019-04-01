// Lab 1.1
const makePetClass = name => (
  class Animal {
    constructor(type) {
      this.type = type
    }

    greeting(sound) {
      console.log(`${this.type} name ${name} barking: ${sound}`)
    }
  }
)

const Cat = makePetClass('Tyga')

const myCat = new Cat('Cat')

myCat.greeting('Meow')