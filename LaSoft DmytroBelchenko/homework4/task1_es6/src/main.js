window.onload = () => {

/////////////////////////////////////////////////INITS/////////////////////////////////////////

    let renew = new ReTable();
    let univers = new AllGroups();
    let hostel = new Hostel();
    let libruary = new Libruary();
    let addGrpBtn = document.querySelector(' #wrapper #add_group');
    let delGrpBtn = document.querySelector("#wrapper #delete_group");
    let selected = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");
    let tableToClick = document.querySelector("#wrapper .studentsTable");
    let groupeToWrite = 0;
    let bc = 0;
    let groupeIndex = document.querySelector("#wrapper .id_out");
    const prevOlder = document.querySelector("#olderInput");
    const prevX = document.querySelector("#min_rate");
    const prevY = document.querySelector("#max_rate");
    const out = document.querySelector(".inform_res");
    const prevRef = document.querySelector("#ref");

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


////////////////////////////////////////////////////////////RUN FUNCTIONS//////////////////////////////////////////////////////////////////
 
let learningProcess = () => {
        univers.groupsArr.forEach((el) => {
            let coeff = 0;
            for (let key in el.lessonTicher) {
                coeff += el.lessonTicher[key].length;
            }
            el.students.forEach((st) => {
                st.rating = Math.round(coeff * (Math.random())) / 10;
            })
        });
    }
    let createSubj = () => {
        const subjs = [
            ["math", "orlinsky"],
            ["liter", "pushkin"],
            ["phisics", "nuton"],
            ["chem", "mendeleev"],
            ["phiscult", "bubka"]
        ]
        let rand = 0 + Math.random() * 5;
        rand = Math.floor(rand);
        return subjs[rand];
    }

    // TODO: Rewrite this method
    let obshyagaIn = (studId) => {
        let full = hostel.rooms[hostel.rooms.length - 1].setResident(studId);
        if (full === "full") {
            hostel.createRoom();
            hostel.rooms[hostel.rooms.length - 1].setResident(studId);
            full = null;
        }

    }

    let scholarship = (studId) => {
        let stud = null;
        for (let s = 0; s < univers.groupsArr.length; s++) {
            stud = univers.groupsArr[s].students.find((el) => {
                return el.studTickNum == studId;
            })
            if (stud) {
                break;
            }
        }
       
        if (!stud) {
            let err = new Error("INVALID ID");
            err.status = "SEARCH_ERR";
            throw err;
        }
        stud.sholship = Math.round(500 * stud.rating);
        return stud;
    }
    let ratingXY = (x, y) => {
        let ex = [];
        for (let p = 0; p < univers.groupsArr.length; p++) {
            univers.groupsArr[p].students.forEach((el) => {

                if ((el.rating >= x) && (el.rating <= y)) {

                    ex.push(el);
                }
            })

        }
        return ex;
    }
    let genStudTick = () => {
        return Math.floor(Math.random() * 10000);
    }

    univers.addGroup();
    for (let temp = 0; temp <= 4; temp++) {
        let prep = createSubj();
        univers.groupsArr[groupeToWrite].addSubj(prep[0], prep[1]);
    }
    renew.optionsWrite(univers.groupsArr);
    groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;

    let booksToStudents = () => {
        libruary.readers.forEach(function (elem, i) {
            let year = 2017;
            let giv = libruary.bookToRent(bc, i, `${year + 1}.10.05`);
            if (giv !== "n/a" && bc < libruary.books.length) {
                bc++;
            }
            else {
                bc = 0;
            }
        })
    }
/////////////////////////////////////////////////HANDLING///////////////////////////////////////////////////
    selected.onclick = (elem) => {
        groupeToWrite = elem.target.selectedIndex;
        renew.clearTable();
        renew.tableWrite(univers.groupsArr, groupeToWrite);
        groupeIndex.innerHTML = "";
        groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;
    }

    addGrpBtn.onclick = () => {
        const grpN = document.querySelector("#wrapper #grpIdInput");
        let enter = grpN.value;
        univers.addGroup(enter);
        grpN.value = "";
        renew.clearOption();
        renew.optionsWrite(univers.groupsArr);
    }

    delGrpBtn.onclick = () => {
        let delIndex = groupeToWrite;
        univers.delGroup(delIndex);
        renew.clearOption();
        renew.optionsWrite(univers.groupsArr);
        renew.clearTable();
        groupeToWrite = 0;
        renew.tableWrite(univers.groupsArr, groupeToWrite);
        groupeIndex.innerHTML = "";
        groupeIndex.innerHTML = "GroupeID №: " + univers.groupsArr[groupeToWrite].groupNumber;
    }
    AddStudent.onclick = () => {
        const prevFirstName = document.querySelector("#firstNameInput");
        let name = prevFirstName.value;
        const prevLastName = document.querySelector("#LastNameInput");
        let surname = prevLastName.value;
        const prevPatronym = document.querySelector("#patronymInput");
        let patronyme = prevPatronym.value;
        const prevSex = document.querySelector("#sexInput");
        let sex = prevSex.value;
        const prevBirthDate = document.querySelector("#birthDateInput");
        let birthDate = prevBirthDate.value;
        const prevBirthPlace = document.querySelector("#birthPlaceInput");
        let birthPlace = prevBirthPlace.value;
        const prevFamily = document.querySelector("#familyInput");
        let family = prevFamily.value;
        const prevHobby = document.querySelector("#hobbyInput");
        let hobby = prevHobby.value;
        let tickNum = genStudTick();
        let rating = 0;
        try {
            univers.groupsArr[groupeToWrite].createStudent(name, surname, patronyme, tickNum, birthDate, birthPlace, family, sex, hobby, rating);
            learningProcess();
            libruary.addReader(name, surname, patronyme, tickNum, univers.groupsArr)
            obshyagaIn(tickNum);
            console.log(hostel);
            console.log(libruary);
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

    tableToClick.onclick = (elem) => {

        let btnID = elem.target.className;
        let idArr = btnID.split("_");
        if (idArr[0] == "studBtnId") {

            univers.groupsArr[groupeToWrite].delStud(idArr[1]);
            renew.clearTable();
            renew.tableWrite(univers.groupsArr, groupeToWrite);

        }
    }


    set_older.onclick = () => {

        let olderId = prevOlder.value;
        let old = null;
        try {
             old = univers.groupsArr[groupeToWrite].setOlder(olderId);
        }
        catch (err) {
            if (err.status === "INVALID_OLDER_ID") {
                alert(err.mesage);
            }
            else {
                alert("UNKNOWN ERROR");
                throw err;
            }
        }
        let older = univers.groupsArr[groupeToWrite].students[old];
        groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber + "\n" + "Older: " + older.name;

    }

    get_list.onclick = () => {
        let min = prevX.value;
        let max = prevY.value;
        let outstr = " ";
        let list = ratingXY(min, max);
        list.forEach((element) => {
            outstr += `${element.name}  ${element.surname}, `
        })
        out.innerHTML = "";
        out.innerHTML = outstr;
    }


    get_refer.onclick = () => {
        let ref = prevRef.value;
        let referer = scholarship(ref);
        out.innerHTML = `Student ${referer.name} ${referer.surname}  /  Rating: ${referer.rating}  /  Scholarship: ${referer.sholship}`
    }


    lib_debt.onclick = () => {
        booksToStudents();
        let data = Date.now();
        let debts = [];
        libruary.readers.forEach((element) => {
            for (let hr = 0; hr < element.readingBooks.length; hr++) {
                let preData = element.readingBooks[hr].status;
                let er = Date.parse(preData);
                //  debugger;
                if (data - er < 31536000000) {
                    debts.push(element);
                }
            }
        })
        let outer = "";
        debts.forEach((element) => {
            let summ = element.givBooksPrice();
            outer += `${element.surname} <em>ID:</em> ${element.studTickNum} <em>DEBT:</em> ${summ} c/i / `
        })
        out.innerHTML = " ";
        out.innerHTML = outer;
    }

}