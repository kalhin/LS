class Book {
    constructor(janre, autor, number, name, price, status) {
        this.autor = autor;
        this.janre = janre;
        this.name = name;
        this.number = number;
        this.status = status;
        this.price = price;
    }
}

class Reader extends Student {
    constructor(name, surname, patronyme, studTickNum) {
        super(name, surname, patronyme, studTickNum);
        this.readingBooks = [];
    }
    givBooksPrice() {
        let sum = 0;
        this.readingBooks.forEach(function (el) {
            sum += el.price;
        })
        return sum;
    }
    addBooks(book) {
        this.readingBooks.push(book);
    }
}




class Libruary {
    constructor() {
        this.readers = [];
        this.books = []
    }

    addReader(name, surname, patronyme, studTickNum, univer) {
        this.name = name;
        this.surname = surname;
        this.patronyme = patronyme;
        this.studTickNum = studTickNum;
        this.allStud = univer;
        let isStudent = true;
        this.allStud.forEach((el) => {
            for (let g = 0; g < el.length; g++) {
                if (el.students[g].studTickNum !== this.studTickNum) {
                    isStudent = false;
                }
            }
        })
        if (isStudent) {
            this.readers.push(new Reader(this.name, this.surname, this.patronyme, this.studTickNum, this.birthDate, this.birthPlace, this.family, this.hobby, this.rating, this.sholship));
        }
        else {
           let err = new Error("NOT STUDENT");
            err.status = "HI_IS_NOT_STUD";
            throw err;
        }
    }
    loadBook(janre, autor, name, price, status) {
     
        let number = this.books.length + 1;
        
        this.books.push(new Book(janre, autor, number, name, price, status));
    }
    
    bookToRent(book, reader, date) {
       
        if (this.books[book].status == 0) {
            this.books[book].status = new Date(date);
            this.readers[reader].addBooks(this.books[book]);
        }
        else {
            alert(`Book ${this.books[book].name} already in rent`)
            return "n/a";
        }
    }

}





