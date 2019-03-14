//input students number
let studentNumber;
do {
    studentNumber = parseInt(prompt('Enter amount of students'));
} while (isNaN(studentNumber) === true || studentNumber === 0);

//set of atributes
const studentsAtributes = {
    surName: ['Lapa', 'Gak', 'Manunia', 'Kit', 'Topirets', 'Dzmil', 'Smih', 'Salo', 'Pes', 'Kalich'],
    nameMale: ['Dmitro', 'John', 'Petro', 'Simon', 'Andriy', 'Roman', 'John', 'Micle'],
    nameFemale: ['Sara', 'Oksana', 'Diana', 'Iryna', 'Svitlana', 'Clara', 'Tina', 'Marina'],
    patronumic: ['Valeriy', 'Micolay', 'Stepan', 'Oleg', 'Nestor', 'Petr', 'Andriy', 'Roman', 'Vctor'],
    birthYear: [2005, 2006, 2007],
    birthPlace: ['Lviv', 'Ternopil', 'Lutsk', 'Ivano-Frankivsk', 'Khmelnitsky', 'Uzhorod', 'Kiev', 'Zhitomir', 'Vinitsa'],
    adress: ['Shevchenka', 'Gorodotska', 'Ivana-Franka', 'Zamarstynivska', 'Mikoly Hvilovogo', 'Gogolya', 'Serednia', 'Peremogy'],
    hobby: ['running', 'swimming', 'none', 'painting', 'reading', 'none', 'none', 'cycling']
};

//patronumic, sex, matrialStatus, cholarship - choice 
const anotherAtributes = {
    patronumic: null,
    sex: null,
    matrialStatus: null,
}

function anotherAtributesChoicer(arrMale, arrFemale, arrPatronumic) {
    function rundomNum() {
        return Math.floor(Math.random() * 10);
    }
    if (rundomNum() % 2 === 0) {
        anotherAtributes.patronumic = generator(arrPatronumic) + 'ovich';
        anotherAtributes.sex = 'male';
        return generator(arrMale);
    } else {
        anotherAtributes.patronumic = generator(arrPatronumic) + 'ivna';
        anotherAtributes.sex = 'female';
        return generator(arrFemale);
    }
};

