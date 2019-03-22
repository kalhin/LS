
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
        hostel.createRoom()
        full = null;
    }

}

let scholarship = (studId) => {
    let stud = null;
    for (let s = 0; s < univers.groupsArr.length; s++) {
        stud = univers.groupsArr[s].students.find(function (el) {
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
