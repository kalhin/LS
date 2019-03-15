window.onload = function () {
    var renew = new ReTable();
    var univers = new AllGroups();
    var hostel = new Hostel();
    var libruary = new Libruary();
    var addGrpBtn = document.querySelector(' #wrapper #add_group');
    var delGrpBtn = document.querySelector("#wrapper #delete_group");
    var selected = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");
    var tableToClick = document.querySelector("#wrapper .studentsTable");
    var groupeToWrite = 0;
    var groupeIndex = document.querySelector("#wrapper .id_out");

    libruary.loadBook("drama", "king", "fog", 30, 0);
    libruary.loadBook("drama", "king", "light", 40, 0);
    libruary.loadBook("drama", "king", "night", 10, 0);
    libruary.loadBook("fant", "vern", "80Days", 50, 0);
    libruary.loadBook("fant", "vern", "nautilus", 30, 0);
    libruary.loadBook("fant", "vern", "island", 35, 0);
    libruary.loadBook("fantasy", "tolkin", "hobit", 30, 0);
    libruary.loadBook("fantasy", "tolkin", "shmobit", 70, 0);
    libruary.loadBook("fantasy", "tolkin", "rings", 55, 0);
    libruary.loadBook("fantasy", "tolkin", "elves", 90, 0);

    hostel.createRoom();

    var learningProcess = function () {
        univers.groupsArr.forEach(function (el) {
            var coeff = 0;
            for (var key in el.lessonTicher) {
                coeff += el.lessonTicher[key].length;
            }
            el.students.forEach(function (st) {
                st.rating = (coeff * Math.random()) / 10
            })
        });
    }
    var createSubj = function () {
        var subjs = [
            ["math", "orlinsky"],
            ["liter", "pushkin"],
            ["phisics", "nuton"],
            ["chem", "mendeleev"],
            ["phiscult", "bubka"]
        ]
        var rand = 0 + Math.random() * 5;
        rand = Math.floor(rand);
        return subjs[rand];
    }

    var obshyagaIn = function (studId) {
        var administrator = 0;
        var full = hostel.rooms[administrator].setResident(studId);
        if (full === "full") {
            hostel.createRoom()
            administrator++;
            full = null;
        }

    }

    var scholarship = function (studId) {
        var stud = null;
        for (var s = 0; s < univers.groupsArr.length; s++) {
            stud = univers.groupsArr[s].students.find(function (el) {
                return el.studTickNum == studId;
            })
            if (stud) {
                break;
            }
        }
        if (!stud) {
            var err = new Error("INVALID ID");
            err.status = "SEARCH_ERR";
            throw err;
        }
        stud.sholship = Math.round(500 * stud.rating);
        return stud;
    }
    var ratingXY = function (x, y) {
        var ex = [];
        for (var p = 0; p < univers.groupsArr.length; p++) {
            stud = univers.groupsArr[p].students.forEach(function (el) {
                if ((el.rating >= x) || (el.rating <= y)) {
                    ex.push(el);
                }
            })

        }
        return ex;
    }
    var genStudTick = function () {
        return Math.floor(Math.random() * 10000);
    }

    univers.addGroup();
    for (var temp = 0; temp <= 4; temp++) {
        var prep = createSubj();
        univers.groupsArr[groupeToWrite].addSubj(prep[0], prep[1]);
    }
    renew.optionsWrite(univers.groupsArr);
    groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;
    // console.log(univers.groupsArr[groupeToWrite].lessonTicher)

    selected.onclick = function (elem) {
        groupeToWrite = elem.target.selectedIndex;
        renew.clearTable();
        renew.tableWrite(univers.groupsArr, groupeToWrite);
        groupeIndex.innerHTML = "";
        groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;
    }

    addGrpBtn.onclick = function () {
        var grpN = document.querySelector("#wrapper #grpIdInput");
        var enter = grpN.value;
        univers.addGroup(enter);
        grpN.value = "";
        renew.clearOption();
        renew.optionsWrite(univers.groupsArr);
    }

    delGrpBtn.onclick = function () {
        var delIndex = groupeToWrite;
        univers.delGroup(delIndex);
        renew.clearOption();
        renew.optionsWrite(univers.groupsArr);
        renew.clearTable();
        groupeToWrite = 0;
        renew.tableWrite(univers.groupsArr, groupeToWrite);
        groupeIndex.innerHTML = "";
        groupeIndex.innerHTML = "GroupeID №: " + univers.groupsArr[groupeToWrite].groupNumber;
    }
    AddStudent.onclick = function () {
        var prevFirstName = document.querySelector("#firstNameInput");
        var name = prevFirstName.value;
        var prevLastName = document.querySelector("#LastNameInput");
        var surname = prevLastName.value;
        var prevPatronym = document.querySelector("#patronymInput");
        var patronyme = prevPatronym.value;
        var prevSex = document.querySelector("#sexInput");
        var sex = prevSex.value;
        var prevBirthDate = document.querySelector("#birthDateInput");
        var birthDate = prevBirthDate.value;
        var prevBirthPlace = document.querySelector("#birthPlaceInput");
        var birthPlace = prevBirthPlace.value;
        var prevFamily = document.querySelector("#familyInput");
        var family = prevFamily.value;
        var prevHobby = document.querySelector("#hobbyInput");
        var hobby = prevHobby.value;
        var tickNum = genStudTick();
        var rating = 0;
        try {
            univers.groupsArr[groupeToWrite].createStudent(name, surname, patronyme, sex, birthDate, birthPlace, family, tickNum, hobby, rating);
            learningProcess();
            obshyagaIn(tickNum);
        }
        catch (err) {
            switch (err.status) {
                case "INCORECT_NAME":
                    alert(err.message);
                    break;
                case "INCORECT_SURNAME":
                    alert(err.message);
                    break;
                case "INCORECT_PATRONYME":
                    alert(err.message);
                    break;
                case "INCORECT_SEX_INPUT":
                    alert(err.message);
                    break;
                case "INCORECT_ BIRTH_DATE":
                    alert(err.message);
                    break;
                case "INCORECT_BIRTH_PLACE":
                    alert(err.message);
                    break;
                case "INCORECT_FAMILY_STATUS":
                    alert(err.message);
                    break;
                case "INCORECT_RATING":
                    alert(err.message);
                    break;
                case "INCORECT_TICKET_NUM":
                    alert(err.message);
                    break;
                case "INCORECT_HOBBY_INPUT":
                    alert(err.message);
                    break;
                default:
                    alert("UNKNOWN ERROR");
                    throw err;
            }
        }

        renew.clearTable();
        renew.tableWrite(univers.groupsArr, groupeToWrite);
        prevFirstName.value = "";
        prevLastName.value = "";
        prevPatronym.value = "";
        prevSex.value = "";
        prevBirthDate.value = "";
        prevBirthPlace.value = "";
        prevFamily.value = "";
        prevHobby.value = "";

    }

    tableToClick.onclick = function (elem) {

        let btnID = elem.target.className;
        let idArr = btnID.split("_");
        if (idArr[0] == "studBtnId") {

            univers.groupsArr[groupeToWrite].delStud(idArr[1]);
            renew.clearTable();
            renew.tableWrite(univers.groupsArr, groupeToWrite);

        }
    }

    var prevOlder = document.querySelector("#olderInput");

    set_older.onclick = function () {

        var olderId = prevOlder.value;
        var old = univers.groupsArr[groupeToWrite].setOlder(olderId);
        var older = univers.groupsArr[groupeToWrite].students[old];
        groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber + "\n" + "Older: " + older.name;

    }

    var prevY = document.querySelector("#max_rate");
    var out = document.querySelector(".inform_res");

    get_list.onclick = function () {
        var min = prevX.value;
        var max = prevY.value;
        var outstr = " ";
        var list = ratingXY(min, max);
        list.forEach(function (element) {
            outstr += `${element.name} ${element.surname}, `
        })
        out.innerHTML = outstr;
    }

    var prevRef = document.querySelector("#ref");
    get_refer.onclick = function () {
        ref = prevRef.value;
        var referer = scholarship(ref);
        out.innerHTML = `Student ${referer.name} ${referer.surname}  /  Rating: ${referer.rating}  /  Scholarship: ${referer.sholship}`
    }


}