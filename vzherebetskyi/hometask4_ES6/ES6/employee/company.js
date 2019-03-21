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