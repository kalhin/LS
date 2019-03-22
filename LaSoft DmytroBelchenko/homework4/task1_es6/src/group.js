class Group {
    constructor(students, groupNumber, olderId, lessonTicher) {
        this.students = students || [];
        this.lessonTicher = lessonTicher || {};
        this.groupNumber = groupNumber || 0;
        this.olderId = olderId || 0;
    }
    createStudent(name, surname, patronyme, studTickNum, birthDate, birthPlace, family, sex, hobby, rating) {
        let _this = this;
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


        const data = new RegExp("^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$"); //dd.mm.yyyy
        let isNumber = (n) => {
            return !isNaN(parseFloat(n)) && isFinite(n);

        }
        if (isNumber(this.name) || (!this.name)) {
            let err = new Error("INCORRECT NAME");
            err.status = "INCORECT_NAME";
            throw err;

        }
        if (isNumber(_this.surname) || (!this.surname)) {
            let err = new Error("INCORRECT SURNAME");
            err.status = "INCORECT_SURNAME";
            throw err;
        }
        if (isNumber(_this.patronyme) || (!this.patronyme)) {
            let err = new Error("INCORRECT PATRONYME");
            err.status = "INCORECT_PATRONYME";
            throw err;
        }
        if (this.sex != "male" && this.sex != "female") {
            let err = new Error("INCORRECT SEX");
            err.status = "INCORECT_SEX_INPUT";
            throw err;
        }

        if (this.birthDate.match(data) === 0) {
            let err = new Error("INCORRECT BIRTH_DATE");
            err.status = "INCORECT_ BIRTH_DATE";
            throw err;
        }
        if (isNumber(_this.birthPlace) || (!this.birthPlace)) {
            let err = new Error("INCORRECT BIRTH_PLACE");
            err.status = "INCORECT_BIRTH_PLACE";
            throw err;
        }
        if (this.family != "married" && this.family != "not married") {
            let err = new Error("INCORRECT FAMILY STATUS");
            err.status = "INCORECT_FAMILY_STATUS";
            throw err;
        }
        if (!isNumber(_this.rating) && (!this.rating) && (this.rating < 0)) {
            let err = new Error("INCORRECT RATING INPUT");
            err.status = "INCORECT_RATING";
            throw err;
        }

        if (!isNumber(_this.studTickNum) && (!this.studTickNum) && (this.studTickNum < 0)) {
            let err = new Error("INCORRECT TICKET NUM INPUT");
            err.status = "INCORECT_TICKET_NUM";
            throw err;
        }
        if (isNumber(_this.hobby) || (!this.hobby)) {
            let err = new Error("INCORRECT HOBBY INPUT");
            err.status = "INCORECT_HOBBY_INPUT";
            throw err;
        }

        
        
        this.students.push(new Student(this.name, this.patronyme, this.surname, this.studTickNum, this.birthDate, this.birthPlace, this.family, this.sex, this.hobby));
    }

    delStud(stud_id) {
        this.students.splice(stud_id, 1);
    }

    setGroupNumber(groupNumber) {
        this.groupNumber = groupNumber;
    }

    getGroupNumber() {
        return this.groupNumber;
    }
    
    addSubj(subj, ticher) {
        this.ticher = ticher;
        this.subj = subj;
        this.lessonTicher[this.subj] = this.ticher;
    }
    setOlder(studTickNum) {
    
        for (let g = 0; g < this.students.length; g++) {
            if (this.students[g].studTickNum === this.studTickNum) {
                this.olderId = g;
            }
        }
        
        if (this.olderId !== -1) {
            return this.olderId
        }
        else {
            let err = new Error("THIS NUMBER OF STUDID IS NOT PRESENT IN THIS GROUP");
            err.status = "INVALID_OLDER_ID";
            throw err;
        }
    }
    
}







