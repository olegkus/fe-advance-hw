// http://fecore.net.ua/rest/?action=3&id=1 - удаление
// http://fecore.net.ua/rest/?action=2&id=1&name=Hey1&score=13 - изменение
// http://fecore.net.ua/rest/?action=1&name=Mark&score=100 - добавление
// http://fecore.net.ua/rest/?action=4 - описание доступного функционала

const apiUrl = "http://fecore.net.ua/rest/";

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
            let containerGet = `<div><table><tr><th>Name</th><th>Score</th><th>ID</th></tr>`;
            data.map(row =>{
                containerGet += `<tr>`,
                containerGet += `<td>${row.name}</td><td>${row.score}</td><td>${row.id}</td>`,
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
const inputAddScore = document.querySelector("#addUserScore");
const addUserButton = document.querySelector(".addUser");

addUserButton.addEventListener("click",addUser);

function addUser(evnt) {
    evnt.preventDefault();
    let apiUrlAddUser = `${apiUrl}?action=1&name=${inputAddName.value}&score=${inputAddScore.value}`;
    //let data = {"name" : `${inputAddName.value}`, "score" : `${inputAddScore.value}`};
    fetch(apiUrlAddUser,{method: 'POST'}) //, body: JSON.stringify(data)})
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(response => {
            result.innerHTML = `Person ${inputAddName.value} was added`;
            inputAddName.value = "";
            inputAddScore.value = "";
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
    let apiUrlRemove = `${apiUrl}?action=3&id=${inputRemove.value}`;
    fetch(apiUrlRemove, {method: "POST"})
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
    let apiUrlUpdate = `${apiUrl}?action=2&id=${inputUpdateUser.value}&name=${inputUpdateUserName.value}1&score=${inputUpdateUserScore.value}`;
    fetch(apiUrlUpdate,{method: "POST"})
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