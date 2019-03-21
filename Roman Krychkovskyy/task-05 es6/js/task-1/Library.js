class Library {
    constructor(faculty, books) {
        this.students = faculty.students;
        this.books = [...books];
    }
    addBook(id, author, name, type, price) {
        return this.books.push({
            id,
            author,
            name,
            type,
            isGiven: false,
            price
        });

    }

    getBook(numberCard, book) {
        let library = this.books;
        this.students.forEach((item) => {
            let price = 0;
            if (item.books.length !== 0) {
                for (let i = 0; i < item.books.length; i++) {
                    price += item.books[i].price;
                }
            }
            if (item.numberOfStudentCard === numberCard && item.books.length < 2) {
                for (let i = 0; i < library.length; i++) {
                    if (library[i].name === book && (price + library[i].price) <= 100 && !library[i].isGiven) {
                        library[i].isGiven = true;
                        return item.books.push({
                            name: library[i].name,
                            author: library[i].author,
                            type: library[i].type,
                            price: library[i].price,
                            days: Math.floor(Math.random() * 730)
                        });
                    } else if ((price + library[i].price) >= 100) {
                        return alert(`You can not have a books total price bigger than 100`)
                    } else if (library[i].name === book && (price + library[i].price) <= 100 && library[i].isGiven) {
                        return alert(`Now, library don't have this book(${library[i].name}). You can come again, when other student return back this book`);
                    }
                }
            } else if (item.numberOfStudentCard === numberCard && item.books.length >= 2) {
                throw `You got the maximum number of books`
            }
        })
    }
    returnBook(numberCard, book) {
        let library = this.books;
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard && item.books.length > 0) {
                for (let j = 0; j < item.books.length; j++) {
                    if (item.books[j].name === book) {
                        for (let i = 0; i < library.length; i++) {
                            if (library[i].name === book) {
                                library[i].isGiven = false;
                            }
                        }
                        item.books.splice(j, 1);
                    }
                }
            } else if (item.numberOfStudentCard === numberCard && item.books.length === 0) {
                return alert('You haven\'t debt');
            }
        });
    }
}