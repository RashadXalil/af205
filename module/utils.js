let users = []
let id = 0
export default class User {
    constructor(name, surname) {
        this.id = id
        this.name = name
        this.surname = surname
        id++
    }
}

export function addUser(name, surname) {
    let newUser = new User(name, surname)
    users.push(newUser)
    console.log(`new user yaradildi. id:${newUser.id}`)
    return `new user yaradildi. name:${newUser.id}`
}
export function deleteUser(id) {
    let target = users.find(user => user.id == id)
    let indexOftarget = users.indexOf(target)
    users.splice(indexOftarget, 1)
    return `user silindi`
}
