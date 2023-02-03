/*
In this task your are required to create an Admin class, which is a  child class of the User  class:

1. Create a  User class:
§ Add to the class a property with the name of username.

§ Create a setter method that can set the value of the username.

2. Create the Admin class that inherits the User class:
§ Add a method by the name of expressYourRole(), and make it return the string: "Admin".

§ Add to the Admin class another method, sayHello(), that returns the string "Hello admin, XXX" with the username instead of XXX.

3. Create an object admin out of the class Admin:
§ Set its name to "Balthazar" and say hello to the user.
*/

class User {
    constructor(){
        this._userName = ''
    }

    set userName(name) {
        this._userName = name
    }
}

class Admin extends User {
    constructor() {
        super()
    }
    expressYourRole() {
        return "Admin"
    }
    sayHello() {
        return `Hello admin, ${this._userName}`
    }
}

const admin = new Admin()
admin.userName = "Balthazar"
console.log(admin.sayHello())