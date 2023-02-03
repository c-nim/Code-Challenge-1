//Task 2 ------

class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
}
    get firstName() {
        return this._firstName
    }
    get lastName() {
        return this._lastName
    }
    greeting() {
        console.log(`Hello World!`)
    }
    set firstName(newName) {
        this._firstName = newName;
      }
    set lastName(newName) {
        this._lastName = newName
    }
}

const user = new User()

user.firstName = 'Clara'
user.lastName = 'Nimmo'

user.greeting()
console.log(`My name is ${user.firstName} ${user.lastName}`)