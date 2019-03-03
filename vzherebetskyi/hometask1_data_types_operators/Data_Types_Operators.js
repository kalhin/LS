let hometask1 = {
 
date: function() {
   let d = new Date;
    console.log(`Current Date and Time: ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}`);
 },

 copies: function(string, n) {
    let copy = string;
    while (n > 0) {
        console.log(copy);
        copy += string;
        n--;
    }
 },

 //-------------Run this method in a browser------------------
 circle: function() {
    let radius = prompt('Input the radius of the circle:');
    console.log(`The radius of the circle is: ${radius}. The perimeter is ${2*radius*3.14159}.
The area is ${3.14159*Math.pow(radius, 2)}.`);
 },

 //-----------------------------------------------------------

 ifBegin: function(string) {
     let a = string.trim().toLowerCase().slice(0,2);
     console.log(a == 'if'); 
 },

 //-------------Run this method in a browser------------------
 reverseName: function() {
    let name = prompt('Input your first name:');
    let surname = prompt('Input your last name:');
    console.log(`Hello ${surname} ${name}`);
 },

 //-----------------------------------------------------------
 
 smallTest: function(numbers) {
     let answer = 0;
     for (i = 0; i < 3; i++) {
         numbers[i] - 10 <= 0 && numbers[i] - 10 >= -10  ? answer += 1 : answer += 0;
     }
     console.log(answer > 0);
 },

 smallTest2: function(numbers) {
    numbers.map((number) => (number <= 10 && number >= 0) ? 1 : 0).reduce((acc, currentValue) => acc + currentValue) == 1 ? console.log(true) : console.log(false);
 },

 hereDoc: () => {
    console.log(`Sample string:
a string that you "don't" have to escape
This
is a ....... multi-line
heredoc string ----------> example`);
 },
 
 ifAdd: function(string) {
    let a = string.trim().toLowerCase().slice(0,2);
    a == 'if' ? console.log(string) : console.log('if ' + string); 
 },

 stringCopy: function(string, n) {
    let answer = string; 
    
    if (string.length < 3) 
     { while (n > 1) {answer += string; n--;}; console.log(answer); }
    else console.log(answer);
 },

 //-------------Run this method in a browser------------------
 sphere: function() {
    let radius = prompt('Input the radius of the sphere:');
    console.log(`The volume of the sphere is ${(4 / 3) * (3.14159 * Math.pow(radius, 3))}.`);
 },
 //-----------------------------------------------------------

 exchangeLetters: function(string) {
    let answer = string.split('');
    [answer[0], answer[answer.length - 1]] = [answer[answer.length - 1], answer[0]];
    console.log(answer.join(''));
 },

 checkTwenty: function(x,y) {
     x == 20 || y == 20 ? console.log(true) : console.log(x + y);
 },

 greatestNumber: function(numbers) {
     numbers.sort((x, y) => x < y);
     console.log(numbers[0]);
 },
// more details on conditions
 withinTen: function(number) {
     console.log(number % 10 == 0 && number > 0 && number < 300);
 },
// more details on conditions
 sumInt: function(x, y) {
     x == y ? console.log(2 * (x + y)) : console.log(x + y);
 },

 exercise: function() {
     let text = '';
     let n = 9;
     while (n > 0) {
         text += 'Javascript exercises\n';
         n--;
     } 
     console.log(text);
 },

 addLetter: function(string) {
     let answer = string[string.length - 1] + string + string[string.length - 1];
     console.log(answer); 
 },

 printUp: function() {
    let number = 34;
    while (number <= 42) {
        console.log(number);
        number++;
    }
 },

evenNumbers: function() {
    let number = 1;
    while (number <= 10) {
       number % 2 == 0 && console.log(number);
       number++;
    }
},

oddNumbers: function() {
    let number = 10;
    while (number >= 1) {
       number % 2 != 0 && console.log(number);
       number--;
    }
},

printArray: function(array) {
    array.map((element) => console.log(element));
},

lastDigit: function(x,y) {
    console.log((x - y) % 10 == 0);
},

marks: function(object) {
    let answer = 0;
    for (let prop in object) {
        answer += object[prop];
    };
    console.log(answer);
},

twentyTimes: function(char) {
    let answer = '';
    while (answer.length < 20) {
        answer += char;
    }
    console.log(answer);
},

leapYear: function(year) {
    let year1 = new Date();
    let year2 = new Date();
    let testIfLeap = year2.setFullYear(year + 1) - year1.setFullYear(year);
    console.log(testIfLeap == 31622400000);
},

appearedJava: function(string) {
    string.slice(0,4) == 'Java' ? console.log(string.slice(4,string.length)) : console.log(string);
},

psString: function(string) {
    string.toLowerCase().slice(0,2) == 'ps' ? console.log('ps') : console.log('');
},

checkIntegers: function(x,y) {
    let a;
    let b;
    x <= 10 ? a = 10 - x : a = x - 10;
    y <= 10 ? b = 10 - y : b = y - 10;  
    if (a == b) { console.log(0); }
    else a > b ? console.log(y) : console.log(x);
},

checkIntegersTwo: function(x,y) {
    console.log((x >= 10 && x <= 20) && (y >= 10 && y <= 20) || (x >= 20 && x <= 30) && (y >= 20 && y <= 30));
},

checkIntegersThree: function(x,y) {
    if ((x < 20 || x > 30) && (y < 20 || y > 30)) {console.log(0);}
    else if (x >= 20 && x <= 30 && (y < 20 || y > 30))  {console.log(x);}
    else if (y >= 20 && y <= 30 && (x < 20 || x > 30))  {console.log(y);}
    else x > y ? console.log(x) : console.log(y);
},

highFive: function(array) {
    let i = 0;
    array.map((number) => number == 5 ? i++ : i);
    console.log(i);
},

checkArray: function(array) {
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        (array[i] == 10 && array[i + 1] == 20 && array[i + 2] == 30) ? (n++, i++) : i++; 
    }
    console.log(n);
    //if n > 0 this means there is a sequence 10,20,30 and if n == 0 this means there is no sequence
},

