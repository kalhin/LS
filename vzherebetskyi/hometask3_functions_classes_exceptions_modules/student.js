let listOfStudents = {};

function Student(surname, name) {    
    this.surname = surname;
    this.name = name;
    let books = {0: 'Книг немає!', amount: 0};
    
    //визначаємо номер "створеного" студента і присвоюємо йому номер студентського квитка
    //який має 7 цифр, наприклад 1 студент буде мати номер студентського квитка 0000001 
    
    Student.prototype.count += 1;
    let number = Student.prototype.count + '';
        while (number.length < 7) { number = '0' + number; };
    
    this.studentTicket = number;

    //-----------------------------------------------------------------------------------

    //-------------------Додаємо студента в список студентів-----------------------------
    
    listOfStudents[this.surname] = Student.prototype.count;

    //------------------------------------------------------------------------------------

    //-------------------------Додаємо студента в кімнату--------------------------------

    if (Student.prototype.rooms.length === 0 || Student.prototype.rooms[Student.prototype.rooms.length - 1].length === 3) { Student.prototype.rooms.push([this.surname]); }
    else Student.prototype.rooms[Student.prototype.rooms.length - 1].push(this.surname);
    this.roomNumber = Student.prototype.rooms.length;

    //-------------------------Додаємо студента в групу--------------------------------
    if (Student.prototype.groups.length === 0 || Student.prototype.groups[Student.prototype.groups.length - 1].length === 5) { Student.prototype.groups.push([this.surname]); }
    else Student.prototype.groups[Student.prototype.groups.length - 1].push(this.surname);
    this.groupNumber = Student.prototype.groups.length;

    //------------------------------------------------------------------------------------

    //-------------------------Додаємо студенту книгу--------------------------------
    if (library.amount !== 0) {
        books[0] = library[library.amount];
        books.amount += 1;

        delete library[library.amount];
        library.amount = library.amount - 1;
    };
    this.books = books;

    //------------------------------------------------------------------------------------


    return this;
}

Student.prototype = {
    constructor: Student,
    count: 0,
    rooms: [],
    groups: [],

    fatherName: undefined,
    birth: undefined,
    placeOfBirth: undefined,
    address: undefined,
    gender: undefined,
    familyStatus: undefined,
    hobbies: [],
    
    //отримання номеру студентського квитка

    getTicketNumber() { return "Номер студентського квитка " + this.studentTicket; },
    
    //встановлення та отримання імені по батькові
    
    setFatherName(fatherName) { this.fatherName = fatherName; },
    getFatherName() { return "Ім'я по батькові " + this.fatherName; },

    //-------------------------------------------

    //встановлення та отримання дати народження (вводиться в форматі рік, місяць, число), місця народження, адреси, статі
    
    setBirth(year, month, day) { let d = new Date(year, month - 1, day);
        this.birth = d.toDateString(); 
    },
    getBirth() { return "Датою народження студента є " + this.birth; },

    setBirthPlace(city) { this.placeOfBirth = city; },
    getBirthPlace() { return "Місце народження " + this.placeOfBirth; },

    setAdress(address) { this.address = address; },
    getAddress() { return "місце проживання студента " + this.address; },

    setGender(x) { (x === "M" || x === "F") ? this.gender = x : console.log("Не вірно вказана стать!") },
    getGender() { return "Стать студента " + this.gender },
    
    // для сімейного статусу вказується або 'single' або 'married'
    
    setFamilyStatus(x) { (x === "single" || x === "married") ? this.familyStatus = x : console.log("Не вірно вказаний сімейний статус!") },
    getFamilyStatus() { return "Сімейний статус студента " + this.familyStatus},
    
    //-------------------------------------------

    //------------------------Метод щодо кімнати-----------------------------
    
    getRoomNumber() { return "Номер кімнати студента: " + this.roomNumber;},
    
    //-----------------------------------------------------------------------

    //------------------------Метод щодо хоббі-----------------------------
    
    getHobbies() {
        if (this.hobbies.length === 0) 
        { return "У даного студента хоббі відсутні!";} 
        else { return "Хоббі даного студента: " + this.hobbies; }; 
    },
    setHobbies(hobby) { this.hobbies = this.hobbies.concat(hobby); },
    
    //-----------------------------------------------------------------------
    getGroups() {
        let i = 0;
        let head;
        while ( i < this.groups.length) {
            head = this.groups[i][Math.floor(Math.random() * this.groups[i].length)]
            console.log((i + 1) + ' група складається з ' + this.groups[i] + '. Староста групи ' + head);
            i++;
        };
    },

    setBook(book) {
        let priceSum = 0;
    
        for (let i in this.books) {
         if (this.books[i]["price"]) {
            priceSum += this.books[i]["price"];
            };
        };

        for (let i in book) {
            if (book["price"]) {
               priceSum += book["price"];
               };
        };
        
        if (priceSum > 100) { return console.log('Сумарна вартість книг перевищує допустиме значення!'); }
        else {
            if (this.books.amount === 0) {
                this.books[0] = book;
                this.books.amount += 1;
            }
             else {
                this.books[this.books.amount] = book;
                this.books.amount += 1;
             };  
        };
    }
};

function setSubjectsAndMarks() {
    for (let i in listOfStudents) {
        listOfStudents[i] = new Grades(i);
    };
}

