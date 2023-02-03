
// Task 1 -------

class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
}
    get firstName() {
        console.log(this._firstName)
    }
    get lastName() {
        console.log(this._lastName)
    }
    greeting() {
        console.log(`Hello, ${this._firstName} ${this._lastName}`)
    }
}

const user1 = new User('John', 'Doe');
user1.firstName;
user1.lastName;
user1.greeting();

const user2 = new User('Jane', 'Doe');
user2.firstName;
user2.lastName;
user2.greeting();