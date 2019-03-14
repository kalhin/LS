let company = {
    "department1": {
        "name": "Chemical Supplies Department", 
        "Abbreviation": "CSD", 
        "Head": "John Marco",
        numberOfEmployees: 0,
        employees: {},
        onVacation: {
            employees: [],
            amount: 0
        },
        working: {
            employees: [],
            amount: 0
        }
    }, 
    "department2": {
        "name": "Research and Development Department", 
        "Abbreviation": "R&DD", 
        "Head": "Peter Parker",
        numberOfEmployees: 0,
        employees: {},
        onVacation: {
            employees: [],
            amount: 0
        },
        working: {
            employees: [],
            amount: 0
        }
    }, 
    "department3": {
        "name": "Engineering and Software Development Department", 
        "Abbreviation": "ESDD", 
        "Head": "Bruce Banner",
        numberOfEmployees: 0,
        employees: {},
        onVacation: {
            employees: [],
            amount: 0
        },
        working: {
            employees: [],
            amount: 0
        }
    }
};

let departments = [];
let occupations = ["Software Engineer", "Physical Engineer", "Researcher", "Chemical Specialist", "Senior Engineer"];

for (let i in company) {
    departments.push(i);
};


function Employee(surname, name) {
    this.surname = surname;
    this.name = name;
    let random;
    
    random = Math.floor(Math.random() * 4);
    if ( this.occupation ) { 
            this.occupation["Number of occupations"] += 1; this.occupation[this.occupation["Number of occupations"]] = occupations[random]; 
        }
    else { 
           this.occupation = {}; this.occupation[1] = occupations[random]; this.occupation["Number of occupations"] = 1;
        };

        if (this.occupation[this.occupation["Number of occupations"]] === "Researcher" || this.occupation[this.occupation["Number of occupations"]] === "Chemical Specialist") { this.salary = 1500; }
        else this.salary = 2000;
    
    random = Math.floor(Math.random() * 3);
    if ( company[departments[random]].numberOfEmployees <= 20) {
         this.department = company[departments[random]].name;

         company[departments[random]].employees[this.surname] = this.occupation[this.occupation["Number of occupations"]];
         company[departments[random]].numberOfEmployees += 1;

         company[departments[random]].working.employees = company[departments[random]].working.employees.concat(this.surname);
         company[departments[random]].working.amount += 1;
    }
    else console.log("На жаль, в даному відділі кількість працівників досягла максимуму!");

    
}

