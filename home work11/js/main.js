// http://fecore.net.ua/rest/?action=3&id=1 - удаление
// http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 - изменение
// http://fecore.net.ua/rest/?action=1&name=Mark&score=100 - добавление
// http://fecore.net.ua/rest/?action=4 - описание доступного функционала



// You have few endpoints:

// GET https://test-users-api.herokuapp.com/users/
// Show your all created users.No parameters.

// GET https://test-users-api.herokuapp.com/users/:id
// Show your only one user by id.No parameters.

// POST https://test-users-api.herokuapp.com/users/
// Creating new user.Required parameters: name -> String, age -> Number;

// PUT https://test-users-api.herokuapp.com/users/:id
// Editing user by ID, sending in URL.Avialible parameters: name -> String, age -> Number

// DELETE https://test-users-api.herokuapp.com/users/:id
// Deleting user by ID, sending in URL.No parameters.

const apiUrl = "https://test-users-api.herokuapp.com/users/";

const getButton = document.querySelector(".getUser");

const remUserButton = document.querySelector(".rem-user");
const upUserButton = document.querySelector(".up-User");
const result = document.querySelector(".result");

getButton.addEventListener("click",getUsers);

function getUsers(evt) {
    evt.preventDefault();
    fetch(apiUrl)
        .then(response =>{
            if(response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            let containerGet = `<div><table><tr><th>Name</th><th>Age</th><th>ID</th></tr>`;
            data.data.map(row => {
                containerGet += `<tr>`,
                containerGet += `<td>${row.name}</td><td>${row.age}</td><td>${row.id}</td>`,
                containerGet += `</tr>`
            })
            containerGet += `</table></div>`;
            result.innerHTML += containerGet;
        })
        .catch(error =>{
            console.error("Error :", error);
        })
}

const inputAddName = document.querySelector("#addUserName");
const inputAddAge = document.querySelector("#addUserScore");
const addUserButton = document.querySelector(".addUser");

addUserButton.addEventListener("click",addUser);

function addUser(evnt) {
    evnt.preventDefault();
    let data = {"name" : `${inputAddName.value}`, age : `${inputAddAge.value}`};
    fetch(apiUrl,{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                }
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(response => {
            result.innerHTML = `Person ${inputAddName.value} was added`;
            inputAddName.value = "";
            inputAddAge.value = "";
        })
        .catch(error => {
            console.error("Error :", error);
            result.innerHTML = `Error`;
        })
}

const inputRemove = document.querySelector("#removeUser");
const removeBtn = document.querySelector(".rem-user");

removeBtn.addEventListener("click", remUser);

function remUser(evnt) {
    evnt.preventDefault();
    let apiUrlRemove = `https://test-users-api.herokuapp.com/users/${inputRemove.value}`;
    fetch(apiUrlRemove, {
        method: "DELETE",
        body: JSON.stringify(),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(response => {
                result.innerHTML = `Person ID : ${inputRemove.value} deleted!`;
                inputRemove.value = "";
        })
        .catch(error =>{
            console.error("Error :", error);
            result.innerHTML = `Error`;
        })
}


const inputUpdateUserName = document.querySelector("#updateUserName")
const inputUpdateUser = document.querySelector("#updateUserId");
const inputUpdateUserScore = document.querySelector("#updateScore");
const updateUserBtn = document.querySelector(".up-User");

updateUserBtn.addEventListener("click", updateUser);

function updateUser (params) {
    params.preventDefault();
    let apiUrlUpdate = `https://test-users-api.herokuapp.com/users/${inputUpdateUser.value}`;
    fetch(apiUrlUpdate,{
        method: "PUT", body: JSON.stringify({ "name": `${inputUpdateUserName.value}`, age: `${inputUpdateUserScore.value}`}),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(response => {
                result.innerHTML = `Person ${inputUpdateUser.value} updated!`;
                inputUpdateUserName.value = "";
                inputUpdateUser.value = "";
                inputUpdateUserScore.value = "";
        })
        .catch(error=> {
            console.error("Error :", error);
            result.innerHTML = `Error`;
        })
}