eleven: function(x,y) {
    if (x == 11 || y == 11) {console.log(11);}
    else if (x + y == 11 || x - y == 11 || y - x == 11) {console.log(11);}
    else console.log('Not eleven');  
},

checkIntegersFour: function(x,y,z) {
    console.log((Math.abs(x - y) >= 20 || Math.abs(x - z) >= 20 || Math.abs(y - z) >= 20));
},

checkIntegersFive: function(x,y) {
    if (x == y) {console.log(0);}
    else if (x % 5 == y % 5) {x > y ? console.log(y) : console.log(x);}
    else x > y ? console.log(x) : console.log(y);
},

checkIntegersSix: function(x,y) {
    console.log((Math.floor(x / 10) == Math.floor(y / 10) || Math.floor(x / 10) == y % 10) || (x % 10 == Math.floor(y / 10) || x % 10 == y % 10));
},

checkIntegersSeven: function(x,y,z) {
     console.log((Math.abs(x - y) <= 1 && ((Math.abs(x - z) >= 3) && (Math.abs(y - z) >= 3)))|| (Math.abs(x - z) <= 1 && ((Math.abs(x - y) >= 3) && (Math.abs(y - z) >= 3))));
},

rabbitTurtle: function(x, y, z) {
// x - distance in km between A and B, y - speed of rabbit km/h, z - speed of turtle km/h
    let approach = y + z;
    let meetingTime = x / approach;
    console.log(z * meetingTime);
},

fly: function(x, y, z) {
// x - distance in km between A and B, y - speed of bicycle km/h, z - speed of fly km/h
    let time = x / y;
    console.log(z * time);
},

tomorrowDate: function() {
    let d = new Date;
    console.log(`Current Date is ${d.getDate() + 1}/${d.getMonth() + 1}/${d.getFullYear()}`);
},

salary: function(category, experience) {
    let rates = [3000, 2000, 1000];
    let extra;
    if (experience < 2) {extra = 0;}
    else if (experience >= 2 && experience < 5) {extra = 0.1;}
    else if (experience >= 5 && experience < 10) {extra = 0.2;}
    else if (experience >= 10) {extra = 0.3;};
    let tax = (rates[category - 1] + (rates[category - 1] * extra)) * 0.15;
    console.log((rates[category - 1] + (rates[category - 1] * extra) - tax));  
},

