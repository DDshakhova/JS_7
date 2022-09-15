const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Фёдоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артём",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Илона",
            "id_4": "Арина",
            "id_5": "Дарья",
            "id_6": "Вера",
            "id_7": "Марина",
            "id_8": "Диана",
            "id_9": "Ева",
            "id_10": "Алиса"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {
            "id_1": "Николаев",
            "id_2": "Александров",
            "id_3": "Валентинов",
            "id_4": "Петров",
            "id_5": "Васильев",
            "id_6": "Давидов",
            "id_7": "Михайлов",
            "id_8": "Евгеньев",
            "id_9": "Ярославов",
            "id_10": "Дмитриев"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function() {
        return this.randomIntNumber() === 0  ? this.GENDER_FEMALE : this.GENDER_MALE;
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
        else {
        return this.randomValue(this.firstNameMaleJson);
        }
    },

    randomSurname: function() {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'a';
        }
        else {
            return this.randomValue(this.surnameJson);
        }
    },

    randomPatronymic: function () {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.patronymicJson) + 'на';
        }
        else {
        return this.randomValue(this.patronymicJson) + 'ич';
        }
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2004, 1960) + ' г.р.';
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};
