
function generation()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surname;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#dateOfBirthOutput').innerText = initPerson.dateOfBirth;
    document.querySelector('#professionOutput').innerText = initPerson.profession;

};

function clear()
{  
    document.querySelector('#firstNameOutput').innerText = 'Генерация имени';
    document.querySelector('#surnameOutput').innerText = 'Генерация фамилии';
    document.querySelector('#patronymicOutput').innerText = 'Генерация отчества';
    document.querySelector('#genderOutput').innerText = 'Генерация пола';
    document.querySelector('#dateOfBirthOutput').innerText = 'Генерация даты рождения';
    document.querySelector('#professionOutput').innerText = 'Генерация профессии';

};

document.querySelector('#button-generation').addEventListener('click', () => {      
    generation();   
});

document.querySelector('#button-cleaner').addEventListener('click', () => {
    clear();
});