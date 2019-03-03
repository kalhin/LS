window.onload = () => {

    let homeWork = {
        jsVersion: () => {
            console.log(window.navigator.userAgent);

        },
        date: () => {
            let data = new Date();
            alert(`Current date and time: ${data.toLocaleString()}`);
        },
        strCopies: () => {
            let str = prompt("enter string: ");
            let copies = parseInt(prompt("enter number of copies: "));
            if (copies < 1 || isNaN(copies)) {
                alert("incorrect entering");
                return;
            }
            let resStr = "";
            for (let i = 0; i <= copies; i++) {
                resStr += str;
            }
            alert(resStr);
        },
        circle: () => {
            let radius = +prompt("Please enter the Radius: ");
            if (radius < 0 || isNaN(radius)) {
                alert("incorrect entering");
                return;
            }
            let perimeter = Math.PI * (radius * 2);
            let area = Math.PI * (Math.pow(radius, 2));

            alert(`The radius is: ${radius}\nThe perimeter is: ${perimeter}\nThe area is: ${area}`);
        },
        checkOfIf: (str) => {
            let lst = str.toLowerCase();
            if ((lst.indexOf("if")) == 0) {
                return true;
            }
            else {
                return false;
            }
        },
        nameReverse: () => {
            let firstName = prompt("please enter first name: ");
            let lastName = prompt("please enter last name: ");
            alert(`Hellow ${lastName} ${firstName}`);
        },
        extOfFile: () => {
            let filename = prompt("Please enter filemame");
            let ext = filename.match(/\.\w+/);
            let base = filename.match(/\w+/);
            alert(`Base name: ${base}\nExtention: ${ext}`);
        },
        minNuber: (one, two, three) => {
            if (one <= 10 && two <= 10 && three <= 10) {
                return true;
            }
            else {
                return false;
            }
        },
        compare: (one, two) => {
            if (one <= 10) {
                if (two <= 10) {
                    return false;
                }
            }
            if (one <= 10 || two <= 10) {
                return true;
            }
            else {
                return false;
            }

        },
        printString: () => {
            let str = prompt("enter string");
            let out = document.querySelector(".out");
            out.innerHTML = str;
        },
        addIf: () => {
            let str = prompt("Enter the string");
            let ifIndex = str.indexOf("if");
            let outStr = "";
            if (ifIndex == 0) {
                outStr = str;
            }
            else {
                outStr = `if ${str}`;
            }
            alert(outStr);
        },
        firstThreeSymbStr: () => {
            let inStr = prompt("Enter the string");
            let outLength = +prompt("Enter count of repeat");
            let outStr = "";
            if (outLength < 0 || isNaN(outLength)) {
                alert("incorrect entering");
                return;
            }
            let subStr = "";
            if (inStr.length < 3) {
                subStr = inStr;
                do {
                    subStr += "_";
                }
                while (subStr.length < 3)
            }
            else {
                subStr = inStr.slice(0, 3);
            }
            for (let i = 0; i <= outLength; i++) {
                outStr += subStr;
            }
            alert(outStr);
        },
        sphere: () => {
            let radius = +prompt("Please enter the radius of sphere ");
            if (radius < 0 || isNaN(radius)) {
                alert("incorrect entering");
                return;
            }
            let sphereVol = ((Math.PI * 4) / 3) * Math.pow(radius, 3);
            alert(`radius of Sphere: ${radius}\nVolume of Shere: ${sphereVol}`);
        },
        lastFirst: () => {
            let str = prompt("Entr string please");
            let firstSymb = str[0];
            let last = str.length - 1;
            let lastSymb = str[last]
            let base = str.slice(1, last);
            alert(`${lastSymb}${base}${firstSymb}`);
        },
        ifSum: (int1, int2) => {
            let integ1 = parseInt(int1);
            if (isNaN(integ1)) {
                alert("incorrect enter");
                return 0;
            }
            let integ2 = parseInt(int2);
            if (isNaN(integ2)) {
                alert("incorrect enter");
                return 0;
            }
            if (integ1 == 20 || integ2 == 20) {
                return true
            }
            else {
                return integ1 + integ2;
            }
        },
        greatOfThree: () => {
            let x = +prompt("enter x");
            let y = +prompt("enter y");
            let z = +prompt("enter z");
            let compare = Math.max(x, y, z);
            switch (compare) {
                case x: alert(`x = ${compare} the greatest`); break;
                case y: alert(`y = ${compare} the greatest`); break;
                case z: alert(`z = ${compare} the greatest`); break;
            }

        },
        range90to210: () => {
            let number = +prompt("enter number");
            if (90 <= number && number <= 210) {
                alert("Number in range");
            }
            else {
                alert("Number out of range");
            }
        },
        eqDobleSum: () => {
            let one = parseInt(+prompt("Enter first"));
            if (isNaN(one)) {
                alert("incorrect enter");
                return;
            }
            let two = parseInt(+prompt("Enter second"));
            if (isNaN(two)) {
                alert("incorrect enter");
                return;
            }
            if (one === two) {
                alert(`Sum is: ${(one + two) * 2}`);
            }
            else {
                alert(`Sum is: ${one + two}`);
            }
        },
        ninePrint: () => {
            let print = "javascript Exercises";
            let pre = "\n" + print;;
            let out = "";
            for (let i = 0; i < 9; i++) {
                out += pre;
            }
            alert(out);
        },
        endStrEnd: () => {
            let str = prompt("enter string");
            let last = str.length - 1;
            let outStr = `${str[last]}${str}${str[last]}`
            alert(`Abrakadabra string: \n${outStr}`)
        },
        threeOneToFourtyOne: () => {
            let out = "";
            for (let i = 31; i <= 41; i++) {
                out += i + "\n"
            }
            alert(out);
        },
        evenNum: () => {
            let even = "";
            for (let i = 2; i <= 10; i++) {
                if ((i % 2) == 0) {
                    even += i + "\n";
                }
            }
            alert(even);
        },
        oddNum: () => {
            let odd = "";
            for (let i = 2; i <= 10; i++) {
                if ((i % 2) != 0) {
                    odd += i + "\n";
                }
            }
            alert(odd);
        },
        arrPrint: (arr) => {                      //exercise №24
            let out = ""
            arr.forEach((item) => {
                out += item + "\n";
            })
            alert(out);
        },

        lastDigitCompare: () => {                //exercise 25
            let first = prompt("enter first dig:");
            let second = prompt("enter second digit");
            let lastDigFirst = first[first.length - 1];
            let lastDigSecond = second[second.length - 1];
            if (lastDigFirst === lastDigSecond) {
                return true;
            }
            else {
                return false
            }

            // return lastDigFirst === lastDigSecond;

        },
        sumHesh: (obj) => {                        //exercise 26
            let sum = null;
            for (let key in obj) {
                if (!(obj[key] instanceof Function)) {
                    sum += obj[key];
                }

            }
            return sum;
        },
        specCharPrint: () => {                          //exercise 27
            let char = `${prompt("enter spec char")}`;
            let out = "";
            for (let i = 0; i <= 20; i++) {
                out += char;
            }
            alert(out);
        },
        leapNonLeap: () => {                            //exercise 28
            let year = +prompt("Enter year:");
            if ((year % 4) == 0 || (year % 1000) == 0) {
                alert(`${year} is leap year`)
            }
            else {
                alert(`${year} is not leap year`)
            }

        },
        isJavaFirst: () => {                                 //exercise 29
            let str = prompt("Please enter the string:");
            let index = str.toLowerCase().indexOf("java");
            if (index == 1) {
                alert(str[0] + str.slice(index + 5));
            }
            else {
                alert(str);
            }

        },
        ps: () => {                                        //exercise 30
            let str = prompt("please enter string");
            let strLow = str.toLowerCase();
            if ((strLow[0] === "p") && (strLow[1] === "s")) {
                alert(str.slice(0, 2));
            }
            else {
                alert("");
            }
        },
        nearTen: () => {                               //exercise 31
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            let compare1 = null;
            let compare2 = null;
            if (num1 === num2) {
                alert("0");
                return;
            }
            if (10 > num1) {
                compare1 = 10 - num1;
            }
            else {
                compare1 = num1 - 10;
            }
            if (10 > num2) {
                compare2 = 10 - num1;
            }
            else {
                compare2 = num2 - 10;
            }
            if (compare1 == compare2) {
                alert("both int.on an equal distance");
                return;
            }
            if (compare1 > compare2) {
                alert(num2);
            }
            else {
                alert(num1);
            }

        },
        diapason: () => {                              //exercise 32
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            if (((num1 >= 10 && num1 <= 20) && (num2 >= 10 && num2 <= 20)) || ((num1 >= 20 && num1 <= 30) && (num2 >= 20 && num2 <= 30))) {
                return true;
            }
            else {
                return false;
            }
        },
        biggerBetw: () => {                            //exercise 33
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            let big = Math.max(num1, num2);
            if ((big >= 20) && (big <= 30)) {
                return big;
            }
            else {
                return 0;
            }
        },
        fifthInArr: (arr) => {                           //exercise 34
            let sumFive = 0;
            arr.forEach((item) => {
                if (item === 5) {
                    sumFive++;
                }
            })
            return sumFive;
        },
        sequence: (arr) => {                   //exercise 36
            let indTen = arr.indexOf(10);
            if ((indTen != -1) && arr[indTen + 1] === 20 && arr[indTen + 2] === 30) {
                alert("sequense is present");
            }
            else {
                alert("sequense not present");
            }
        },
        eleven: () => {                                                //exercise 37
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            if (num1 == 11 || num2 == 11) {
                return 11;
            }
            if (num1 + num2 == 11) {
                return 11;
            }
            if (num1 - num2 == 11) {
                return 11;
            }
            return "non 11";
        },
        lessMorethenTwenty: () => {                                   //exercise 38
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            let num3 = +prompt("enter integer three");
            let min = Math.min(num1, num2, num3);
            if ((num1 - min >= 20) || (num2 - min >= 20) || (num3 - min >= 20)) {
                return true;
            }
            return min;
        },
        divideLessFive: () => {                                                    //exercise 39
            let num1 = +prompt("enter integer one");
            let num2 = +prompt("enter integer two");
            if (num1 === num2) {
                return 0;
            }
            if ((num1 % 5) === (num2 % 5)) {
                return Math.min(num1, num2);
            }

            return Math.max(num1, num2);
        },
        digitInBoth: () => {                                       //exercise 40
            let num1 = prompt("enter integer one(10 - 99 range)");
            let num2 = prompt("enter integer two(10 - 99 range)");
            if (num1 < 10 || num1 > 99 || num2 < 10 || num2 > 99) {

                return "enter incorrect";
            }
            if ((num1[0] === num2[0]) || (num1[0] === num2[1]) || (num1[1] === num2[0]) || (num1[1] === num2[1])) {
                return true
            }
            return false;

        },
        nearFar: () => {                        //exercise 41
            let x = +prompt("enter integer x") || 0;
            let y = +prompt("enter integer y") || 0;
            let z = +prompt("enter integer z") || 0;

            if ((y <= x + 1 || ((y >= x - 1) && (y <= x))) || (z <= x + 1 || ((z >= x - 1) && (z <= x)))) {
                if ((y >= x + 3 || y <= x - 3) || (z >= x + 3 || z <= x - 3)) {
                    return true
                }
            }
            return false;
        },
        tortleHare: () => {                  //exercise 42
            let range = +prompt("Enter range between cities");
            let hareSpeed = +prompt("enter hare speed");
            let tortleSpeed = +prompt("enter tortle speed ");
            let totalSpeed = hareSpeed + tortleSpeed;
            let timeBeforeMeeting = range / totalSpeed;
            alert(`distance from point B: ${tortleSpeed * timeBeforeMeeting}km`);


        },
        flyAndCicle: () => {                                 //exercise43
            let range = +prompt("enter distance from A to B");
            let cicleSpeed = +prompt("enter cicle speed");
            let flySpeed = +prompt("enter fly speed");
            let time = range / cicleSpeed;
            let flyDistance = flySpeed * time;
            alert(`fly range: ${flyDistance}`);

        },
        nextDayDate: () => {                              //exercise 44
            let date = new Date();
            date.setDate(date.getDate() + 1);
            alert(`Next date is: ${date.toLocaleDateString()}`);
        },
        salory: () => {                                         //exercise 45
            let category = +prompt("enter category(1, 2, or 3)");
            let exp = prompt("enter expirience");
            let baseRate = 0;
            let add = 0;
            switch (category) {
                case 1: baseRate = 3000; break;
                case 2: baseRate = 2000; break;
                case 3: baserate = 1000; break;
                default: alert("fault category enter"); return;
            }

            if (exp >= 2 && exp < 5) {
                add = (baseRate / 100) * 10;
            }
            if ((exp >= 5) && (exp < 10)) {
                add = (baseRate / 100) * 20;
            }
            if (exp > 10) {
                add = (baseRate / 100) * 30
            }
            let salory = baseRate + add;
            let tax = (salory / 100) * 15;
            let clearSalory = salory - tax;
            alert(` salory is: ${clearSalory}`);
        },
        mirorNum: () => {                                    /////exercise46
            let number = prompt("enter number(four digit)");
            let numArr = number.split("");
            let sum = 0;
            let compare = false;
            let pareCompare = false;
            for (let i = 0; i < numArr.length; i++) {
                let dig = +numArr[i];
                sum = sum + dig;
            }
            for (let i = 0; i < numArr.length - 1; i++) {

                let f = numArr[i];
                if (numArr.indexOf(f, [i + 1]) != -1) {
                    compare = true;
                }
            }
            if ((numArr[0] + numArr[1]) === (numArr[2] + numArr[3])) {
                pareCompare = true;
            }
            alert(`sum of numbers = ${sum}\nrepeat of digit: ${compare}\nfirst pare sum = second pare sum:${pareCompare}`)
        },
        calculator: () => {
            let yes = false;
            let incomHour = 0;
            let outHour = 0;
            let incomeMin = 0;
            let outMin = 0;
            while (!yes) {
                let incom = prompt("Etner arrival time:", "00:00");
                let out = prompt("Enter outdate time:", "00:00");
                if ((incom.indexOf(":") != -1) && (out.indexOf(":") != -1)) {
                    incomHour = +incom.split(":")[0];
                    incomMin = +incom.split(":")[1];
                    outHour = +out.split(":")[0];
                    outMin = +out.split(":")[1];
                    if ((!isNaN.incomHour) && (!isNaN.incomMin) && (!isNaN.outHour) && (!isNaN.outMin)) {
                        if ((incomHour >= 0) && (incomHour <= 24) && (incomMin >= 0) && (incomMin < 60) && (outHour >= 0) && (outHour <= 24) && (outMin >= 0) && (outMin < 60)) {
                            yes = true
                        }
                    }
                }
                else {
                    alert("incorrect time entering")
                }
            }
            let price = +prompt("Enter price per hour");
            if (price < 0 || isNaN(price)) {
                alert("incorrect price entering");
                return;
            }
            let parkingHours = outHour - incomHour;
            if ((outMin - incomMin) >= 10) {
                incomHour++;
            }
            if (parkingHours < 0) {
                alert(`parking more than a day is impossible,\n or non-constructive data`);
                return;
            }
            alert(`driver may pay ${parkingHours*price} conditional units`)

        }



    }
    homeWork.calculator();
}