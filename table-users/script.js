const submitBtn = document.getElementById("btn")
const nameInp = document.getElementById("name")
const surNameInp = document.getElementById("surname")
const ageInp = document.getElementById("age")
const positionInp = document.getElementById("position")
const nationInp = document.getElementById("nation")
const emailInp = document.getElementById("email")
const passwordInp = document.getElementById("password")
const usernameInp = document.getElementById("username")
const salaryInp = document.getElementById("salary")
const searchInp = document.getElementById("search")
const form = document.getElementById("form")
const loginForm = document.getElementById("login-form")
const loginUsername = document.getElementById("login-username")
const loginPassword = document.getElementById("login-password")
const filterInp = document.getElementById("filter")
const experienceInp = document.getElementById("experience")
const itemsList = document.getElementById("items")
const employees = []
let static = []
let id = 0
class Employee {
    constructor(name, username, password, email, surname, age, positon, nation, experience, salary) {
        this.id = id
        this.name = name
        this.username = username
        this.password = password
        this.email = email
        this.surname = surname
        this.age = age
        this.position = positon
        this.nation = nation
        this.experience = experience
        this.salary = salary
        id++
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const { nameVal, surnameVal, ageVal, positionVal, nationVal, experienceVal, salaryVal, usernameVal, passwordVal, emailVal } = getDataFromUser()
    createEmployee(nameVal, usernameVal, emailVal, passwordVal, surnameVal, ageVal, positionVal, nationVal, experienceVal, salaryVal)
    resetForm()
})
const getDataFromUser = () => {
    let nameVal = nameInp.value
    let surnameVal = surNameInp.value
    let ageVal = ageInp.value
    let usernameVal = usernameInp.value
    let emailVal = emailInp.value
    let passwordVal = passwordInp.value
    let positionVal = positionInp.value
    let nationVal = nationInp.value
    let experienceVal = experienceInp.value
    let salaryVal = salaryInp.value
    return { nameVal, surnameVal, ageVal, positionVal, nationVal, experienceVal, salaryVal, usernameVal, emailVal, passwordVal }
}
function createEmployee(name, username, email, password, surname, age, position, nation, experience, salary) {
    const newEmployee = new Employee(name, username, password, email, surname, age, position, nation, experience, salary)
    employees.push(newEmployee)
    static = [...employees]
    console.log(employees)
    renderUI(employees)
}
function deleteEmployee(id) {
    const target = employees.find(x => x.id == id)
    const indexOfTarget = employees.indexOf(target)
    employees.splice(indexOfTarget, 1)
    renderUI(employees)
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let loginUsernameVal = loginUsername.value
    let loginPasswordVal = loginPassword.value
    login(loginUsernameVal, loginPasswordVal)
})

function login(username, password) {
    let target = employees.find(emp => emp.username == username && emp.password == password)
    if (target) {
        alert(`xos gelmisiniz ${target.name} ${target.surname}`)
    }
    else {
        alert("bele bir user yoxdur")
    }
}

function searchEmployee(string) {
    let items = employees.filter(emp => emp.name.includes(string))
    renderUI(items)
}
searchInp.addEventListener("keyup", (e) => {
    if (e.target.value == "") {
        renderUI(employees)
    } else {
        searchEmployee(e.target.value)
    }
})
filterInp.addEventListener("change", (e) => {
    filterEmployee(e.target.value)
})
function filterEmployee(type) {
    switch (type) {
        case "low":
            employees.sort((a, b) => b.salary - a.salary)
            renderUI(employees)
            break;

        case "high":
            employees.sort((a, b) => a.salary - b.salary)
            renderUI(employees)
            break;
        case "default":
            renderUI(static)
            break;
    }
}
function editEmployee(id) {
    let target = employees.find(emp => emp.id == id)
    if (target) {
        let newName = prompt("new name")
        let newSurname = prompt("new surname")
        target.name = newName
        target.surname = newSurname
        console.log(employees)
        renderUI(employees)
    } else {
        return `bele bir item yoxdur`
    }
}
function renderUI(items) {
    let innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        const { id, name, surname, age, nation, experience, email, username, position, salary } = items[i]
        innerHTML += `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${name}</td>
        <td>${surname}</td>
        <td>${age}</td>
        <td>${nation}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${username}</td>
        <td>${position}</td>
        <td>${salary} AZN</td>
        <td><button class="btn btn-warning" onclick="editEmployee(${id})">Edit</button></td>
        <td><button class="btn btn-danger" onclick="deleteEmployee(${id})">Delete</button></td>
      </tr>`
    }
    itemsList.innerHTML = innerHTML
}
function resetForm() {
    nameInp.value = ""
    surNameInp.value = ""
    ageInp.value = ""
    experienceInp.value = ""
    nationInp.value = ""
    positionInp.value = ""
    salaryInp.value = ""
}