fourDigits: function(number) {
    let a = []; 
    let b = 1000; 
    let c = number;
    let sum = 0;
    let repeat = 0;
    let repeated = [];
    let sumOFDigits;
    while (b > 0.9) 
    {
      if (a[0]) 
        { for (let i = 0; i < a.length; i++) 
            { 
                if (a[i] == Math.floor(c / b)) 
                { 
                if (repeated.length != 1) {repeated.push(a[i]);}
                else if (repeated[0] != a[i]) {repeated.push(a[i]);};  
                repeat++;
                break;
                }; 
            };
        };
        a.push(Math.floor(c / b));
        sum += Math.floor(c / b); 
        c -= a[a.length - 1] * b;
        b /= 10;
    };
(a[0] + a[1]) == (a[2] + a[3]) ? sumOFDigits = 'Сума перших двох цифр рівна сумі двох наступних' : sumOFDigits = 'Сума перших двох цифр не рівна сумі двох наступних';
console.log(a, sum, `${repeated.length >= 1 ? repeat + repeated.length : repeat} раз/рази/разів зустрічається/зустрічаються цифра/цифри, що повторюється/повторюються. `, sumOFDigits);     
},

parking: function(x, y, z) {
//time format == hh:mm
// payment in UAH
let hoursEnter = parseInt(x.slice(0,2));
let minutesEnter = parseInt(x.slice(3,5));
let hoursLeave = parseInt(y.slice(0,2));
let minutesLeave = parseInt(y.slice(3,5));

let timeAtParking = hoursLeave - hoursEnter;
if (minutesLeave - minutesEnter > 10) {timeAtParking += 1;};

console.log(`When the parking lot was entered: ${x}, 
When the parking lot was left: ${y}, 
Price for 1 hour: ${z}, 
Total payment ${timeAtParking * z}`);
}

};

// hometask1.date();
// hometask1.copies('Cola',5);
// hometask1.ifBegin('   iF    IF   are here!');
// hometask1.circle();
// hometask1.reverseName();
// hometask1.smallTest([-2,1,-10]);
// hometask1.smallTest2([0,10]);
// hometask1.hereDoc();
// hometask1.ifAdd('             uuu are good');
// hometask1.stringCopy('ha',4);
// hometask1.sphere();
// hometask1.exchangeLetters('Superman');
// hometask1.checkTwenty(10,21);
// hometask1.greatestNumber([1,-4,222]);
// hometask1.withinTen(291);
// hometask1.sumInt(5,4);
// hometask1.exercise();
// hometask1.addLetter('java');
// hometask1.printUp();
// hometask1.evenNumbers();
// hometask1.oddNumbers();
// hometask1.printArray(['Javascript', 2.3, Date()]);
// hometask1.lastDigit(31,12346);
// hometask1.twentyTimes('1');
// hometask1.leapYear(2008);
// hometask1.appearedJava('Oldjava');
// hometask1.psString('seudoclass');
// hometask1.checkIntegers(15,8);
// hometask1.checkIntegersTwo(11,25);
// hometask1.checkIntegersThree(23,31);
// hometask1.highFive([0,1,2,3,5,6,7,8,5,4,3,5,1,5,5,5,4,3,12,34,56,77,5,5]);
// hometask1.checkArray([10,40,10,20,30,50,60,1,2,3,10,20,30,11,5,67]);
// hometask1.eleven(-10,1);
// hometask1.checkIntegersFour(-5,25,30);
// hometask1.checkIntegersFive(23,17);
// hometask1.checkIntegersSix(55, 89);
// hometask1.checkIntegersSeven(-1,2,4);
// hometask1.rabbitTurtle(100, 10, 1);
// hometask1.tomorrowDate();
// hometask1.fly(900, 60, 90);
// hometask1.salary(1,15);
// hometask1.fourDigits(1111);
// hometask1.parking('12:00','14:15',10);
// hometask1.marks({'math':100, 'chemistry':100, 'englishLiterature':90});