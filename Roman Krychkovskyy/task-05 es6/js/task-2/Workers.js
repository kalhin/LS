class Workers {
    constructor(section) {
        this.factory = Object.assign({}, section);
        this.setVacation();
        console.log(this.factory);
    }

    setVacation() {
        for (let key in this.factory) {
            let workers = this.factory[key].workers;
            workers.forEach((item) => {
                item.vacation = 14 + item.experience;
            })
        }
    }
    addPerson(department, tabNumber, firstName, lastName, pasportNumber, position, salary, experience = 0) {
        let obj = this.factory;
        let find = false;
        for (let key in obj) {
            if (key === department && obj[key].workers.length < 20) {
                find = true;
                obj[key].workers.push({
                    tabNumber: tabNumber,
                    firstName: firstName,
                    lastName: lastName,
                    pasportNumber: pasportNumber,
                    position: position,
                    historyOfPosition: [position],
                    experience: experience,
                    vacation: (14 + experience),
                    onVacation: false,
                    vacationHistory: {},
                    salary: salary
                })
            } else if (key === department && obj[key].workers.length >= 20) {
                throw 'This department is full of. The maximum number of employees is 20';
            }
        }
        if (!find) {
            obj[department] = {};
            obj[department].abbreviation = department[0] + department[1] + department[2] + '-' + department[(department.length - 1)];
            obj[department].boss = firstName + ' ' + lastName;
            obj[department].workers = [];
            obj[department].workers.push({
                tabNumber: tabNumber,
                firstName: firstName,
                lastName: lastName,
                pasportNumber: pasportNumber,
                position: position,
                historyOfPosition: [position],
                experience: experience,
                vacation: (14 + experience),
                onVacation: false,
                vacationHistory: {},
                salary: salary
            })
        }
    }
    setFatherName(tabNumber, fatherName) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.fatherName = fatherName;
                }
            })
        }
    }
    setPlaceOfBorn(tabNumber, placeOfBorn) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.placeOfBorn = placeOfBorn;
                }
            })
        }
    }
    setDateOfBorn(tabNumber, dateOfBorn) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.dateOfBorn = dateOfBorn;
                }
            })
        }
    }
    setAddress(tabNumber, address) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.address = address;
                }
            })
        }
    }
    setPosition(tabNumber, position, salary) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.position = position;
                    item.salary = salary;
                    item.historyOfPosition.push(position);
                }
            })
        }
    }
    setExperience(tabNumber, experience) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    for (let i = 0; i <= (experience - item.experience); i++) {
                        item.salary = item.salary * 1.2;
                    }
                    item.experience = experience;
                    item.vacation = item.vacation + experience;
                }
            })
        }
    }
    getVacation(tabNumber, period) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    let freeVacation = 0;
                    workers.forEach((item) => {
                        for (let i in item) {
                            if (item[i] === true) {
                                freeVacation++;
                            }
                        }
                    });
                    freeVacation = freeVacation >= 5 ? false : true;
                    if (item.tabNumber === tabNumber && freeVacation) {
                        item.onVacation = true;
                        item.vacationHistory[period] = item.vacation;
                    } else if (!freeVacation) {
                        throw ('On this period you can not take a vacation. Some people from your department already get vacation on this date')
                    }
                }
            })
        }
    }
    setOnVacation(tabNumber) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    item.onVacation = false;
                }
            })
        }
    }
    task1(department) {
        for (let key in this.factory) {
            if (key === department) {
                let workers = this.factory[key].workers;
                workers.forEach((item) => {
                    const firstName = item.firstName;
                    const lastName = item.lastName;
                    const text = ' work in section '
                    const position = item.position;
                    const text2 = ' in position '
                    console.log(firstName + ' ' + lastName + text + department + text2 + position);
                });
            }
        }
    }
    task2() {
        for (let key in this.factory) {
            let workers = this.factory[key].workers;
            workers.forEach((item) => {
                const period = item.vacationHistory;
                for (let i in period) {
                    const firstName = item.firstName;
                    const lastName = item.lastName;
                    const text = ' has vacation in ';
                    console.log(firstName + ' ' + lastName + text + i + ' for ' + period[i] + ' days');
                }
            });
        }
    }
    task3(tabNumber) {
        let obj = this.factory;
        for (let key in obj) {
            let workers = obj[key].workers;
            workers.forEach((item) => {
                if (item.tabNumber === tabNumber) {
                    console.log(`Information about worker: \nfull name: ${item.firstName} ${item.lastName}\nposition: ${item.position}\nsalary: ${item.salary}$`);
                }
            })
        }
    }
    task4() {
        let obj = this.factory;
        for (let key in obj) {
            const boss = obj[key].boss;
            const workers = obj[key].workers.length - 1
            console.log(`Information about department: \nsection name: ${key}\nBoss: ${boss}\nWorkers: ${workers}`);
        }
    }
}