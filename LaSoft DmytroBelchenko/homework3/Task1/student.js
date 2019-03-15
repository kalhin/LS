
var Student = function (_name, _surname, _patronyme, _sex, _birthDate, _birthPlace, _family, _studTickNum, _hobby, _rating,_sholship ) {
    this.name = _name;
    this.surname = _surname;
    this.patronyme = _patronyme;
    this.sex = _sex;
    this.birthDate = _birthDate;
    this.birthPlace = _birthPlace;
    this.family = _family;
    this.studTickNum = _studTickNum;
    this.sholship = _sholship||"n/a";
    this.rating = _rating||"n/a";
    this.hobby = _hobby;
}
