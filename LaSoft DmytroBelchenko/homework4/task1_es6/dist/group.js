"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Group =
/*#__PURE__*/
function () {
  function Group(students, groupNumber, olderId, lessonTicher) {
    _classCallCheck(this, Group);

    this.students = students || [];
    this.lessonTicher = lessonTicher || {};
    this.groupNumber = groupNumber || 0;
    this.olderId = olderId || 0;
  }

  _createClass(Group, [{
    key: "createStudent",
    value: function createStudent(name, surname, patronyme, studTickNum, birthDate, birthPlace, family, sex, hobby, rating) {
      var _this = this;

      this.name = name;
      this.surname = surname;
      this.patronyme = patronyme;
      this.sex = sex;
      this.birthDate = birthDate;
      this.birthPlace = birthPlace;
      this.family = family;
      this.studTickNum = studTickNum;
      this.rating = rating;
      this.hobby = hobby;
      var data = new RegExp("^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$"); //dd.mm.yyyy

      var isNumber = function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      };

      if (isNumber(_this.name) || !this.name) {
        var err = new Error("INCORRECT NAME");
        err.status = "INCORECT_NAME";
        throw err;
      }

      if (isNumber(_this.surname) || !this.surname) {
        var _err = new Error("INCORRECT SURNAME");

        _err.status = "INCORECT_SURNAME";
        throw _err;
      }

      if (isNumber(_this.patronyme) || !this.patronyme) {
        var _err2 = new Error("INCORRECT PATRONYME");

        _err2.status = "INCORECT_PATRONYME";
        throw _err2;
      }

      if (this.sex != "male" && this.sex != "female") {
        var _err3 = new Error("INCORRECT SEX");

        _err3.status = "INCORECT_SEX_INPUT";
        throw _err3;
      }

      if (this.birthDate.match(data) === 0) {
        var _err4 = new Error("INCORRECT BIRTH_DATE");

        _err4.status = "INCORECT_ BIRTH_DATE";
        throw _err4;
      }

      if (isNumber(_this.birthPlace) || !this.birthPlace) {
        var _err5 = new Error("INCORRECT BIRTH_PLACE");

        _err5.status = "INCORECT_BIRTH_PLACE";
        throw _err5;
      }

      if (this.family != "married" && this.family != "not married") {
        var _err6 = new Error("INCORRECT FAMILY STATUS");

        _err6.status = "INCORECT_FAMILY_STATUS";
        throw _err6;
      }

      if (!isNumber(_this.rating) && !this.rating && this.rating < 0) {
        var _err7 = new Error("INCORRECT RATING INPUT");

        _err7.status = "INCORECT_RATING";
        throw _err7;
      }

      if (!isNumber(_this.studTickNum) && !this.studTickNum && this.studTickNum < 0) {
        var _err8 = new Error("INCORRECT TICKET NUM INPUT");

        _err8.status = "INCORECT_TICKET_NUM";
        throw _err8;
      }

      if (isNumber(_this.hobby) || !this.hobby) {
        var _err9 = new Error("INCORRECT HOBBY INPUT");

        _err9.status = "INCORECT_HOBBY_INPUT";
        throw _err9;
      }

      this.students.push(new Student(this.name, this.patronyme, this.surname, this.studTickNum, this.birthDate, this.birthPlace, this.family, this.sex, this.hobby));
    }
  }, {
    key: "delStud",
    value: function delStud(stud_id) {
      this.students.splice(stud_id, 1);
    }
  }, {
    key: "setGroupNumber",
    value: function setGroupNumber(groupNumber) {
      this.groupNumber = groupNumber;
    }
  }, {
    key: "getGroupNumber",
    value: function getGroupNumber() {
      return this.groupNumber;
    }
  }, {
    key: "addSubj",
    value: function addSubj(subj, ticher) {
      this.ticher = ticher;
      this.subj = subj;
      this.lessonTicher[this.subj] = this.ticher;
    }
  }, {
    key: "setOlder",
    value: function setOlder(studTickNum) {
      for (var g = 0; g < this.students.length; g++) {
        if (this.students[g].studTickNum === this.studTickNum) {
          this.olderId = g;
        }
      }

      if (this.olderId !== -1) {
        return this.olderId;
      } else {
        var err = new Error("THIS NUMBER OF STUDID IS NOT PRESENT IN THIS GROUP");
        err.status = "INVALID_OLDER_ID";
        throw err;
      }
    }
  }]);

  return Group;
}();