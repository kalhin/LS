"use strict";

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
hostel.createRoom();

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
};