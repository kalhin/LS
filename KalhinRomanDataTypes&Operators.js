const topic_2 = {
    exersice_1: function() {
        let version = 1.0;
        version = 1.1;
        version = 1.2;
        version = 1.3;
        version = 1.4;
        version = 1.5;
        version = 1.6;
        version = 1.7;
        version = 1.8;
        version = 1.9;
        alert('Javascript Version: ' + version);
    },
    exersice_2: function() {
        const currentDate = new Date;
        const date = currentDate.getDate();
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        let hour = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        function rightTime(time) {
            return time < 10 ? time = '0' + time : time
        }
        console.log(`Current Date and Time: ${date}/${month}/${year} ${rightTime(hour)}:${rightTime(minutes)}`);
    },
    exersice_3: function(str, n) {
        let newStr = '';
        if (n <= 0 || typeof n !== 'number' || Number.isInteger(n) === false || typeof str !== 'string') {
            newStr += str;
            console.log(newStr);
        } else {
            for (let i = 1; i <= n; i++) {
                newStr += str;
                console.log(newStr);
            }
        }
    },
    exersice_4: function() {
        function check() {
            const userRadius = parseInt(prompt('Heloo. Enter a radius'))
            if (typeof userRadius === 'number' && userRadius >= 0) {
                const perimeter = 2 * 3.14159 * userRadius;
                alert('The perimeter is ' + perimeter);
                const area = 3.14159 * Math.pow(userRadius, 2);
                alert('The area is ' + area);
            } else {
                alert('You are enter not a number or not positive number.\nPlease, enter a number');
                check();
            }
        }
        return check();
    },
    exersice_5: function(str) {
        const firsrLetter = str.charAt(0);
        const secondLetter = str.charAt(1);
        if (firsrLetter === 'i' && secondLetter === 'f') {
            console.log(true);
        } else {
            console.log(false);
        }
    },
    exersice_6: function() {
        const firstName = prompt('Input your first name:');
        const lastName = prompt('Input your last name:');
        const toUpFirstLetter = function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
        const user = toUpFirstLetter(firstName) + ' ' + toUpFirstLetter(lastName);
        const reverseName = user.split(' ').reverse().join(' ');
        alert('Hello ' + reverseName + '!');
    },
    exersice_7: function() {
        const userFile = new RegExp();
        console.log(userFile);
    },
    exersice_8: function(num1, num2, num3) {
        const arr = [num1, num2, num3];
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 1 && arr[i] <= 10) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr.length != 0);
    },
    exersice_9: function(num1, num2) {
        const arr = [num1, num2];
        const newArr = arr.filter(function(element) {
            return 1 <= element && element <= 10
        });
        console.log(newArr.length === 1);
    },
    exersice_10: function() {
        const Document = {
            sampleString: `a string that you "don't" have to escape
            This
            is a ....... multi-line
            heredoc string --------> example`
        }

        alert(Document.sampleString);
        console.log(Document.sampleString);
    },
    exersice_11: function(str) {
        let newStr = 'if '
        if (str[0] !== 'i' || str[1] !== 'f') {
            newStr += str;
        } else {
            newStr = str;
        }
        console.log(newStr);
    },
    exersice_12: function(str, n) {
        if (typeof str === 'string' && typeof n === 'number' && n > 0) {
            if (str.length >= 3) {
                console.log(str.slice(0, 3).repeat(n));
            } else if (str.length === 1 || str.length === 2) {
                console.log(str.repeat(n));
            } else {
                console.log('Your string is empty');
            }
        } else {
            console.log('Please, enter string and number > 0');
        }

    },
    exersice_13: function(radius) {
        if (typeof radius === 'number' && radius > 0) {
            console.log('input radius of the circle: ' + radius);
            const volumeOfSphere = Math.pow(radius, 3) * 3.14159 * 3 / 4;
            console.log('The volume of the sphere is: ' + volumeOfSphere);
        } else {
            console.log('Compute the volume from your radius is not possible! Please, enter correct radius.');
        }
    },
    exersice_14: function(str) {
        console.log(str);
        const arr = str.split('');
        const firsrLetter = arr[0];
        const lastLetter = arr[arr.length - 1];

        function reversLetters(str) {
            const newArr = arr.slice(1, arr.length - 1);
            newArr.unshift(lastLetter);
            newArr.push(firsrLetter);
            const newStr = newArr.join('');
            console.log(newStr)
        };
        const spaceFilter = arr.filter(function(element) {
            return element === ' ';
        });
        if (typeof str !== 'string') {
            console.log('You are enter not a string. Please, enter string');
        } else if (str.length < 2) {
            console.log('Your string is so short. Please, enter string with two symbol minimum');
        } else if (spaceFilter[0] === ' ') {
            console.log('You are enter a sentences. Please, enter one word');
        } else {
            return reversLetters(str);
        };
    },
    exersice_15: function(num1, num2) {
        console.log(num1, num2)
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            if (num1 === 20 || num2 === 20) {
                console.log(true);
            } else {
                console.log(num1 + num2);
            }
        } else {
            console.log(num1 + ' or ' + num2 + ' is not a number');
        }
    },
    exersice_16: function(num1, num2, num3) {
        console.log(num1, num2, num3);
        const arr = [];
        arr.push(num1, num2, num3);
        const checker = arr.filter(function(value) {
            return typeof value !== 'number'
        });
        if (checker.length === 0) {
            let greatestNumber = num1;
            for (let i = 1; i < arr.length; i++) {
                if (greatestNumber > arr[i]) {
                    greatestNumber;
                } else {
                    greatestNumber = arr[i];
                }
            }
            console.log(greatestNumber + ' is greatest number');
        } else {
            console.log('I sad, change input values to numbers!!! ;)');
        }

    },
    exersice_17: function(num) {
        return ((Math.abs(100 - num) <= 10) || (Math.abs(200 - num) <= 10));
    },
    exersice_18: function(num1, num2) {
        console.log(`Your numbers are - ${num1} and ${num2}`);
        if (num1 == num2) {
            console.log(`The doble summ is + ${((num1 + num2) * 2)}`);
        } else {
            console.log(`The sum is + ${(num1 + num2)}`);
        }
    },
    exersice_19: function(str) {
        for (let i = 0; i < 9; i++) {
            console.log(str);
        }
    },
    exersice_20: function(str) {
        console.log(str);
        if (typeof str === 'string' && str.length > 0) {
            const newStr = str[str.length - 1] + str + str[str.length - 1];
            console.log(newStr);
        } else {
            console.log(str + ' is not a string');
        }
    },
    exersice_21: function(num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            for (let i = num1; i <= num2; i++) {
                console.log(i);
            }
        } else {
            console.log(num1 + ' or ' + num2 + ' is not a number');
        }
    },
    exersice_22: function(num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            let integerNum1 = Math.ceil(num1);
            let integerNum2 = Math.ceil(num2);
            if (num1 > num2) {
                console.log('Your first number "' + num1 + '" bigger than second number "' + num2 + '".')
            } else if (integerNum1 % 2 !== 0) {
                return evenNumbers(integerNum1 += 1, integerNum2);
            } else if (integerNum2 % 2 !== 0) {
                return evenNumbers(integerNum1, integerNum2 += 1);
            } else if (integerNum1 % 2 !== 0 && integerNum2 % 2 !== 0) {
                return evenNumbers(integerNum1 += 1, integerNum2 += 1);
            } else {
                return evenNumbers(integerNum1, integerNum2);
            };

            function evenNumbers(integerNum1, integerNum2) {
                do {
                    console.log(integerNum1);
                    integerNum1 += 2;
                } while (integerNum1 <= integerNum2);
            };
        } else {
            if (typeof num1 !== 'number' && typeof num2 !== 'number') {
                console.log('You are enter "' + num1 + '" and "' + num2 + '". This is not numbers.');
            } else if (typeof num2 !== 'number') {
                console.log('You are enter "' + num2 + '". This is not a number.');
            } else {
                console.log('You are enter "' + num1 + '". This is not a number.');
            }
        }
    },
    exersice_23: function(num1, num2) {
        for (let i = 9; i >= 1; i--) {
            if (i % 2 === 1)
                console.log(i);
        }
    },
    exersice_24: function() {
        const date = new Date();
        const array = ["Javascript", 2.3, date];
        array.forEach(function(element) {
            console.log(element);
        });
    },
    exersice_25: function(num1, num2) {
        console.log(`Your numbers are ${num1} and ${num2}`)
        const firstNumber = ('' + num1).split('');
        const secondNumber = ('' + num2).split('');
        console.log(firstNumber[firstNumber.length - 1] == secondNumber[secondNumber.length - 1] ? true : false);
    },
    exersice_26: function() {
        const userMarks = {
            nameUrl: 'www.university.com/students/John#John',
            literatureMarkUrl: 'www.university.comstudents/Johnl/mark/literature#74',
            scienceMarkUrl: 'www.university.com/students/John/mark/science#89',
            mathMarkUrl: 'www.university.com/students/John/mark/math#91'
        };
        const arrHash = [userMarks.literatureMarkUrl, userMarks.scienceMarkUrl, userMarks.mathMarkUrl];
        const getHash = arrHash.map(function(element) {
            return element.substring(element.indexOf('#') + 1);
        });
        const getMarks = getHash.map(function(element) {
            return parseInt(element);
        });
        const sumOfMarks = getMarks.reduce(function(a, b) {
            return a + b;
        });
        console.log(`${userMarks.nameUrl.substring(userMarks.nameUrl.indexOf('#') + 1)}'s sum of marks is ${sumOfMarks}`);
    },
    exersice_27: function(symbol, counter) { //need do audit
        const repeater = symbol.repeat(counter);
        console.log(repeater);
    },
    exersice_28: function() {
        const userYear = parseInt(prompt('Please enter a year'));
        const date = new Date();
        date.setFullYear(userYear);
        date.setMonth(1);
        date.setDate(29);
        const checkDate = date.getDate();
        checkDate === 1 ? alert(`${userYear} is not leap year`) : alert(`${userYear} is leap year`)
    },
    exersice_29: function(string) {
        const newString = string[0].toUpperCase() + string.substr(1, 3);
        return newString === 'Java' ? string.substr(4, string.length - 3) : string[0].toUpperCase() + string.substr(1);
    },
    exersice_30: function(str) {
        console.log(str);
        const firstTwoLetters = str.substr(0, 2).toLowerCase();
        return firstTwoLetters === 'ps' ? 'ps' : "''";
    },
    exersice_31: function(num1, num2) {
        console.log(`Your numbers is ${num1} and ${num2}`);
        if (num1 === num2) {
            console.log('Return number is 0')
        } else if (Math.abs(num1 - 10) === Math.abs(num2 - 10)) {
            console.log(`The numbers ${num1} and ${num2} are similar near to the value 10`)
        } else {
            Math.abs(num1 - 10) < Math.abs(num2 - 10) ?
                console.log(`The nearest to the value 10 is integer ${num1}`) :
                console.log(`The nearest to the value 10 is integer ${num2}`)
        }
    },
    exersice_32: function(num1, num2) {
        return (num1 >= 10 && num1 <= 30) && (num2 >= 10 && num2 <= 30);
    },
    exersice_33: function(num1, num2) {
        console.log(`Your numbers are ${num1} and ${num2}`);
        const largerValue = Math.max(num1, num2);
        return largerValue >= 20 && largerValue <= 30 ? true : 0;
    },
    exersice_34: function(array) {
        console.log(`Your array is ${array}`)
        const newArr = array.filter(function(element) {
            return element === 5;
        })
        console.log(`In this array is ${newArr.length} numbers of 5's`);
    },
    exersice_35: function() {

    },
    exersice_36: function(arr) {
        const seqOfNum = [10, 20, 30];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === seqOfNum[0] && arr[i + 1] === seqOfNum[1] && arr[i + 2] === seqOfNum[2]) {
                console.log(`The sequence of numbers "${seqOfNum}" IS in the array [${arr}]`);
            } else {
                continue;
            }
        }
    },
    exersice_37: function(num1, num2) {
        if (num1 + num2 === 11) {
            console.log(`The sum of numbers ${num1} and ${num2} is ${num1 + num2}`);
        } else if (num1 - num2 === 11) {
            console.log(`The difference of numbers ${num1} and ${num2} is ${num1 - num2}`);
        } else if (num2 - num1 === 11) {
            console.log(`The difference of numbers ${num2} and ${num1} is ${num2 - num1}`);
        } else if (num1 === 11 || num2 === 11) {
            console.log(`I am the Javascript program and RETURN number 11 for you`)
        } else {
            console.log(`I am the Javascript program and CANT RETURN any of the options`)
        }
    },
    exersice_38: function(num1, num2, num3) {
        console.log(num1, num2, num3)
        return (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
            (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
            (num3 >= 20 && (num3 < num2 || num3 < num1));
    },
    exersice_39: function(num1, num2) {
        console.log(`Your numbers is ${num1} and ${num2}`)
        let smallerNum;
        let largerNum;
        if (num1 > num2) {
            largerNum = num1, smallerNum = num2
        } else {
            largerNum = num2, smallerNum = num1
        }

        if (num1 === num2) {
            console.log(`The result is 0`);
        } else if (num1 % 5 === num2 % 5) {
            console.log(`The smaller number is ${smallerNum}`);
        } else {
            console.log(`The larger number is ${largerNum}`);
        }
    },
    exersice_40: function(num1, num2) {
        console.log(num1, num2)
        const str1 = '' + num1;
        const str2 = '' + num2;
        return (str1[0] === str2[0] || str1[0] === str2[1]) ||
            (str1[1] === str2[0] || str1[1] === str2[1]) ? true : false;
    },
    exersice_41: function(num1, num2, num3) {
        console.log('x = ' + num1, 'y = ' + num2, 'z = ' + num3)
        const arr = [num2, num3];
        const closerNUmberToNum1 = arr.filter(function(element) {
            return Math.abs(num1 - element) <= 1
        });
        const farerNumberToNum1 = arr.filter(function(element) {
            return Math.abs(num1 - element) >= 3
        });
        if (closerNUmberToNum1.length === 1 && farerNumberToNum1.length === 1) {
            console.log(true);
        } else {
            console.log(false)
        }
    },
    exersice_42: function() {
        const distance = parseInt(prompt('Please, enter the distanse near the points'));
        const rabbitSpeed = parseInt(prompt('Please, enter the speed of rabbit'));
        const turtleSpeed = parseInt(prompt('Please, enter the speed of turtle'));
        const meetingTime = (distance / (rabbitSpeed + turtleSpeed) * 60).toFixed(2);
        const distanseToPointB = (turtleSpeed * meetingTime / 60).toFixed(2);
        alert('The rabbir and turtle will meet at a distance - ' + distanseToPointB + ' km from the point B')
    },
    exersice_43: function(distance, bikerSpeed, flySpeed) {
        const biketime = (distance * 60 / bikerSpeed).toFixed(2);
        const flyDistance = (flySpeed * biketime / 60).toFixed(2);
        console.log('The distanse near pints A fnd B - ' + distance + ' km');
        console.log('The bike speed is - ' + bikerSpeed + ' km/hour');
        console.log('The fly speed is - ' + flySpeed + ' km/hour');
        console.log('The fly distanse is - ' + flyDistance + ' km');
    },
    exersice_44: function() {
        const todayDate = new Date();
        console.log('Today date is ' + '"' + todayDate + '"');
        const tomorrowDate = new Date(todayDate.getTime() + (24 * 60 * 60 * 1000));
        console.log('Tomorrow date is ' + '"' + tomorrowDate + '"');
    },
    exersice_45: function(category, experience) {
        const categories = {
            firstCategory: 3000,
            secondCategory: 2000,
            thirdCategory: 1000,
        }
        const premiums = {
            lessThenTwoYears: 0,
            fromTwoToFiveYears: 10,
            fromFiveToTenYears: 20,
            moreThenTenYears: 30
        }

        function selectCategory(category) {
            if (category == 1) {
                return categories.firstCategory;
            } else if (category == 2) {
                return categories.secondCategory;
            } else if (category == 3) {
                return categories.thirdCategory;
            } else {
                return 'The category can be from 1 to 3'
            }
        }
        console.log(selectCategory(category));

        function selectExperiense(experience) {
            if (experience <= 0) {
                return 'The experience can not be less than 0'
            } else if (experience < 2) {
                return premiums.lessThenTwoYears;
            } else if (2 <= experience && experience < 5) {
                return premiums.fromTwoToFiveYears;
            } else if (5 <= experience && experience < 10) {
                return premiums.fromFiveToTenYears;
            } else {
                return premiums.moreThenTenYears;
            }
        }
        console.log(selectExperiense(experience))

        const salary = selectCategory(category) +
            (selectCategory(category) * selectExperiense(experience) / 100) -
            (selectCategory(category) * 15 / 100);

        console.log(salary);

    },
    exersice_46: function() {
        const userNumber = prompt('Please, enter a number');
        const array = userNumber.split('').map((element) => parseInt(element));

        function sumOfNumbers(arr) {
            const sumOfNumbers = array.reduce((a, b) => a + b);
            return sumOfNumbers;
        };

        function sameNumbers(arr) {
            const sameNumbers = [];
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array.length; j++) {
                    if (i != j && array[i] == array[j]) {
                        sameNumbers.push(array[i]);
                    }
                }
            }
            return sameNumbers;
        };

        function oneOrTwoSameDigits(arr) {
            if (sameNumbers(array).length == 2) {
                return 'The digit ' + sameNumbers(array)[0] + ' is found ' + sameNumbers(array).length + ' times'
            } else if (sameNumbers(array).length == 4) {
                return 'The digit ' + sameNumbers(array)[0] + ' is found 2 times and the digit ' + sameNumbers(array)[2] + ' is found 2 times'
            } else {
                return 'The same digits is not found'
            }
        };

        function compareFirstTwoDigits(arr) {
            const sumOfFirstCouple = array[0] + array[1];
            const sumOfLastCouple = array[2] + array[3];
            if (sumOfFirstCouple != sumOfLastCouple) {
                return 'Sum of first couple of digits is ' + sumOfFirstCouple +
                    '\nSum of last couple of digits is ' + sumOfLastCouple +
                    '\nThey are different'
            } else {
                return 'Sum of first couple of digits is ' + sumOfFirstCouple +
                    '\nSum of last couple of digits is ' + sumOfLastCouple +
                    '\nThey are same'
            }
        };

        alert('Your number is ' + userNumber +
            '\nSum of numbers - ' + sumOfNumbers(array) +
            '\n' + oneOrTwoSameDigits(array) +
            '\n' + compareFirstTwoDigits(array)
        );
    },
    exersice_47: function() {
        const arrivalHours = parseInt(prompt('Please, enter arrival hours in format 0 to 24'));
        let arrivalMinutes = parseInt(prompt('Please, enter arrival minutes in format 0 to 60'));
        const arrivalTime = arrivalHours * 60 + arrivalMinutes;

        const departureHours = parseInt(prompt('Please, enter departure hours in format 0 to 24'));
        const departureMinutes = parseInt(prompt('Please, enter departure minutes in format 0 to 60'));
        const departureTime = departureHours * 60 + departureMinutes;

        const hourCost = parseInt(prompt('Please, enter the cost of one hour'));

        if (arrivalHours < departureHours) {
            const timeOfStay = Math.abs(arrivalTime - departureTime);
            return countStayTime(timeOfStay);
        } else {
            const timeOfStay = (24 * 60 - arrivalTime) + departureTime;
            return countStayTime(timeOfStay);
        }

        function countStayTime(timeOfStay) {
            const hourOfStay = Math.floor(timeOfStay / 60);
            const minutesOfStay = timeOfStay - 60 * hourOfStay;
            let finalTime = [hourOfStay, ':', minutesOfStay];
            if (minutesOfStay >= 10) {
                finalTime.shift()
                finalTime.unshift(hourOfStay + 1)
            }
            const outputTime = finalTime.join('');
            const costStay = hourCost * parseInt(finalTime[0]);
            alert('Arrival time - ' + arrivalHours + ':' + arrivalMinutes +
                '\nDeparture time - ' + departureHours + ':' + departureMinutes +
                '\nStay hour price - ' + hourCost + '$' +
                '\nPrice for stay - ' + costStay + '$'
            );
        };
    },
};
//topic_2.exersice_1(); 
//topic_2.exersice_2();
//topic_2.exersice_3('a', 5);
//topic_2.exersice_4();
//topic_2.exersice_5('formula');
//topic_2.exersice_6(); 
//topic_2.exersice_7();
//topic_2.exersice_8(-5, 0, 10);
//topic_2.exersice_9(1, 0);
topic_2.exersice_10();
//topic_2.exersice_11('if string');
//topic_2.exersice_12('q', 5);
//topic_2.exersice_13(5);
//topic_2.exersice_14('Roman');
//topic_2.exersice_15(5, 20);
//topic_2.exersice_16(-6, 1, -15);
//console.log(topic_2.exersice_17(90)); //need chack
//topic_2.exersice_18(10, 10);
//topic_2.exersice_19('Javascript Basic Exercises');
//topic_2.exersice_20('abc');
//topic_2.exersice_21(34, 42);
//topic_2.exersice_22(2, 10);
//topic_2.exersice_23();
//topic_2.exersice_24();
//topic_2.exersice_25(75, 135);
//topic_2.exersice_26();
//topic_2.exersice_27('roman', 20); //need do audit
//topic_2.exersice_28();
//console.log(topic_2.exersice_29('JavaScript'));
//console.log(topic_2.exersice_30('pSfjHicgFjk'));
//topic_2.exersice_31(6, 13);
//console.log(topic_2.exersice_32(20, 30));
//console.log(`Your result is "${topic_2.exersice_33(30, 31)}"`);
//topic_2.exersice_34([3, 5, 33, 9, 0, 5, 13, 5, 5]);
//topic_2.exersice_35(); !!Same like 25
//topic_2.exersice_36([5, 8, 9, 10, 20, 30, 55, 75]);
//topic_2.exersice_37(1, 12);
//console.log(topic_2.exersice_38(10, 15, 8)); //need chack
//topic_2.exersice_39(20, 37);
//console.log(topic_2.exersice_40(78, 53));
//topic_2.exersice_41(10, 10, 13);
//topic_2.exersice_42();
//topic_2.exersice_43(10, 18, 25);
//topic_2.exersice_44();
//topic_2.exersice_45(1, 8);
//topic_2.exersice_46();  //need do audit
//topic_2.exersice_47();  //need do audit