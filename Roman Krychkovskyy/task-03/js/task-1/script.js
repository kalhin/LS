let faculty = new Faculty(students);
faculty.addStudent('Arsen', 'Krychkovskyy', 'LNU123456', 1996, 'Lviv', 'male', { chemistry: 88 }, 100, 'XMX-53');
let library = new Library(faculty, books);
library.getBook('LNU123456', 'Mein Kampf');
library.getBook('LNU123456', 'Selfish gene');
library.returnBook('LNU123456', 'Mein Kampf');
library.getBook('LNU123456', 'Mein Kampf');
faculty.task4('LNU123456');