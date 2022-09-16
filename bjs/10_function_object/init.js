
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthYear;
    document.querySelector('#professionOutput').innerText = initPerson.profession;

};

