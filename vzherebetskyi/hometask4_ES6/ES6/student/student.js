let studSurnames = ['Ivanenko', 'Petrenko', 'Fedorenko', 'Parker', 'Button', 'Moor', 'Litvinenko', 'Hrytcenko', 'Kotliar', 'Sadovyi', 'Hrynevych', 'Serhiiv', 'Liubach', 'Loboda', 'Kotihoroshko'];
let studNames = ['Fedir', 'Vasil', 'Petro', 'Taras', 'Ivan', 'Mikhailo', 'Panas', 'Dmytro', 'Kazimir', 'Peter', 'Yevhen'];

class Student {    
    constructor(name, surname) {    
                
                this.surname = surname;
                this.name = name;
                let books = {0: 'Книг немає!', amount: 0};
                
                //визначаємо номер "створеного" студента і присвоюємо йому номер студентського квитка
                //який має 7 цифр, наприклад 1 студент буде мати номер студентського квитка 0000001 
                
                Student.count += 1;
                let number = Student.count + '';
                    while (number.length < 7) { number = '0' + number; };
                
                this.studentTicket = number;

                //-------------------------Додаємо студента в кімнату--------------------------------

                if (Student.rooms.length === 0 || Student.rooms[Student.rooms.length - 1].length === 3) { Student.rooms.push([this.surname]); }
                else Student.rooms[Student.rooms.length - 1].push(this.surname);
                this.roomNumber = Student.rooms.length;

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
}

Student.count = 0;
Student.rooms = [];
Student.fatherName = undefined;
Student.birth = undefined;
Student.placeOfBirth = undefined;
Student.address = undefined;
Student.gender = undefined;
Student.familyStatus = undefined;
Student.hobbies = [];
Student.marks = undefined;
Student.headOfGroup = false;