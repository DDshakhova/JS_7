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
            "id_6": "Вероника",
            "id_7": "Марина",
            "id_8": "Диана",
            "id_9": "Ева",
            "id_10": "Алиса"
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

    randomBirthYear: function() {
        return this.randomIntNumber(max = 2004, min = 1960);
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        return this.person;
    }
};
