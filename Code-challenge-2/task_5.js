/* Task 5 ----
 */

class User {
    constructor(){
        this._username = ''
    }
    stateYourRole(){
        
    }
    get username() {
        return this._username
    }
    set username(name){
        throw new TypeError(`${this.stateYourRole()}`)
    }
}

class Admin extends User {
    constructor() {
        super()
    }
    stateYourRole() {
        return 'admin'
    }
}

class Viewer extends User {
    constructor(){
        super()
    }
    stateYourRole(){
        return 'viewer'
    }
}

const admin = new Admin()
admin.username = "Balthazar"
// throws an error displaying 'admin'
const viewer = new Viewer()
viewer.username = "Melchior"
// throws an error displaying 'viewer'