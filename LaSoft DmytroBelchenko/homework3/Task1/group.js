var Group = function (students, groupNumber, olderId, lessonTicher) {
    this.students = students || [];
    this.lessonTicher = lessonTicher || {};
    this.groupNumber = groupNumber || 0;
    this.olderId = olderId || 0;
}
Group.prototype.createStudent = function (name, surname, patronyme, sex, birthDate, birthPlace, family, studTickNum, hobby, rating) {
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


    var data = new RegExp("^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$") //dd.mm.yyyy
    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);

    }
    if (isNumber(_this.name) || (!this.name)) {
        var err = new Error("INCORRECT NAME");
        err.status = "INCORECT_NAME";
        throw err;

    }
    if (isNumber(_this.surname) || (!this.surname)) {
        var err = new Error("INCORRECT SURNAME");
        err.status = "INCORECT_SURNAME";
        throw err;
    }
    if (isNumber(_this.patronyme) || (!this.patronyme)) {
        var err = new Error("INCORRECT PATRONYME");
        err.status = "INCORECT_PATRONYME";
        throw err;
    }
    if (this.sex != "male" && this.sex != "female") {
        var err = new Error("INCORRECT SEX");
        err.status = "INCORECT_SEX_INPUT";
        throw err;
    }

    if (this.birthDate.match(data) === 0) {
        var err = new Error("INCORRECT BIRTH_DATE");
        err.status = "INCORECT_ BIRTH_DATE";
        throw err;
    }
    if (isNumber(_this.birthPlace) || (!this.birthPlace)) {
        var err = new Error("INCORRECT BIRTH_PLACE");
        err.status = "INCORECT_BIRTH_PLACE";
        throw err;
    }
    if (this.family != "married" && this.family != "not married") {
        var err = new Error("INCORRECT FAMILY STATUS");
        err.status = "INCORECT_FAMILY_STATUS";
        throw err;
    }
    if (!isNumber(_this.rating) && (!this.rating) && (this.rating < 0)) {
        var err = new Error("INCORRECT RATING INPUT");
        err.status = "INCORECT_RATING";
        throw err;
    }

    if (!isNumber(_this.studTickNum) && (!this.studTickNum) && (this.studTickNum < 0)) {
        var err = new Error("INCORRECT TICKET NUM INPUT");
        err.status = "INCORECT_TICKET_NUM";
        throw err;
    }
    if (isNumber(_this.hobby) || (!this.hobby)) {
        var err = new Error("INCORRECT HOBBY INPUT");
        err.status = "INCORECT_HOBBY_INPUT";
        throw err;
    }

    // this.number = this.students.length + 1;
    this.student = new Student(this.name, this.patronyme, this.surname, this.sex, this.birthDate, this.birthPlace, this.family, this.studTickNum, this.hobby);
    this.students.push(this.student);
    // return this.student;
}

Group.prototype.delStud = function (stud_id) {
    this.stud_id = stud_id;
    // var _this = this;
    // var delId = this.students.findIndex(function (el) {
    //      return el[studTickNum] === _this.studTickNum;
    // })
    // this.students.splice(delId, 1);
    //this.stud_id = stud_id;
    this.students.splice(this.stud_id, 1);
}
Group.prototype.setGroupNumber = function (groupNumber) {
    this.groupNumber = groupNumber;
}
Group.prototype.getGroupNumber = function () {
    return this.groupNumber;
}
Group.prototype.addSubj = function (subj, ticher) {
    this.ticher = ticher;
    this.subj = subj;
    this.lessonTicher[this.subj] = this.ticher;
}
Group.prototype.setOlder = function (studTickNum) {
    this.studTickNum = studTickNum;
    var _this = this;

    for (var g = 0; g < this.students.length; g++) {
        if (this.students[g].studTickNum === this.studTickNum) {
            this.olderId = g;
            //break;
        }
        
       // this.olderId = -1;
    }
    // this.olderId = this.students.findIndex(function (el) {
    //     return el[studTickNum] === _this.studTickNum;
    //  })
    //  debugger
    if (this.olderId !== -1) {
        return this.olderId
    }
    else {
        var err = new Error("THIS NUMBER OF STUDID IS NOT PRESENT IN THIS GROUP");
        err.status = "INVALID_OLDER_ID";
        throw err;
    }
}

