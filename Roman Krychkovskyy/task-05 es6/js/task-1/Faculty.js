class Faculty {
    constructor(student) {
        this.students = [...student];
        this.setScholarships();
    }
    addStudent(firstName = 'student', lastName = 'student', numberOfStudentCard = 'LNU000000', year, address, gender, subject = { m: 0 }, roomNumber, group) {
        let counter = 0;
        let newStudent = true;
        this.students.forEach((item) => {
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
            throw (`Student with student card ${numberOfStudentCard} already exists`);
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
                firstName,
                lastName,
                numberOfStudentCard,
                year,
                address,
                gender,
                roomNumber,
                subject,
                rating,
                scholarships,
                group,
                books: []
            });
        }
    }
    setFatherName(numberCard, fatherName) {
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard) {
                item.fatherName = fatherName;
            }
        })
    }
    setMaritalStatus(numberCard, status) {
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard) {
                item.maritalStatus = status;
            }
        })
    }
    setPlaceOfBorn(numberCard, born) {
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard) {
                item.placeOfBorn = born;
            }
        })
    }
    setAddress(numberCard, address) {
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard) {
                item.address = address;
            }
        })
    }
    setScholarships() {
        this.students.forEach((item) => {
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
    addSubject(numberCard, subject) {
        this.students.forEach((item) => {
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
    changeRoom(numberCard, newRoom) {
        let counter = 0;
        this.students.forEach((item) => {
            if (item.roomNumber === newRoom) {
                counter++;
            }
        })
        if (counter >= 3) {
            throw `This room is crowded`
        } else {
            this.students.forEach((item) => {
                if (item.numberOfStudentCard === numberCard) {
                    item.roomNumber = newRoom;
                }
            })
        }
    }
    changeGroup(numberCard, newGroup) {
        this.students.forEach((item) => {
            if (item.numberOfStudentCard === numberCard) {
                item.group = newGroup;
            }
        })
    }
    deleteStudent(numberCard) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].numberOfStudentCard === numberCard) {
                let permission = confirm(`Are you sure that you want delete ${this.students[i].firstName} ${this.students[i].lastName}?`);
                if (permission) {
                    this.students.splice(i, 1);
                }
            }
        }
    }
    task1() {
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
    task2(minRating = 70, maxRating = 90) {
        let result = this.students.filter(item => item.rating > minRating && item.rating < maxRating);
        result.sort((x, y) => x.rating - y.rating);

        console.log(`Show students with ratting from ${minRating} to ${maxRating}`);
        result.forEach(item => {
            console.log(`${item.firstName} ${item.lastName} has ratting ${item.rating}`);
        });
    }
    task3() {
        let result = [];
        let sum = 0;
        let counter = 0;

        this.students.forEach((item) => {
            if (item.books.length) {
                item.books.forEach((i) => {
                    if (i.days > 365) {
                        sum += i.price;
                        counter++;
                    }
                });
                result.push(`${item.firstName} ${item.lastName} must to return ${counter} books, total price of which ${sum}`);
            }
        });
        result.forEach((item) => {
            console.log(item);
        });
    }
    task4(numberCard) {
        if (numberCard === undefined) {
            console.log(`enter student card`)
            return `enter student card`;
        }
        let student = this.students.filter((item) => item.numberOfStudentCard === numberCard)[0];
        console.log(`Information about student: \nfull name: ${student.firstName} ${student.lastName}\nrating: ${student.rating}\nscholarships: ${student.scholarships} grn`);
    }
}