//studentTicketNumber generator
function studentTicketNumberGenerator() {
    return arr[Math.floor(Math.random() * arr.length)];
}
//generator of random atributes
function generator(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//student class constructor
const students = {
    Student: function(surname, name, patronumic, birthYear, birthPlace, adress, hobby, studentTicketNumber, sex) {
        this.surname = surname;
        this.name = name;
        this.patronumic = patronumic;
        this.birthYear = birthYear;
        this.birthPlace = birthPlace;
        this.adress = adress;
        this.hobby = hobby;
        this.studentTicketNumber = studentTicketNumber;
        this.sex = sex;
        this.matrialStatus = 'not married';
    },
    studentsList: [],
    addStudents: function() {
        for (let i = 0; i < studentNumber; i++) {
            const student = new this.Student(generator(studentsAtributes.surName), anotherAtributesChoicer(studentsAtributes.nameMale, studentsAtributes.nameFemale,
                    studentsAtributes.patronumic), anotherAtributes.patronumic, generator(studentsAtributes.birthYear),
                generator(studentsAtributes.birthPlace), generator(studentsAtributes.adress), generator(studentsAtributes.hobby), i + 1,
                anotherAtributes.sex);

            students.studentsList.push(student);
        };
    }
};
students.addStudents();
console.log(students.studentsList);

//group class constructor
const groups = {
    Group: function() {
        this.groupNumber = null;
        this.addStudents = [];
    },
    groupList: [],
    addStudToGroups: function() {
        let count = 1;
        let group;
        for (let i = 0; i < students.studentsList.length; i++) {
            if (i % 15 === 0) {
                group = new this.Group;
                group.groupNumber = count;
                group.addStudents.push(students.studentsList[i])
                this.groupList.push(group)
                count++
            } else {
                group.addStudents.push(students.studentsList[i])
            }
        };
    },
    addGroupLeader: function(arr) {
        const rundomNum = Math.floor(Math.random() * arr.length);
        arr[rundomNum].groupLeader = 'groupLeader';
    },
    printGroupList: function() {
        this.addStudToGroups().forEach(function(gr) {
            console.log(`group №${gr.groupNumber}`);
            console.log(gr.addStudents);
        });
    }
};
groups.addStudToGroups();
groups.groupList.forEach(function(el) {
    groups.addGroupLeader(el.addStudents);
});

groups.groupList.forEach(function(el) {
    console.log('group №' + el.groupNumber + ':');
    el.addStudents.forEach(function(elem) {
        console.log(elem.surname + ' ' + elem.name + ' ' + elem.patronumic + isGroupLeader(elem.groupLeader));
    });
});

function isGroupLeader(str) {
    if (str === 'groupLeader') {
        return ' - group leader'
    } else {
        return ''
    }
}
console.log('*****************************************************')


// room division
const rooms = {
    addStudentToRoom: function() {
        const maleBlock = [];
        const femaleBlock = [];
        for (let i = 0; i < students.studentsList.length; i++) {
            if (students.studentsList[i].sex === 'male') {
                maleBlock.push(students.studentsList[i]);
            } else {
                femaleBlock.push(students.studentsList[i]);
            }
        };
        const roomList = [];
        let room = [];

        function division(arr) {
            if (arr.length <= 3) {
                roomList.push(arr);
            } else {
                for (let i = 0; i < arr.length; i++) {
                    if (room.length < 3) {
                        room.push(arr[i]);
                    } else {
                        roomList.push(room);
                        room = [];
                        room.push(arr[i]);
                    }
                }
                if (room.length > 0) {
                    roomList.push(room);
                    room = [];
                }
            }
        };
        division(maleBlock);
        division(femaleBlock);
        return roomList;
    }
};
// rooms.addStudentToRoom();
// rooms.addStudentToRoom().forEach(function(el, i) {
//     console.log('room №' + (i + 1));
//     el.forEach(function(elem) {
//         console.log(elem.surname + ' ' + elem.name + ' ' + elem.patronumic);
//     });
// });


// subjects, marks and cholarchip
const subjectsAndMarks = {
    SubAndMark: function() {
        this.maths = Math.floor(Math.random() * 6);
        this.physics = Math.floor(Math.random() * 6);
        this.drawing = Math.floor(Math.random() * 6);
        this.English = Math.floor(Math.random() * 6);
        this.philosophy = Math.floor(Math.random() * 6);
    },
    studentsMarksList: [],
    addMarksToStudents: function(arr) {
        let studentMarks = [];
        let markArr = [];
        arr.forEach(function(el) {
            const sam = new subjectsAndMarks.SubAndMark;
            for (mark in sam) {
                markArr.push(sam[mark]);
            }
            const middleMark = (markArr.reduce(function(acum, el) {
                return acum + el;
            }) / markArr.length);
            studentMarks.push(el.studentTicketNumber, el.surname, el.name, el.patronumic, sam, middleMark);
            subjectsAndMarks.studentsMarksList.push(studentMarks);
            studentMarks = [];
            markArr = [];
        });
    }
};
subjectsAndMarks.addMarksToStudents(students.studentsList);
// subjectsAndMarks.studentsMarksList.forEach(function(el) {
//     console.log(`student ticket number №'${el[0]}
//     student: ${el[1]} ${el[2]} ${el[3]}
//     marks: ${el[4].maths},${el[4].physics},${el[4].drawing},${el[4].English},${el[4].philosophy}
//     middle mark: ${el[5]}
//     cholarship: ${el[6]}`);
// });

//library
const booksAtributes = {
    counter: 1000,
    number: function() {
        return this.counter++;
    },
    bookAuthor: 'some author',
    bookTitle: 'SOME TITLE',
    genre: ['Memoir', 'Biography', 'Musical', 'Satire', 'Haiku', 'Horror',
        'Dictionary', 'Fantasy', 'Westerns', 'Romance', 'Thriller', 'Mystery',
        'Detective', 'Dystopia'
    ],
    bookPrise: function() {
        return Math.floor(Math.random() * 100);
    }
};

const library = {
    Books: function(number, bookAuthor, bookTitle, genre, bookPrise) {
        this.number = number;
        this.bookAuthor = bookAuthor;
        this.bookTitle = bookTitle;
        this.genre = genre;
        this.bookPrise = bookPrise;
        this.bookStatus = 'true';
    },
    booksList: [],
    bookCreator: function() {
        for (let i = 0; i < studentNumber * 3; i++) {
            const book = new library.Books(booksAtributes.number(), booksAtributes.bookAuthor,
                booksAtributes.bookTitle, rundomGenre(booksAtributes.genre), booksAtributes.bookPrise());
            this.booksList.push(book);
        }

        function rundomGenre(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    },
    studentsAndBorrowBooksList: [],
    borrowBook: function(arrStudList, arrBookList) {
        for (let i = 0; i < arrStudList.length; i++) {
            let studentAndBorrowBook = {};

            function rundomBook(arr) {
                const indexBook = Math.floor(Math.random() * arr.length);
                const book = arr[indexBook];
                const bookNumber = book.number;
                if (book.status === 'false') {
                    return rundomBook(arr);
                } else {
                    library.booksList[indexBook].bookStatus = 'false'
                    return book
                }
            };
            const rundomNumberBooks = Math.floor(Math.random() * 3); // кількість книжок
            if (rundomNumberBooks === 0) {
                studentAndBorrowBook.studentTicketNumber = arrStudList[i].studentTicketNumber;
                studentAndBorrowBook.surname = arrStudList[i].surname;
                studentAndBorrowBook.name = arrStudList[i].name;
                studentAndBorrowBook.patronumic = arrStudList[i].patronumic;
                studentAndBorrowBook.borrowBook = false;
                library.studentsAndBorrowBooksList.push(studentAndBorrowBook);

            } else if (rundomNumberBooks === 1) {
                studentAndBorrowBook.studentTicketNumber = arrStudList[i].studentTicketNumber;
                studentAndBorrowBook.surname = arrStudList[i].surname;
                studentAndBorrowBook.name = arrStudList[i].name;
                studentAndBorrowBook.patronumic = arrStudList[i].patronumic;
                studentAndBorrowBook.borrowBook = true;
                const books = []; //для структури
                const book = [];
                book.push(rundomBook(arrBookList), Math.floor(Math.random() * 500));
                books.push(book);
                studentAndBorrowBook.books = books;
                library.studentsAndBorrowBooksList.push(studentAndBorrowBook);

            } else {
                studentAndBorrowBook.studentTicketNumber = arrStudList[i].studentTicketNumber;
                studentAndBorrowBook.surname = arrStudList[i].surname;
                studentAndBorrowBook.name = arrStudList[i].name;
                studentAndBorrowBook.patronumic = arrStudList[i].patronumic;
                studentAndBorrowBook.borrowBook = true;
                const books = []; // як циклічно записати у об'єкт властивості, якщо назва значення однакова (адже при кожному додаванні на кожній ітерації іде перезатирання ключ-значення)

                let priceCounter = 0;
                for (let j = 0; j < library.booksList.length; j++) {
                    if (books.length < 1) {
                        rundom = rundomBook(arrBookList);
                        const book = [];
                        book.push(rundom, Math.floor(Math.random() * 500));
                        books.push(book);
                        priceCounter = priceCounter + rundom.bookPrise

                    } else {
                        rundom = rundomBook(arrBookList);
                        if (priceCounter + rundom.bookPrise < 100) {
                            const book = [];
                            book.push(rundom, Math.floor(Math.random() * 500));
                            books.push(book);
                            priceCounter = priceCounter + rundom.bookPrise
                        } else {
                            break;
                        }
                    }
                }
                studentAndBorrowBook.books = books;
                library.studentsAndBorrowBooksList.push(studentAndBorrowBook);
            }
        }
    },
    newList: [], //list of students only borrow books
    sortStusents: function() {
        const list = this.studentsAndBorrowBooksList;
        for (let i = 0; i < list.length; i++) {
            if (list[i].borrowBook === true) {
                this.newList.push(list[i])
            } else {
                continue;
            }
        }
    },
    debtorStudentList: [],
    sortDebtorStusents: function() {
        const list = this.newList
        for (let i = 0; i < list.length; i++) {
            const arrBook = list[i].books

            for (let j = 0; j < arrBook.length; j++) {
                if (arrBook[j][1] > 365) {
                    this.debtorStudentList.push(list[i])
                    break;
                } else {
                    continue;
                }
            }
        }
    },

    result: function() {
        const list = this.debtorStudentList

        for (let i = 0; i < list.length; i++) {
            const student = list[i].surname + ' ' + list[i].name + ' ' + list[i].patronumic
            const ticketNumber = list[i].studentTicketNumber
            const owedBooks = [];
            let numberOwedBooks = 0;
            let sumPriceOwedBooks = 0;

            const arrBook = list[i].books
            for (let j = 0; j < arrBook.length; j++) {
                if (arrBook[j][1] > 365) {
                    owedBooks.push(arrBook[j][0].number)
                    numberOwedBooks += 1
                    sumPriceOwedBooks += arrBook[j][0].bookPrise
                } else {
                    continue;
                }
            }
            console.log(`Debtor student: ${student}
                student ticket number: ${ticketNumber}
                owed books: ${owedBooks}
                number owed books: ${numberOwedBooks}
                sum price owed books: ${sumPriceOwedBooks}`)
        }

    }
};
library.bookCreator()
library.borrowBook(students.studentsList, library.booksList)
library.sortStusents()
library.sortDebtorStusents()
library.result()
console.log('*****************************************************')

// rating (from 0 to 6)
const rating = {
    raitingMarks: {
        hobby: function(str) {
            if (str === 'none') {
                return 0;
            } else {
                return 10;
            }
        },
        groupLeader: function(num) {
            const group = groups.groupList
            let stud;
            for (let i = 0; i < group.length; i++) {
                const students = group[i].addStudents
                for (let j = 0; j < students.length; j++) {
                    if (num === students[j].studentTicketNumber) {
                        stud = students[j].groupLeader
                    }
                }
            }
            if (stud === 'groupLeader') {
                return 15;
            } else {
                return 0;
            }
        },
        borrowBooks: function(num) {
            const list = library.debtorStudentList
            for (let i = 0; i < list.length; i++) {
                let ticketNum = list[i].studentTicketNumber
                if (num !== ticketNum) {
                    return 15;
                } else {
                    return 0;
                }
            }
        },
        marks: function(num) {
            const list = subjectsAndMarks.studentsMarksList
            for (let i = 0; i < list.length; i++) {
                const ticket = list[i][0]
                const middleMark = list[i][list[i].length - 1]
                if (num === ticket) {
                    if (middleMark < 2.8) {
                        return 0
                    } else if (middleMark >= 2.8 && middleMark <= 3.5) {
                        return 25
                    } else {
                        return 50
                    }
                } else {
                    continue;
                }
            }
        }
    },
    studentsRatingList: [],
    ratingCount: function() {
        const list = students.studentsList
        for (let i = 0; i < list.length; i++) {
            const newList = {};
            newList.studentTicketNumber = list[i].studentTicketNumber
            newList.surname = list[i].surname
            newList.name = list[i].name
            newList.patronumic = list[i].patronumic
            newList.rating = (rating.raitingMarks.hobby(list[i].hobby) +
                rating.raitingMarks.groupLeader(list[i].studentTicketNumber) +
                rating.raitingMarks.borrowBooks(list[i].studentTicketNumber) +
                rating.raitingMarks.marks(list[i].studentTicketNumber))
            if (newList.rating >= 75) {
                newList.cholarship = 2000
            } else if (newList.rating < 75 && newList.rating >= 50) {
                newList.cholarship = 1000
            } else {
                newList.cholarship = 'not get'
            }
            this.studentsRatingList.push(newList)
        }

    },
    result: function() {
        const list = this.studentsRatingList
        const sortRating = [];
        for (let i = 0; i < list.length; i++) {
            const rating = list[i].rating;
            if (rating >= 50) {
                sortRating.push(list[i]);
                console.log(`Students which have rating from 50 inclusive to 100:
                student ticket number: ${list[i].studentTicketNumber}
                name: ${list[i].surname} ${list[i].name} ${list[i].patronumic}
                rating: ${list[i].rating}`)
            } else {
                continue;
            }
        }
        if (sortRating.length === 0) {
            console.log(`All students have rating less then 50`);
        }
    }
};
rating.ratingCount()
rating.result()
console.log('*****************************************************')
    // console.log(groups.groupList)
    // console.log(subjectsAndMarks.studentsMarksList)
    // console.log(library.debtorStudentList)
    // console.log(rating.studentsRatingList)

const certificate = {
    printSertificate: function() {
        const list = rating.studentsRatingList;
        for (let i = 0; i < list.length; i++) {
            console.log(`Cetificate to student: ${list[i].surname} ${list[i].name} ${list[i].patronumic}
            student ticket number: ${list[i].studentTicketNumber}
            rating: ${list[i].rating}
            cholarship: ${list[i].cholarship}`);
        }
    }
}
certificate.printSertificate();
console.log('*****************************************************')