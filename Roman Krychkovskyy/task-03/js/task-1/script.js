function Student(student, book) {
    this.students = [...student];
    this.books = [...book];
    this.setScholarships();
    console.log(this.students);
    console.log(this.books);
}
Student.prototype.addStudent = function (firstName = 'student', lastName = 'student', numberOfStudentCard = 'LNU000000', year, address, gender, subject = { m: 0 }, roomNumber, group) {
    let counter = 0;
    let newStudent = true;
    this.students.forEach(function (item) {
        if (item.roomNumber === roomNumber) {
            counter++;
        }
        if (item.numberOfStudentCard === numberOfStudentCard) {
            newStudent = false;
        }
    })
    if (counter >= 3) {
        throw 'This room is crowded';
    } else if (!newStudent) {
        throw ('Student with student card ' + numberOfStudentCard + ' already exists');
    } else {
        let scholarships = 0;
        let rating = 0;
        let counter = 0;
        subject = typeof subject === "object" ? subject : 0;
        for (let key in subject) {
            rating += subject[key];
            counter++;
        }
        rating = (rating / counter).toFixed(2) * 1;
        if (rating < 71) {
            scholarships = 0;
        } else if (rating >= 71 && rating < 81) {
            scholarships = 900;
        } else if (rating >= 81 && rating < 91) {
            scholarships = 1200;
        } else if (rating >= 91) {
            scholarships = 1800;
        }
        return this.students.push({
            firstName: firstName,
            lastName: lastName,
            numberOfStudentCard: numberOfStudentCard,
            year: year,
            address: address,
            gender: gender,
            roomNumber: roomNumber,
            subject: subject,
            rating: rating,
            scholarships: scholarships,
            group: group,
            books: []
        });
    }
}
Student.prototype.setFatherName = function (numberCard, fatherName) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            item.fatherName = fatherName;
        }
    })
}
Student.prototype.setMaritalStatus = function (numberCard, status) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            item.maritalStatus = status;
        }
    })
}
Student.prototype.setPlaceOfBorn = function (numberCard, born) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            item.placeOfBorn = born;
        }
    })
}
Student.prototype.setAddress = function (numberCard, address) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            item.address = address;
        }
    })
}
Student.prototype.setScholarships = function () {
    this.students.forEach(function (item) {
        let rating = 0;
        let counter = 0;
        for (let key in item.subject) {
            rating += item.subject[key];
            counter++;
        }
        item.rating = (rating / counter).toFixed(2) * 1;
        if (item.rating < 71) {
            item.scholarships = 0;
        } else if (item.rating >= 71 && item.rating < 81) {
            item.scholarships = 900;
        } else if (item.rating >= 81 && item.rating < 91) {
            item.scholarships = 1200;
        } else if (item.rating >= 91) {
            item.scholarships = 1800;
        }
    })
}
Student.prototype.addSubject = function (numberCard, subject) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            for (let key in subject) {
                item.subject[key] = subject[key]
            }
            let rating = 0;
            let counter = 0;
            for (let key in item.subject) {
                rating += item.subject[key];
                counter++;
            }
            item.rating = (rating / counter).toFixed(2) * 1;
            if (item.rating < 71) {
                item.scholarships = 0;
            } else if (item.rating >= 71 && item.rating < 81) {
                item.scholarships = 900;
            } else if (item.rating >= 81 && item.rating < 91) {
                item.scholarships = 1200;
            } else if (item.rating >= 91) {
                item.scholarships = 1800;
            }
        }
    })
}
Student.prototype.changeRoom = function (numberCard, newRoom) {
    let counter = 0;
    this.students.forEach(function (item) {
        if (item.roomNumber === newRoom) {
            counter++;
        }
    })
    if (counter >= 3) {
        throw 'This room is crowded'
    } else {
        this.students.forEach(function (item) {
            if (item.numberOfStudentCard === numberCard) {
                item.roomNumber = newRoom;
            }
        })
    }
}
Student.prototype.changeGroup = function (numberCard, newGroup) {
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            item.group = newGroup;
        }
    })
}
Student.prototype.deleteStudent = function (numberCard) {
    for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].numberOfStudentCard === numberCard) {
            let permission = confirm('Are you sure that you want delete ' + this.students[i].firstName + ' ' + this.students[i].lastName + '?');
            if (permission) {
                this.students.splice(i, 1);
            }
        }
    }
}
Student.prototype.addBook = function (id, author, name, type, price) {
    return this.books.push({
        id: id,
        author: author,
        name: name,
        type: type,
        isGiven: false,
        price: price
    });

}
Student.prototype.getBook = function (numberCard, book) {
    let library = this.books;
    this.students.forEach(function (item) {
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
                        price: library[i].price
                    });
                } else if ((price + library[i].price) >= 100) {
                    return alert('You can not have a books total price bigger than 100')
                } else if (library[i].name === book && (price + library[i].price) <= 100 && library[i].isGiven) {
                    return alert('Now, library don\' have this book(' + library[i].name + '). You can come again, when other student return back this book');
                }
            }
        } else if (item.numberOfStudentCard === numberCard && item.books.length >= 2) {
            throw 'You got the maximum number of books'
        }
    })
}
Student.prototype.returnBook = function (numberCard, book) {
    let library = this.books;
    this.students.forEach(function (item) {
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
Student.prototype.task1 = function () {
    let result = {};
    for (let i = 0; i < this.students.length; i++) {
        let group = this.students[i].group;
        if (result.hasOwnProperty(group)) {
            result[group].push(this.students[i].firstName + ' ' + this.students[i].lastName);
        } else {
            result[group] = [];
            result[group].push(this.students[i].firstName + ' ' + this.students[i].lastName);
        }
    }
    console.log(result);
    for (let key in result) {
        console.log(key + ' - ' + result[key]);
    }
}
Student.prototype.task2 = function (minRating = 70, maxRating = 90) {
    let result = [];
    for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].rating > minRating && this.students[i].rating < maxRating) {
            result.push(this.students[i]);
        }
    }
    result.sort(function (x, y) {
        return x.rating - y.rating;
    });
    console.log('Show students with ratting from ' + minRating + ' to ' + maxRating);
    for (let i = 0; i < result.length; i++) {
        let arr = result[i];
        console.log(arr.firstName + ' ' + arr.lastName + ' has ratting - ' + arr.rating);
    }
}
Student.prototype.task3 = function () {
    let result = [];
    this.students.forEach(function (item) {
        if (item.books.length > 0) {
            let totalPrice = item.books.reduce((x, y) => x.price + y.price);
            result.push(item.firstName + ' ' + item.lastName + ' must to return ' + item.books.length + ' books, total price of which ' + totalPrice);
        }
    });
    result.forEach(function (item) {
        console.log(item);
    });
}
Student.prototype.task4 = function (numberCard) {
    let student = {};
    if (numberCard === undefined) {
        console.log('enter student card')
        return 'enter student card';
    }
    this.students.forEach(function (item) {
        if (item.numberOfStudentCard === numberCard) {
            student.firstName = item.firstName;
            student.lastName = item.lastName;
            student.rating = item.rating;
            student.scholarships = item.scholarships;
        }
    })
    console.log('Information about student: \nfull name: ' + student.firstName + ' ' + student.lastName + '\nrating: ' + student.rating + '\nscholarships: ' + student.scholarships + ' grn');
}
/*Finish code*/
let test = new Student(students, books);
test.addStudent('Arsen', 'Krychkovskyy', 'LNU123456', 1996, 'Lviv', 'male', { chemistry: 88 }, 100, 'XMX-53');
test.addSubject('LNU123456', { math: 74 });
test.getBook('LNU123456', 'Mein Kampf');
test.getBook('LNU123456', 'Selfish gene');
test.returnBook('LNU123456', 'Mein Kampf');
test.getBook('LNU123456', 'Mein Kampf');
test.task4('LNU123456');