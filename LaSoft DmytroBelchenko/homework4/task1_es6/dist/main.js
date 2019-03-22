"use strict";

window.onload = function () {
  /////////////////////////////////////////////////INITS/////////////////////////////////////////
  var renew = new ReTable();
  var univers = new AllGroups();
  var hostel = new Hostel();
  var libruary = new Libruary();
  var addGrpBtn = document.querySelector(' #wrapper #add_group');
  var delGrpBtn = document.querySelector("#wrapper #delete_group");
  var selected = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");
  var tableToClick = document.querySelector("#wrapper .studentsTable");
  var groupeToWrite = 0;
  var bc = 0;
  var groupeIndex = document.querySelector("#wrapper .id_out");
  var prevOlder = document.querySelector("#olderInput");
  var prevX = document.querySelector("#min_rate");
  var prevY = document.querySelector("#max_rate");
  var out = document.querySelector(".inform_res");
  var prevRef = document.querySelector("#ref");
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
  hostel.createRoom(); ////////////////////////////////////////////////////////////RUN FUNCTIONS//////////////////////////////////////////////////////////////////

  var learningProcess = function learningProcess() {
    univers.groupsArr.forEach(function (el) {
      var coeff = 0;

      for (var key in el.lessonTicher) {
        coeff += el.lessonTicher[key].length;
      }

      el.students.forEach(function (st) {
        st.rating = Math.round(coeff * Math.random()) / 10;
      });
    });
  };

  var createSubj = function createSubj() {
    var subjs = [["math", "orlinsky"], ["liter", "pushkin"], ["phisics", "nuton"], ["chem", "mendeleev"], ["phiscult", "bubka"]];
    var rand = 0 + Math.random() * 5;
    rand = Math.floor(rand);
    return subjs[rand];
  }; // TODO: Rewrite this method


  var obshyagaIn = function obshyagaIn(studId) {
    var full = hostel.rooms[hostel.rooms.length - 1].setResident(studId);

    if (full === "full") {
      hostel.createRoom();
      hostel.rooms[hostel.rooms.length - 1].setResident(studId);
      full = null;
    }
  };

  var scholarship = function scholarship(studId) {
    var stud = null;

    for (var s = 0; s < univers.groupsArr.length; s++) {
      stud = univers.groupsArr[s].students.find(function (el) {
        return el.studTickNum == studId;
      });

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
  };

  var ratingXY = function ratingXY(x, y) {
    var ex = [];

    for (var p = 0; p < univers.groupsArr.length; p++) {
      univers.groupsArr[p].students.forEach(function (el) {
        if (el.rating >= x && el.rating <= y) {
          ex.push(el);
        }
      });
    }

    return ex;
  };

  var genStudTick = function genStudTick() {
    return Math.floor(Math.random() * 10000);
  };

  univers.addGroup();

  for (var temp = 0; temp <= 4; temp++) {
    var prep = createSubj();
    univers.groupsArr[groupeToWrite].addSubj(prep[0], prep[1]);
  }

  renew.optionsWrite(univers.groupsArr);
  groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;

  var booksToStudents = function booksToStudents() {
    libruary.readers.forEach(function (elem, i) {
      var year = 2017;
      var giv = libruary.bookToRent(bc, i, "".concat(year + 1, ".10.05"));

      if (giv !== "n/a" && bc < libruary.books.length) {
        bc++;
      } else {
        bc = 0;
      }
    });
  }; /////////////////////////////////////////////////HANDLING///////////////////////////////////////////////////


  selected.onclick = function (elem) {
    groupeToWrite = elem.target.selectedIndex;
    renew.clearTable();
    renew.tableWrite(univers.groupsArr, groupeToWrite);
    groupeIndex.innerHTML = "";
    groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber;
  };

  addGrpBtn.onclick = function () {
    var grpN = document.querySelector("#wrapper #grpIdInput");
    var enter = grpN.value;
    univers.addGroup(enter);
    grpN.value = "";
    renew.clearOption();
    renew.optionsWrite(univers.groupsArr);
  };

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
  };

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
      univers.groupsArr[groupeToWrite].createStudent(name, surname, patronyme, tickNum, birthDate, birthPlace, family, sex, hobby, rating);
      learningProcess();
      libruary.addReader(name, surname, patronyme, tickNum, univers.groupsArr);
      obshyagaIn(tickNum);
      console.log(hostel);
      console.log(libruary);
    } catch (err) {
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
  };

  tableToClick.onclick = function (elem) {
    var btnID = elem.target.className;
    var idArr = btnID.split("_");

    if (idArr[0] == "studBtnId") {
      univers.groupsArr[groupeToWrite].delStud(idArr[1]);
      renew.clearTable();
      renew.tableWrite(univers.groupsArr, groupeToWrite);
    }
  };

  set_older.onclick = function () {
    var olderId = prevOlder.value;
    var old = null;

    try {
      old = univers.groupsArr[groupeToWrite].setOlder(olderId);
    } catch (err) {
      if (err.status === "INVALID_OLDER_ID") {
        alert(err.mesage);
      } else {
        alert("UNKNOWN ERROR");
        throw err;
      }
    }

    var older = univers.groupsArr[groupeToWrite].students[old];
    groupeIndex.innerHTML = "GroupeID: " + univers.groupsArr[groupeToWrite].groupNumber + "\n" + "Older: " + older.name;
  };

  get_list.onclick = function () {
    var min = prevX.value;
    var max = prevY.value;
    var outstr = " ";
    var list = ratingXY(min, max);
    list.forEach(function (element) {
      outstr += "".concat(element.name, "  ").concat(element.surname, ", ");
    });
    out.innerHTML = "";
    out.innerHTML = outstr;
  };

  get_refer.onclick = function () {
    var ref = prevRef.value;
    var referer = scholarship(ref);
    out.innerHTML = "Student ".concat(referer.name, " ").concat(referer.surname, "  /  Rating: ").concat(referer.rating, "  /  Scholarship: ").concat(referer.sholship);
  };

  lib_debt.onclick = function () {
    booksToStudents();
    var data = Date.now();
    var debts = [];
    libruary.readers.forEach(function (element) {
      for (var hr = 0; hr < element.readingBooks.length; hr++) {
        var preData = element.readingBooks[hr].status;
        var er = Date.parse(preData); //  debugger;

        if (data - er < 31536000000) {
          debts.push(element);
        }
      }
    });
    var outer = "";
    debts.forEach(function (element) {
      var summ = element.givBooksPrice();
      outer += "".concat(element.surname, " <em>ID:</em> ").concat(element.studTickNum, " <em>DEBT:</em> ").concat(summ, " c/i / ");
    });
    out.innerHTML = " ";
    out.innerHTML = outer;
  };
};