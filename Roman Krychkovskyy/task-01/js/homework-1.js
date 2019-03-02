const tasks = {
    task1: function () {
        return jsver;
    },
    task2: function () {
        let date = new Date();
        let fullDate = `Current Date and Time: ` + date.getDate() + `/`
            + (date.getMonth() + 1) + `/`
            + date.getFullYear() + ` `
            + date.getHours() + `:`
            + date.getMinutes();
        return fullDate;
    },
    task3: function () {
        const n = parseInt(prompt('Input value bigger than 0', 1));
        if (n < 0 || isNaN(n) || n === null) {
            return 'Wrong data';
        }
        const str = prompt('Input string for repeating', 'a');
        let text = '';
        let res = [];
        for (let i = 0; i < n; i++) {
            text += str;
            res.push(text);
            console.log(res[i]);
        }
        return res;
    },
    task4: function () {
        const radius = parseFloat(prompt(`Input radius`, 0));
        const diametr = radius * 2;
        const perimetr = (2 * Math.PI * radius);
        if (isNaN(radius) || radius === null) {
            return `Wrong radius!`;
        }
        let area = 0;
        area = ((Math.PI * diametr * diametr) / 4);
        return 'Area is ' + area + '\nPerimetr is ' + perimetr;
    },
    task5: function () {
        const str = prompt('Input text', '');
        if (str === null || str.trim().length === 0) {
            return `Wrong data`;
        }
        if ((str[0] === 'i' || str[0] === 'I') && (str[1] === 'f' || str[1] === 'F')) {
            return true;
        } else {
            return false;
        }
    },
    task6: function () {
        const firstName = prompt('Input your first name', '');
        const lastName = prompt('Input your last name', '');
        if (firstName === null || lastName === null || firstName.length === 0 || lastName.length === 0) {
            return `Wrong data!`;
        }
        return `Hello ${lastName} ${firstName}`;
    },
    task7: function () {
        let str = prompt('Input text', '');
        if (str === null || str.trim().length === 0) {
            return `Wrong data`;
        }
        let arr = str.split('.');
        return 'Filename: ' + str + '\nBase name: ' + arr[0] + '\nExtension: ' + arr[1] + '\nPathname: /user/system';
    },
    task8: function () {
        const a = parseInt(prompt('Input your first value', ''));
        const b = parseInt(prompt('Input your second value', ''));
        const c = parseInt(prompt('Input your last value', ''));
        let arr = [a, b, c];
        if (a === null || b === null || c === null || isNaN(a) || isNaN(b) || isNaN(c)) {
            return `Wrong data!`;
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 1 && arr[i] <= 10) {
                return true;
            }
        }
        return false;
    },
    task9: function () {
        const a = parseInt(prompt('Input your first value', ''));
        const b = parseInt(prompt('Input your last value', ''));
        if (a === null || b === null || isNaN(a) || isNaN(b)) {
            return `Wrong data!`;
        }
        if (((a >= 1 && a <= 10) && (b < 1 || b > 10)) || ((b >= 1 && b <= 10) && (a < 1 || a > 10))) {
            return true;
        } else {
            return false;
        }
    },
    task10: function () {
        return `
        Sample string :
        a string that you "don't" have to escape
        This
        is a ....... multi-line
        heredoc string`;
    },
    task11: function () {
        let str = prompt('Input text', '');
        let newStr = '';
        if (str === null || str.trim().length === 0) {
            return `Wrong data`;
        }
        str = str.trim();
        if ((str[0] === 'i' || str[0] === 'I') && (str[1] === 'f' || str[1] === 'F')) {
            newStr = str;
        } else {
            newStr = `if ${str}`;
        }
        return newStr;
    },
    task12: function () {
        const alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
        let str = prompt('Input your text', '');
        let newStr = '';
        function repeat() {
            let rand = Math.round(Math.random() * alphabet.length);
            str = `${str}${alphabet[rand]}`;
            if (str.length < 3) {
                repeat();
            }
        }
        if (str.length < 3) {
            repeat();
        } else {
            str = str.slice(0, 3);
        }
        const n = parseInt(prompt('How many copies do you need?', 1));
        if (n === null || isNaN(n)) {
            return `Wrong data!`;
        }
        for (let i = 0; i < n; i++) {
            newStr += str;
        }
        return newStr;
    },
    task13: function () {
        const radius = parseFloat(prompt('Input radius', 0));
        if (radius === null || isNaN(radius)) {
            return 'Wrong radius!';
        }
        const volume = 4 / 3 * Math.PI * radius * radius * radius;
        return `The volume of the sphere is: ${volume}`;
    },
    task14: function () {
        let str = prompt('Input string');
        if (str === null || str.trim().length === 0) {
            return `Wrong string!`;
        }
        let result = str.trim().split('');
        let len = str.length;
        let first = str[0];
        let last = str[len - 1];
        result[0] = last;
        result[len - 1] = first;
        return result.join('');
    },
    task15: function () {
        const a = parseInt(prompt('Inptut first integer number', 0));
        const b = parseInt(prompt('Inptut second integer number', 0));
        if (isNaN(a) || isNaN(b)) {
            return `Wrong data`;
        }
        if (a === 20 || b === 20) {
            return true;
        } else {
            return `Their sum is: ${a + b}`;
        }
    },
    task16: function () {
        const a = parseFloat(prompt('Inptut first integer number', 0));
        const b = parseFloat(prompt('Inptut second integer number', 0));
        const c = parseFloat(prompt('Inptut third integer number', 0));
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return `Wrong data`;
        }
        return `max = ${Math.max(a, b, c)}`;
    },
    task17: function () {
        const num = parseInt(prompt('Input number'), 0);
        if (isNaN(num)) {
            return `Wrong data!`;
        }
        if (num > 10 && num < 100) {
            return `Your number ${num} is in range from 10 to 100`;
        } else if (num > 100 && num < 200) {
            return `Your number ${num} is in range from 100 to 200`;
        } else {
            return `You number ${num} is outside our range`;
        }
    },
    task18: function () {
        const a = parseInt(prompt(`Input first integer value`, 0));
        const b = parseInt(prompt(`Input second integer value`, 0));
        if (isNaN(a) || isNaN(b)) {
            return `Wrong data`;
        }
        if (a === b) {
            return `a equal b. Double sum is: ${(a + b) * 2}`;
        } else {
            return `Their sum is: ${a + b}`;
        }
    },
    task19: function () {
        for (let i = 0; i < 9; i++) {
            console.log(`Javascript exercises`);
        }
        return `Javascript exercises 9 times`;
    },
    task20: function () {
        let str = prompt(`Input your string`);
        if (str.length === 0 || str === null) {
            return `Wrong string`;
        }
        let res = str.trim().split('');
        res.push(str[(str.length - 1)]);
        res.unshift(str[(str.length - 1)]);
        return res.join('');
    },
    task21: function () {
        for (let i = 34; i <= 42; i++) {
            console.log(i);
        }
        return `from 34 upto 41`;
    },
    task22: function () {
        console.log(`Even numbers between 2 to 10:`);
        for (let i = 1; i <= 10; i++) {
            if (i % 2 === 0) {
                console.log(i);
            }
        }
        return `Even numbers between 2 to 10`;
    },
    task23: function () {
        console.log(`Odd numbers between 9 to 1:`);
        for (let i = 10; i >= 1; i--) {
            if (i % 2 !== 0) {
                console.log(i);
            }
        }
        return `Odd numbers between 9 to 1`;
    },
    task24: function () {
        let date = new Date();
        let time = date.getHours() + `:` + date.getMinutes();
        const arr = ["Javascript", 2.3, time];
        arr.forEach((value) => {
            console.log(value);
        });
        return arr;
    },
    task25: function () {
        let a = parseInt(prompt(`Input first non-negative integer value`, 0));
        let b = parseInt(prompt(`Input second non-negative integer value`, 0));
        if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
            return `Wrong numbers`;
        }
        a = (a + '').split('');
        b = (b + '').split('');
        a = a[(a.length - 1)];
        b = b[(b.length - 1)];
        if (a === b) {
            return true;
        } else {
            return false;
        }
    },
    task26: function () {
        let stop = false;
        let arr = [];
        while (!stop) {
            let subj = prompt(`Input your subject or press 'Cancel' to finish input`);
            if (subj === null) {
                stop = true;
            } else {
                let num = parseInt(subj.replace(/\D+/g, ""));
                if (isNaN(num)) {
                    num = 0;
                }
                arr.push(num);
            }
        }
        return `Total marks: ${arr.reduce((a, b) => a + b)}`;
    },
    task27: function () {
        let char = prompt(`Input character`);
        let res = '';
        if (char === null || char.trim().length === 0) {
            return `Wrong data`;
        }
        char = char.trim();
        for (let i = 0; i < 20; i++) {
            res += char;
        }
        return res;
    },
    task28: function () {
        const year = parseInt(prompt('Input year to check for a leap', 2012));
        if (isNaN(year)) {
            return `Wrong year`;
        }
        if (year % 4 === 0) {
            return `${year} is leap year`;
        } else {
            return `${year} is not  leap year`;
        }
    },
    task29: function () {
        let str = prompt(`Input your string`);
        if (str === null || str.trim().length === 0) {
            return `Wrong string`;
        }
        let newStr = str.slice(0, 4);
        if (newStr.toLowerCase() === 'java') {
            return str.slice(4);
        } else {
            return str;
        }
    },
    task30: function () {
        const str = prompt(`Input your string`);
        if (str === null || str.length === 0) {
            return `Wrong string`;
        }
        let res = `${str[0]}${str[1]}`;
        if (res === 'ps') {
            return `New string is - ${res}`;
        } else {
            res = '';
            return `New sting is - ${res}(blank string)`;
        }
    },
    task31: function () {
        const a = parseInt(prompt(`Input first value`, 0));
        const b = parseInt(prompt(`Input second value`, 0));
        if (a === b) {
            return 0;
        }
        let arr = [a, b];
        let nearest = arr[0];
        let border = 10;
        arr.forEach((value) => {
            if (Math.abs(value - border) < Math.abs(border - nearest)) {
                nearest = value;
            }
        });
        return `Nearest number to ${border} from your value is - ${nearest}`;
    },
    task32: function () {
        const a = parseInt(prompt(`Input first value`, 0));
        const b = parseInt(prompt(`Input second value`, 0));
        if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
            return `Wrong values`;
        }
        if ((a >= 10 && a <= 20) && (b >= 10 && b <= 20)) {
            return true;
        } else if ((a >= 20 && a <= 30) && (b >= 20 && b <= 30)) {
            return true;
        } else {
            return false;
        }
    },
    task33: function () {
        const a = parseInt(prompt(`Input first positive value`, 0));
        const b = parseInt(prompt(`Input second positive value`, 0));
        if (isNaN(a) || isNaN(b) || a < 0 || b < 0) {
            return `Wrong values`;
        }
        let arr = [a, b];
        let res = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 20 && arr[i] <= 30) {
                res.push(arr[i]);
            } else {
                res.push(0);
            }
        }
        return Math.max(...res);
    },
    task34: function () {
        let arr = prompt('Input your values(for example: 1,2,3.....)', 0);
        if (arr === null || arr.trim().length === 0) {
            return `Wrong values`;
        }
        arr.trim().split(',');
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] * 1 === 5) {
                count++;
            }
        }
        return count;
    },
    task35: function () {
        return this.task25();
    },
    task36: function () {
        const check = [10, 20, 30];
        let arr = prompt('Input your values through a space');
        if (arr === null || arr.length === 0) {
            return `Wrong data`;
        }
        arr = arr.split(' ');
        arr = arr.map((value) => value * 1);
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == check[0] && arr[i + 1] == check[1] && arr[i + 2] == check[2]) {
                return true;
            }
        }
        return false;
    },
    task37: function () {
        const a = parseInt(prompt(`Input first number`, 0));
        const b = parseInt(prompt(`Input second number`, 0));
        if (isNaN(a) || isNaN(b)) {
            return `Wrong values`;
        }
        if (a === 11 || b === 11) {
            return 11;
        } else if (a + b === 11) {
            return `Their sum is: ${a + b}`;
        } else if (Math.abs(a - b) === 11) {
            return `Their difference is 11`;
        } else {
            return 'Oops! Something went wrong \nSum or difference not equal 11';
        }
    },
    task38: function () {
        const a = parseInt(prompt(`Input first number`, 0));
        const b = parseInt(prompt(`Input second number`, 0));
        const c = parseInt(prompt(`Input last number`, 0));
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            return `Wrong values`;
        }
        let arr = [a, b, c];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] - arr[j] >= 20) {
                    return true;
                }
            }
        }
        return false;
    },
    task39: function () {
        const a = parseInt(prompt(`Input first number`, 0));
        const b = parseInt(prompt(`Input second number`, 0));
        if (isNaN(a) || isNaN(b)) {
            return `Wrong values`;
        }
        if (a === b) {
            return 0;
        } else if (a % 5 === b % 5) {
            return Math.min(a, b);
        } else {
            return Math.max(a, b);
        }
    },
    task40: function () {
        let a = parseInt(prompt(`Input first number in the range 10..99`, 0));
        let b = parseInt(prompt(`Input second number in the range 10..99`, 0));
        if (isNaN(a) || isNaN(b) || a < 10 || a > 99 || b < 10 || b > 99) {
            return `Wrong values`;
        }
        a = (a + '').split('');
        b = (b + '').split('');
        for (let i = 0; i < a.length; i++) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] === b[j]) {
                    return true;
                }
            }
        }
        return false;
    },
    task41: function () {
        const x = parseInt(prompt(`Input first number`, 0));
        const y = parseInt(prompt(`Input second number`, 0));
        const z = parseInt(prompt(`Input last number`, 0));
        if (isNaN(x) || isNaN(y) || isNaN(z)) {
            return `Wrong values`;
        }
        if (Math.abs(x - y) >= 3 && Math.abs(x - z) >= 3 && Math.abs(y - z) <= 1) {
            return true;
        } else {
            return false;
        }
    },
    task42: function () {
        const range = parseFloat(prompt(`Input the range between A and B`, 0));
        const rabbit = parseFloat(prompt(`Input the rabbit speed`, 0));
        const tortoise = parseFloat(prompt(`Input the tortoise speed`, 0));
        if (isNaN(range) || isNaN(rabbit) || isNaN(tortoise)) {
            return `Wrong values`;
        } else if (range === 0 || tortoise === 0 || rabbit === 0) {
            return `Wrong values`;
        }
        let res = range / (rabbit + tortoise);
        res = (res * tortoise).toFixed(2) * 1;
        return `They will meet ${res}km from B city`;
    },
    task43: function () {
        const range = parseFloat(prompt(`Input the range between A and B`, 0));
        const biker = parseFloat(prompt(`Input the biker speed`, 0));
        const fly = parseFloat(prompt(`Input the fly speed`, 0));
        if (isNaN(range) || isNaN(biker) || isNaN(fly)) {
            return `Wrong values`;
        } else if (range === 0 || fly === 0 || biker === 0) {
            return `Wrong values`;
        }
        let res = range / biker * fly;
        return res;
    },
    task44: function () {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    },
    task45: function () {
        const categories = {
            1: 3000,
            2: 2000,
            3: 1000
        };
        let categorie = parseInt(prompt('Input your categorie', 1));
        let exp = parseInt(prompt(`Input your experience`, 0));
        let res = 0;
        if (isNaN(categorie) || isNaN(exp)) {
            return `Wrong value`;
        }
        let next = false;
        for (let i in categories) {
            if (i == categorie) {
                next = true;
            }
        }
        if (!next) {
            return `Wrong categorie`;
        }
        if (exp < 2) {
            res = categories[categorie] * ((100 - 15) / 100);
        } else if (exp >= 2 && exp < 5) {
            res = (categories[categorie] + categories[categorie] * 0.1) * ((100 - 15) / 100);
        } else if (exp >= 5 && exp < 10) {
            res = (categories[categorie] + categories[categorie] * 0.2) * ((100 - 15) / 100);
        } else if (exp >= 10) {
            res = (categories[categorie] + categories[categorie] * 0.3) * ((100 - 15) / 100);
        }
        return res;
    },
    task46: function () {
        let num = parseInt(prompt('Input number from 1000..9999'));
        if (isNaN(num) || num < 1000 || num > 9999) {
            return `Wrong number`;
        }
        num = (num + '').split('');
        let sum = num.reduce((a, b) => a * 1 + b * 1);
        let res = num.filter(function (value, index) {
            return num.indexOf(value) !== index;
        });
        if (res.length === 0) {
            res = 'have not';
        }
        let str = (num[0] * 1 + num[1] * 1) === (num[2] * 1 + num[3] * 1) ? 'equal' : 'not equal';
        return 'The sum of all elements is: ' + sum + '\nsame numbers ' + res + '\nsum parts - ' + str;
    },
    task47: function () {
        let arrival = prompt(`Input time when you arrived(for example 14:00)`);
        let departure = prompt(`Input time when you left car parking(for example 15:00)`);
        if (arrival === null || arrival.trim().length === 0 || departure === null || departure.trim().length === 0) {
            return `Wrong data`;
        }
        let arr = [...arrival.trim().split(''), ...arrival.trim().split('')];
        let next = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == ':') {
                next++;
            }
        }
        if (next != 2) {
            return `Wrong time format(use like this: 14:50)`;
        }
        arrival = arrival.trim().split(':');
        departure = departure.trim().split(':');
        if (arrival.length === 1) {
            arrival[1] = 00;
        }
        if (departure.length === 1) {
            departure[1] = 00;
        }
        arrival[0] = Math.floor(arrival[0]);
        departure[0] = Math.floor(departure[0]);
        if (arrival[0] * 1 < 0 || arrival[0] * 1 > 24 || arrival[1] * 1 < 0 || arrival[1] * 1 >= 60) {
            return `Wrong time to arrival. Press f5 to try again!`;
        } else if (departure[0] * 1 < 0 || departure[0] * 1 > 24 || departure[1] * 1 < 0 || departure[1] * 1 >= 60) {
            return `Wrong time to departure. Press f5 to try again!`;
        }
        let price = prompt(`Input price per one hour`, 0);
        if (price === null || price.trim().length === 0) {
            return `Wrong price. Press f5 to try again`;
        }
        price = price.trim();
        arrival = arrival.join(':');
        departure = departure.join(':');
        let getTime = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]);
        let different = (getTime(departure) - getTime(arrival));
        let hours = Math.floor((different % 86400000) / 3600000);
        let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
        let result = hours + ':' + minutes;
        let pay = result.split(':');
        if (pay[1] > 10) {
            pay[0] = pay[0] * 1 + 1;
        }
        pay = pay[0] * price;
        result = result.split(':');
        return 'Your car was standing in the parking lot: ' + result[0] + 'h:' + result[1] + 'min' + '\nYou must to pay: ' + pay + "$";
    }
};
alert(tasks.task47());