Employee.prototype = {
    constructor: Employee,
    code: undefined,
    occupation: undefined,
    yearsWorked: 0,
    salary: 0,
    vacation: undefined,
    
    fatherName: undefined,
    passport: undefined,
    birth: undefined,
    placeOfBirth: undefined,
    address: undefined,

    setOccupation() {
      let random = Math.floor(Math.random() * 4);
      this.occupation["Number of occupations"] += 1; 
      
      this.occupation[this.occupation["Number of occupations"]] = occupations[random];
    },

    setYearsWorked(years) {
        if (years < this.yearsWorked) { console.log("Не вірно вказано кількість відпрацьованих років!");}
        else { 
            let numberOfYears = years - this.yearsWorked; 
            let salary = this.salary * Math.pow(1.012, numberOfYears);
            this.salary = salary;
        }; 
    },
//----------------------"department1","department2" or "department3"

    setDepartment(name) {
        if (this.vacation && this.vacation.onVacation === true) {
            return "Даний працівник у відпустці! Зміна відділу під час перебування працівника у відпустці не допускається.";
        }
        else {
        for (let i in company) {
            company[i].employees[this.surname] ? (delete company[i].employees[this.surname], company[i].numberOfEmployees -= 1, company[i].working.amount -= 1) : company[i].employees[this.surname];
            
            let toRemove = this.surname;
            company[i].working.employees = company[i].working.employees.filter(function(surname) { return surname !== toRemove; 
            });
        };
        for (let i in company) {
            if (i === name) {
                company[i].employees[this.surname] = this.occupation[this.occupation["Number of occupations"]];
                company[i].numberOfEmployees += 1;

                company[i].working.employees = company[i].working.employees.concat(this.surname);
                company[i].working.amount += 1;
            };
        };        
        this.department = company[name]["name"];
        };
    },

    setVacation() {
        
        if (this.vacation === undefined) 
        {
          this.vacation = {};
          this.vacation.onVacation = true;
          this.salary === 2000 ? this.vacation.vacationTime = 2592000000 : this.vacation.vacationTime = 1728000000;
          this.vacation.vacationTimeElapsed = 0;
          this.vacation.started = Date.now();
          this.vacation.ended = 0;

          for (let i in company) {
            if (company[i]["name"] === this.department) 
            {
                company[i].onVacation.employees = company[i].onVacation.employees.concat(this.surname);
                company[i].onVacation.amount += 1;

                let toRemove = this.surname;
                company[i].working.employees = company[i].working.employees.filter(function(surname) { return surname !== toRemove; 
                      });
                company[i].working.amount -= 1;
            };
          };
        }
        else {
            if (this.vacation.onVacation === true) {
                return "Даний працівник вже у відпустці!";
            }
            else if (this.vacation.onVacation === false) {
                this.vacation.onVacation = true;
                this.vacation.started = Date.now();
                this.vacation.ended = 0;

                for (let i in company) {
                if (company[i]["name"] === this.department) 
                {
                  company[i].onVacation.employees = company[i].onVacation.employees.concat(this.surname);
                  company[i].onVacation.amount += 1;

                  let toRemove = this.surname;
                  company[i].working.employees = company[i].working.employees.filter(function(surname) { return surname !== toRemove; 
                      });
                  company[i].working.amount -= 1;
                };
               };
            };
        };

    },

    returnVacation() {
        if (this.vacation === undefined) {
            return "Даний працівник не у відпустці! Він працює!";
        }
        else {
              if (this.vacation.onVacation === false) {
                return "Даний працівник не у відпустці! Він працює!";
              }
              else if (this.vacation.onVacation === true) {
                this.vacation.onVacation = false;
                this.vacation.ended = Date.now();
                let elapsed = this.vacation.ended - this.vacation.started;
                this.vacation.vacationTime -= elapsed;
                this.vacation.vacationTimeElapsed += elapsed;

                for (let i in company) {
                    
                    if (company[i]["name"] === this.department) 
                    {
                      let toRemove = this.surname;
                      company[i].onVacation.employees = company[i].onVacation.employees.filter(function(surname) { return surname !== toRemove; 
                      });
                      company[i].onVacation.amount -= 1;

                      company[i].working.employees = company[i].working.employees.concat(this.surname);
                      company[i].working.amount += 1;
                    };
                   };
              }
        };
    },

    getVacationTime() {
        if (this.vacation === undefined)
        {
            let time;
            this.salary === 2000 ? time = 2592000000 : time = 1728000000;
            let days = Math.floor(time / 86400000);
            let hours = Math.floor((time % 86400000) / 3600000);
            let prepMinutes = ((time % 86400000) % 3600000);
            let minutes = Math.floor(prepMinutes / 60000);

            console.log('Працівник у відпустку ще не виходив. Залишилося часу для відпустки ' + days + ' (днів) : ' + hours + ' (годин) : ' + minutes + '(хвилин)');
        }
        else {
        let time;
        if (this.vacation.onVacation === true) { time = this.vacation.vacationTime - (Date.now() - this.vacation.started);}
        else if (this.vacation.onVacation === false) { time = this.vacation.vacationTime; };  
        
        let days = Math.floor(time / 86400000);
        let hours = Math.floor((time % 86400000) / 3600000);
        let prepMinutes = ((time % 86400000) % 3600000);
        let minutes = Math.floor(prepMinutes / 60000);

        console.log('Залишилося часу для відпустки ' + days + ' (днів) : ' + hours + ' (годин) : ' + minutes + '(хвилин)');

        let timeUsed;
        this.salary === 2000 ? timeUsed = 2592000000 - time : timeUsed = 1728000000 - time;
        days = Math.floor(timeUsed / 86400000);
        hours = Math.floor((timeUsed % 86400000) / 3600000);
        prepMinutes = ((timeUsed % 86400000) % 3600000);
        minutes = Math.floor(prepMinutes / 60000);
        console.log('Витрачено часу відпустки ' + days + ' (днів) : ' + hours + ' (годин) : ' + minutes + '(хвилин)');
        };
    },
    //------------------------------------Звіти системи----------------------------------------
    
    report1() {
        for (let i in company) {
            console.log('У ' + i + ' під назвою ' + company[i]["name"] + ' працюють (не у відпустці) наступні працівники ' + company[i].working.employees + '.\n');
        };
    },
    report4() {
        for (let i in company) {
            console.log('У відділі ' + i + ' під назвою ' + company[i]["name"] + ' главою є ' + company[i]["Head"] + '.\n');
            console.log('Кількість працюючих зазначеного відділу становить ' + company[i].working.amount);
        };
    }
    
};

let employee1 = new Employee('Ivanov', 'Volodymyr');
let employee2 = new Employee("Doe", "John");
let employee3 = new Employee("De Niro", "Robert");
let employee4 = new Employee("Deppo", "John");
let employee5 = new Employee("Deppa", "Johnan");
let employee6 = new Employee("Pirate", "Braddoos");
let employee7 = new Employee("Parkur", "Peter");
let employee8 = new Employee("Banneroo", "Bruceeev");
let employee9 = new Employee("Murdock", "Matt");
let employee10 = new Employee("ilban", "Edris");
let employee11 = new Employee("Molinack", "Peter");
Employee.prototype.report4();
Employee.prototype.report1();

// employee1.getVacationTime();
// employee2.getVacationTime();
// console.log(company["department1"]);
// console.log(company["department2"]);
// console.log(company["department3"]);
// let employee3 = new Employee("De Niro", "Robert");
// let student4 = new Student("Depp", "John");
// let student5 = new Student("Deppa", "Johnan");
// let student6 = new Student("Pitt", "Bradd");
// employee1.setDepartment("department1");
// employee2.setDepartment("department1");
// employee1.setVacation();

// console.log(company["department1"]);
// console.log(company["department2"]);
// console.log(company["department3"]);

// console.log(employee1.vacation);
// console.log(employee2.vacation);
// employee2.setVacation();

// console.log(employee1.vacation);
// console.log(employee2.vacation);
// console.log(company["department1"].onVacation);
// employee2.returnVacation();
// console.log(company["department1"].onVacation);
// console.log(company["department2"].onVacation);
// console.log(company["department3"].onVacation);

