class Group {
    constructor(numberOfGroups, numberOfStudents) {
    let k = numberOfGroups;
    let j;

    while ( k > 0 ) {
        let i = numberOfStudents;
        let headGr = Math.floor(Math.random() * i) + 1;
            while ( i > 0 ) {
            let surnNumber = Math.floor(Math.random() * studSurnames.length);
            let namNumber = Math.floor(Math.random() * studNames.length);
                if (Group.groups === undefined) {
                    j = 1;
                    Group.groups = {};

                    Group.groups[j] = {}; 
                };

                let lastGroup = Object.keys(Group.groups).length;
                Group.groups[lastGroup][i] = new Student(studNames[namNumber], studSurnames[surnNumber]);
                Group.groups[lastGroup][i].marks = new Grades();

                if (i === headGr) {
                    Group.groups[lastGroup][i].headOfGroup = true;
                    Group.groups[lastGroup].headOfGroup = Group.groups[lastGroup][i].surname;
                };

                i--;
                if ( i === 0 && k !== 1) {
                    j = Object.keys(Group.groups).length + 1;
                    Group.groups[j] = {};
                };
            };
            k--;
    }

    console.log(Group.groups);
};
 //отримання номеру студентського квитка

 getTicketNumber(groupNumber, studentNumber) { return `Номер студентського квитка  ${Group.groups[groupNumber][studentNumber].studentTicket}`; }

 //встановлення та отримання імені по батькові
 
 setFatherName(fatherName, groupNumber, studentNumber) { Group.groups[groupNumber][studentNumber].fatherName = fatherName; }
 getFatherName(groupNumber, studentNumber) { return `Ім'я по батькові  ${Group.groups[groupNumber][studentNumber].fatherName}`; }

 //встановлення та отримання дати народження (вводиться в форматі рік, місяць, число), місця народження, адреси, статі
 
 setBirth(groupNumber, studentNumber, year, month, day) { let d = new Date(year, month - 1, day);
    Group.groups[groupNumber][studentNumber].birth = d.toDateString(); 
 }
 getBirth(groupNumber, studentNumber) { return `Датою народження студента є ${Group.groups[groupNumber][studentNumber].birth}.`; }

 setBirthPlace(groupNumber, studentNumber, city) { Group.groups[groupNumber][studentNumber].placeOfBirth = city; }
 getBirthPlace(groupNumber, studentNumber) { return `Місце народження  ${Group.groups[groupNumber][studentNumber].placeOfBirth}.`; }

 setAdress(groupNumber, studentNumber,address) { Group.groups[groupNumber][studentNumber].address = address; }
 getAddress(groupNumber, studentNumber) { return `місце проживання студента ${Group.groups[groupNumber][studentNumber].address}.`; }

 setGender(groupNumber, studentNumber, x) { (x === "M" || x === "F") ? Group.groups[groupNumber][studentNumber].gender = x : console.log("Не вірно вказана стать!"); }
 getGender(groupNumber, studentNumber) { return `Стать студента ${Group.groups[groupNumber][studentNumber].gender}.`; }

  // для сімейного статусу вказується або 'single' або 'married'
 
  setFamilyStatus(groupNumber, studentNumber, x) { (x === "single" || x === "married") ? Group.groups[groupNumber][studentNumber].familyStatus = x : console.log("Не вірно вказаний сімейний статус!") }
  getFamilyStatus(groupNumber, studentNumber) { return `Сімейний статус студента ${Group.groups[groupNumber][studentNumber].familyStatus}.`; }

  //------------------------Метод щодо кімнати-----------------------------
  
  getRoomNumber(groupNumber, studentNumber) { return `Номер кімнати студента: ${Group.groups[groupNumber][studentNumber].roomNumber}.`;}

  //------------------------Метод щодо хоббі-----------------------------
  
  getHobbies(groupNumber, studentNumber) {
      if (Group.groups[groupNumber][studentNumber].hobbies.length === 0) 
      { return "У даного студента хоббі відсутні!";} 
      else { return `Хоббі даного студента:  ${Group.groups[groupNumber][studentNumber].hobbies}.`; }; 
  }
  setHobbies(groupNumber, studentNumber, hobby) { Group.groups[groupNumber][studentNumber].hobbies = Group.groups[groupNumber][studentNumber].hobbies.concat(hobby); }
  
  //-----------------------------------------------------------------------

  setBook(groupNumber, studentNumber, book) {
     let priceSum = 0;
 
     for (let i in Group.groups[groupNumber][studentNumber].books) {
      if (Group.groups[groupNumber][studentNumber].books[i]["price"]) {
         priceSum += Group.groups[groupNumber][studentNumber].books[i]["price"];
         };
     };

     for (let i in book) {
         if (book["price"]) {
            priceSum += book["price"];
            };
     };
     
     if (priceSum > 100) { return console.log('Сумарна вартість книг перевищує допустиме значення!'); }
     else {
         if (Group.groups[groupNumber][studentNumber].books.amount === 0) {
             Group.groups[groupNumber][studentNumber].books[0] = book;
             Group.groups[groupNumber][studentNumber].books.amount += 1;
         }
          else {
            Group.groups[groupNumber][studentNumber].books[Group.groups[groupNumber][studentNumber].books.amount] = book;
            Group.groups[groupNumber][studentNumber].books.amount += 1;
          };  
     };
 }

 //-----------------------------Виведення на екран всіх оцінок--------------------------------

 getMarks(groupNumber, studentNumber) { console.log(`\n Атестат ${Group.groups[groupNumber][studentNumber].surname} виглядає так:`); for (let i in Group.groups[groupNumber][studentNumber].marks.subjects) { console.log(`З дисципліни ${i} набрано наступну кількість балів: ${Group.groups[groupNumber][studentNumber].marks.subjects[i]}.`); }; }

 //-----------------Метод getRating() та інші методи нижче може запускатися лише після функції setSubjectsAndMarks(), оскільки в ній визначаються оцінки студентів
 //та їх середній бал
 static getRating() 
 { 
     let studentsSorted = [];
     for (let i in Group.groups) {
         for(let j in Group.groups[i]) {
            Group.groups[i][j] !== Group.groups[i].headOfGroup ? studentsSorted = studentsSorted.concat(Group.groups[i][j]) : studentsSorted;
         };
     };

     studentsSorted.sort((a,b) => a.marks.average - b.marks.average).reverse().map(function(object, key) { 
     if (key === 0 || key === 1 || key === 2) 
     { object.marks.scholarship = '3500 UAH'; }
     else if (key === 3 || key === 4) 
     { object.marks.scholarship = '2500 UAH'; }
     else object.marks.scholarship = 'Стипендія відсутня!';
     
     console.log(`${object.surname} має наступний середній бал ${object.marks.average} і його/її стипендія становить ${object.marks.scholarship}. Його місце в рейтингу є № ${(key + 1)}.`); }
     );

     return studentsSorted;
 }

 static getRange(a, b) {
     let studentsSorted = [];
     for (let i in Group.groups) {
         for(let j in Group.groups[i]) {
            Group.groups[i][j] !== Group.groups[i].headOfGroup ? studentsSorted = studentsSorted.concat(Group.groups[i][j]) : studentsSorted;
         };
     };

     let answer = studentsSorted.sort((a,b) => a.marks.average - b.marks.average).reverse().map((object, key) => 
         `${object.surname} має наступний середній бал ${object.marks.average}. Його місце в рейтингу є № ${(key + 1)}.`
         ).slice(a - 1, b);
     
     return answer;
 }

}

Group.groups = undefined;