var Book = function (janre, number, autor, name, price, status) {
    this.autor = autor;
    this.janre = janre;
    this.name = name;
    this.number = number;
    this.status = status;
    this.price = price;
}
var Reader = function (name, surname, patronyme, studTickNum) {
    Student.call(this, name, surname, patronyme, studTickNum);
    this.readingBooks = [];
}
Reader.prototype = Object.create(Student.prototype);
Reader.prototype.constructor = Reader;

Reader.prototype.givBooksPrice = function () {
    var sum = 0;
    this.readingBooks.forEach(function (el) {
        sum += el[price];
    })
    return sum;
}
Reader.prototype.addBooks = function (book) {
    this.book = book;
    this.readingBooks.push(this.book);
}

var Libruary = function () {
    this.readers = [];
    this.books = []
}

Libruary.prototype.addReader = function (name, surname, patronyme, studTickNum, univer) {
    this.name = name;
    this.surname = surname;
    this.patronyme = patronyme;
    this.studTickNum = studTickNum;
    this.allStud = univer;
    var _this = this;
    var isStudent = true;
    this.allstud.forEach(function (el) {
        for (var g = 0; g < el.length; g++) {
            if (el[g][studTickNum] !== _this.studTickNum) {
                isStudent = false;
            }
        }
    })
    if (isStudent) {
        this.reader = new Reader(this.name, this.surname, this.patronyme, this.studTickNum)
    }
    else {
        var err = new Error("NOT STUDENT");
        err.status = "HI_IS_NOT_STUD";
        throw err;
    }
}

Libruary.prototype.loadBook = function (janre, autor, name, price, status) {
    this.autor = autor;
    this.janre = janre;
    this.name = name;
    this.number = this.books.length + 1;
    this.status = status;

    this.price = price;

    this.book = new Book(this.janre, this.autor, this.name, this.number, this.status, this.price);
    this.books.push(this.book);
}
Libruary.prototype.bookToRent = function (book, reader, date) {
    if (this.books[book].status === 0) {
        this.books[book].status = new Date(date);
        this.readers[reader].addBooks(this.books[book]);
    }
    else{
        alert(`Book ${this.books[book].name} already in rent`)
        return;
    }
}
