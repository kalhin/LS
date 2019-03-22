"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(_name, _surname, _patronyme, _studTickNum, _birthDate, _birthPlace, _family, _sex, _hobby, _rating, _sholship) {
  _classCallCheck(this, Student);

  this.name = _name;
  this.surname = _surname;
  this.patronyme = _patronyme;
  this.sex = _sex;
  this.birthDate = _birthDate;
  this.birthPlace = _birthPlace;
  this.family = _family;
  this.studTickNum = _studTickNum;
  this.sholship = _sholship || "n/a";
  this.rating = _rating || "n/a";
  this.hobby = _hobby;
};