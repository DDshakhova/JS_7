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
    monthsJson: `{
        "count": 12,
        "list": {     
            "id_1": {"name": "января", "days": 31},
            "id_2": {"name": "февраля", "days": 28},
            "id_3": {"name": "марта", "days": 31},
            "id_4": {"name": "апреля", "days": 30},
            "id_5": {"name": "мая", "days": 31},
            "id_6": {"name": "июня", "days": 30},
            "id_7": {"name": "июля", "days": 31},
            "id_8": {"name": "августа", "days": 31},
            "id_9": {"name": "сентября", "days": 30},
            "id_10": {"name": "октября", "days": 31},
            "id_11": {"name": "ноября", "days": 30},
            "id_12": {"name": "декабря", "days": 31}
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Слесарь",
            "id_2": "Солдат",
            "id_3": "Шахтёр",
            "id_4": "Фрезеровщик",
            "id_5": "Машинист экскаватора",
            "id_6": "Клоун",
            "id_7": "Заготовщик костяного угля",
            "id_8": "Валяльщик",
            "id_9": "Механик судовых дизелей",
            "id_10": "Плавильщик"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Воспитательница",
            "id_2": "Медсестра",
            "id_3": "Няня",
            "id_4": "Плакальщица",
            "id_5": "Первая леди",
            "id_6": "Гейша",
            "id_7": "Хостес",
            "id_8": "Домохозяйка",
            "id_9": "Горничная",
            "id_10": "Мать-настоятельница"
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

    randomDateOfBirth: function() {
        let birthMonth = this.randomValue(this.monthsJson); 
        let birthYear = this.randomIntNumber(2004, 1960) + ' г.р.';
        return this.randomIntNumber(birthMonth.days,1) + ' ' + birthMonth.name + ' ' + birthYear; 
    },

    randomProfession: function () {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.professionFemaleJson);
        }
        else {
        return this.randomValue(this.professionMaleJson);
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.patronymic = this.randomPatronymic();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