function Grades(surname) {
    this.surname = surname;
    let marks = {};

    //----------------------Оцінки------------------------

    for(let i in Grades.prototype.subjects) {
        marks[i] = 100 - Math.floor(Math.random() * 40);
    };
    this.subjects = marks;

    //-----------------------------------------------------
    
    //-----------------Середній бал----------------------
    
    let averageMark = 0;
    for (let i in this.subjects)
    {
        averageMark += this.subjects[i];
    }
    this.average = averageMark / 5;

    //---------------------------------------------------

    return this;
}

Grades.prototype = {
    constructor: Grades,
    subjects: { "Математичний аналіз": undefined, "Хімія": undefined, "Фізика": undefined, "Біологія": undefined, "Астрономія": undefined },
    scholarship: undefined,
    
    //-----------------------------Виведення на екран всіх оцінок--------------------------------

    getMarks() { console.log('\n' + 'Атестат ' + this.surname + ' виглядає так:'); for (let i in this.subjects) { console.log('З дисципліни ' + i + ' набрано наступну кількість балів: ' + this.subjects[i]); }; },

    //-----------------Метод getRating() та інші методи нижче може запускатися лише після функції setSubjectsAndMarks(), оскільки в ній визначаються оцінки студентів
    //та їх середній бал
    getRating() 
    { 
        let studentsSorted = Object.keys(listOfStudents).sort(function(a,b) { return listOfStudents[a].average - listOfStudents[b].average; }).reverse().map(function(object, key) { 
        if (key === 0 || key === 1 || key === 2) 
        { listOfStudents[object].scholarship = '3500 UAH'; }
        else if (key === 3 || key === 4) 
        { listOfStudents[object].scholarship = '2500 UAH'; }
        else listOfStudents[object].scholarship = 'Стипендія відсутня!';
        return listOfStudents[object].surname + ' має наступний середній бал ' + listOfStudents[object].average + ' і його/її стипендія становить ' + listOfStudents[object].scholarship + '. Його місце в рейтингу є №' + (key + 1) + '.' }
        );
        
        return studentsSorted;
    },

    getRange(a, b) {
        let studentsSorted = Object.keys(listOfStudents).sort(function(a,b) { return listOfStudents[a].average - listOfStudents[b].average; }).reverse().map(function(object, key) { 
            return listOfStudents[object].surname + ' має наступний середній бал ' + listOfStudents[object].average + '. Його місце в рейтингу є №' + (key + 1) + '.' }
            ).slice(a - 1, b);
        
        return studentsSorted;
    },

    getRateAndScholar(surname) {
        let i = undefined;
        let studentsSorted = Object.keys(listOfStudents).sort(function(a,b) { return listOfStudents[a].average - listOfStudents[b].average; }).reverse().map(function(object, key) { if (listOfStudents[object].surname === surname) { i = key; };
            return listOfStudents[object].surname + ' має наступний середній бал ' + listOfStudents[object].average + '. Його місце в рейтингу є №' + (key + 1) + '.' }
            );
        
        return studentsSorted[i];
    }
};

let library = {
    1: {"author": "Serge Lang", "title": "Calculus of Several Variables", "genre": "Education", "price": 0},
    2: {"author": "Frank Herbert", "title": "Dune", "genre": "Science Fiction", "price": 50},
    3: {"author": "Alan Moore", "title": "Watchmen", "genre": "Comic Book", "price": 20},
    4: {"author": "Bradley W. Carroll", "title": "An Introduction to Modern Astrophysics", "genre": "Science", "price": 50},
    5: {"author": "Rod Stephens", "title": "Essential Algorithms", "genre": "Education", "price": 25},
    amount: 5
}

let student1 = new Student('Ivanov', 'Volodymyr');
// let student2 = new Student("Doe", "John");
// let student3 = new Student("De Niro", "Robert");
// let student4 = new Student("Depo", "John");
// let student5 = new Student("Deppa", "Johnan");
// let student6 = new Student("Pikk", "Bradd");
// let student7 = new Student("Badee", "Angelina");
// let student8 = new Student("Dousta", "Michael");
// let student9 = new Student("Bardero", "Xavier");
// let student10 = new Student("Murdock", "Matt");
// let student11 = new Student("Banner", "Bruce");
// let student12 = new Student("Parker", "Peter");
// console.log(student1.books);
// console.log(student2.books);
// console.log(student3.books);
// console.log(student4.books);
// console.log(student5.books);
// console.log(student6.books);
// console.log(library);
// student6.setBook({"author": "test1", "title": "test2"});
// student1.setBook({"author": "test3", "title": "test4"});
// student1.setBook({"author": "test7", "title": "test8", "price": 100});
// console.log(student1.books);
// console.log(student2.books);
// console.log(student6.books);
// setSubjectsAndMarks();
// listOfStudents['Ivanov'].getMarks();
// listOfStudents['Depp'].getMarks();
// console.log(listOfStudents['Ivanov']);
// console.log(listOfStudents['Jolie']);
// console.log(Grades.prototype.getRating());
// console.log(Grades.prototype.getRange(2,4));
// console.log(rating.getRateAndScholar("Pitt"));
// console.log(Student.prototype.getGroups());
// console.log(student7.getHobbies());
// student7.setHobbies('Cinema');
// console.log(student6.getHobbies());
// console.log(student1.studentTicket);
// console.log(student2.studentTicket);
// console.log(student1.getBirth());
// student1.setBirth(1991, 9, 28);
// console.log(student1.getBirth());
// console.log(student1.getGender());
// console.log(student5.getRoomNumber());