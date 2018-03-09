const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");
const submitBtn = document.getElementById("submit-btn");
const resultsList = document.querySelector(".results");


function validate(evt) {
    evt.preventDefault();
    const nameReg = /^[_a-zA-Zа-яА-ЯёЁ ]+$/;
    const lastNameReg = /^[_a-zA-Zа-яА-ЯёЁ ]+$/;
    const telReg = /(?:\+|\d)[\d\-\(\) ]{8,}\d/g;

    let results = {
        firstName: { value: firstname.value, valid: nameReg.test(firstname.value) },
        lastName: { value: lastname.value, valid: lastNameReg.test(lastname.value) },
        tel: { value: tel.value, valid: telReg.test(tel.value) }
    }

    showResults(results);
}

function showResults(results) {
    let box = "";
    for (key in results){
        if(results[key].valid)
        {
            box += `<li class = "success">SUCCESS: ${key} passed validation </li>`;
        }
        else 
        {
            box += `<li class = "error">ERROR: ${key} failed validation </li>`;
        }
        resultsList.innerHTML = box;
    }
}


submitBtn.addEventListener("click", validate);