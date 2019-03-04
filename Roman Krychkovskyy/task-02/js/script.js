const tasks = {
    task1: function (arr = ["Red", "Green", "Blue", "White"]) {
        const check = prompt('Input value for check');
        return 'Original array:\n' + arr + '\nCheck if \'' + check + '\' in color array!\n' + arr.includes(check);    //other way
    },
    task2: function (arr = [4, 1, 2, 7]) {
        if (arr.length < 1) {
            return `Array length is too small. Please try again`;
        }
        if (arr[0] === 7 || arr[arr.length - 1] === 7) {
            return true;
        }
        return false;
    },
    task3: function (arr = [12, 34, 23, 56]) {
        let origin = [...arr];
        const result = [];
        let n = +prompt('How many randon item do you need?', 0);
        if (n > arr.length - 1) {
            return `Wrong data. Max random item is - ` + arr.length;
        }
        let count = n;
        while (n > 0) {
            let numb = Math.floor(Math.random() * arr.length);
            result.push(arr[numb]);
            arr.splice(numb, 1);
            n--;
        }
        return 'Original array:\n' + origin + '\n' + count + ' random elements from the array' + result;
    },
    task4: function (arr = [1, 3, 5, 7, 9, 1]) {
        return arr[0] === arr[arr.length - 1];
    },
    task5: function (arr = [12, 34, 23, 56]) {
        return 'Original array:\n' + arr + '\nSum of the values of the above array:\n' + arr.reduce((first, second) => first + second);         //other way
    },
    task6: function (arr = [1, 2, 3, 4, 1, 2, 2, 3, 5, 6]) {
        let origin = [...arr];
        for (let i = 0; i < arr.length; i++) {
            let counter = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    counter++;
                }
                if (counter === 2) {
                    arr.splice(j, 1);
                    break;
                }
            }
        }
        return 'Original array:\n' + origin + '\nArray with unique elements:\n' + arr;
    },
    task7: function (arr1 = [3, 2, 2], arr2 = [1, 5, 4]) {
        if (arr1.length < 1 || arr2.length < 1) {
            return `Array length is too small. Please try again`;
        }
        return arr1[0] === arr2[0] || arr1[arr1.length - 1] === arr2[arr2.length - 1];
    },
    task8: function (arr = ["Red", "Green", "", "Blue", "White"]) {
        let origin = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].trim().split('').length === 0) {
                arr.splice(i, 1);
            }
        }
        return 'Original array:\n' + origin + '\nRemove a blank element from the above array:\n' + arr;
    },
    task9: function (str = 'Red, Green, Blue, White1, 3, 4, 5, 7String') {
        const text = [];
        const numbers = [];
        str = str.split(',');
        for (let i = 0; i < str.length; i++) {
            let arr = str[i];
            if (!isNaN(arr)) {
                numbers.push(arr);
            } else {
                arr = arr.trim().split('');
                for (let j = 0; j < arr.length; j++) {
                    if (!isNaN(arr[j])) {
                        numbers.push(arr[j]);
                        arr.splice(j, 1);
                    }
                }
                arr = arr.join('');
                text.push(arr);
            }
        }
        return `Original delimited string:\n${str}\nArray with numbers - ${numbers}\nArray with strings - ${text}`;
    },
    task10: function (arr = [2, 5, 1]) {
        let length = arr.length;
        console.log(arr);
        for (let i = 0; i < length - 1; i++) {
            let n = arr.shift();
            arr.push(n);
            console.log(arr);
        }
        return `Watch console`;
    },
    task11: function (arr = [1, 2, 3]) {
        let newArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            newArr.push(arr[i])
        }
        return newArr;
    },
    task12: function (arr = [7, 9, 5, 4, 5]) {
        const max = arr[0] > arr[(arr.length - 1)] ? arr[0] : arr[(arr.length - 1)];
        for (let i = 1; i < arr.length - 1; i++) {
            arr[i] = max;
        }
        return arr;
    },
    task13: function () {
        return Array.from(arguments);   //треба на вхід подати масиви
    },
    task14: function (arr = [1, 2, 3, 4, 5, 6, 7, 8, 5]) {
        let counterOfThree = 0;
        let counterOfFive = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 3) {
                counterOfThree++;
            } else if (arr[i] === 5) {
                counterOfFive++;
            }
        }
        return counterOfThree === 2 || counterOfFive === 2;
    },
    task15: function (arr = [11, 5, 7, 3, 2, 20, 21, 19]) {
        let maxOdd = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0 && arr[i] > maxOdd) {
                maxOdd = arr[i];
            }
        }
        return maxOdd;
    },
    task16: function (arr = [1, 3, 5, 2, 4, 6, 8]) {
        const newArr = arr.splice(0, 3);
        return newArr;
    },
    task17: function (arr = [1, 3, 5, 2, 4, 6, 8]) {
        let counter = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                counter++;
            }
        }
        return counter;
    },
    task18: function (arr = [5, 2, 3, 4, 1, 6, 7, 8, 9]) {
        let min = arr[0];
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            } else if (arr[i] > max) {
                max = arr[i];
            }
        }
        return `difference between the largest and smallest values is ${Math.abs(min - max)}`;
    },
    task19: function (arr = [5, 2, 3, 4, 1, 6, 7, 8, 9]) {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        let sum = 0;
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== min && arr[i] !== max) {
                sum += arr[i];
                count++;
            }
        }
        return (sum / count).toFixed(2) * 1;
    },
    task20: function (arr = [10, 15, 17, 17, 18, 25]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 17 && arr[i + 1] !== 17) {
                arr[i] = 0;
                arr[i + 1] = 0;
            } else if (arr[i] === 17 && arr[i + 1] === 17) {
                arr[i] = 0;
            }
        }
        return arr.reduce((x, y) => x + y);
    },
    task21: function (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        let sum = arr.filter(function (num, index, mas) {
            return (index + 1) % 3 === 0;
        });
        return sum.reduce((x, y) => x + y);
    },
    task22: function (arr = [3, 1, 5, 3, 5]) {
        for (let i = 0; i < arr.length; i++) {
            if (!(arr[i] === 3 || arr[i] === 5)) {
                return false;
            }
        }
        return true;
    },
    task23: function (arr = [1, 2, 1, 2, 3, 2, 5]) {
        let n = prompt('Input the number to validate it for "everywhere"');
        if (n === null || isNaN(n) || n.trim().length === 0) {
            return `Wrong data`;
        }
        n = +n;
        for (let i = 0; i < arr.length; i++) {
            let before = arr[i - 1];
            let after = arr[i + 1];
            if (before === undefined) {
                before = n;
            }
            if (after === undefined) {
                after = n;
            }
            if (arr[i] !== n && (before !== n || after !== n)) {
                return false;
            }
        }
        return true;
    },
    task24: function (arr = [1, 2, 3, 3, 4, 7, 5]) {
        let nextThree = false;
        let nextFive = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 3 && (arr[i - 1] === 3 || arr[i + 1] === 3)) {
                nextThree = true;
            }
            if (arr[i] === 5 && (arr[i - 1] === 5 || arr[i + 1] === 5)) {
                nextFive = true;
            }
        }
        return nextThree === nextFive ? false : true;
    },
    task25: function (arr = [1, 2, 6, 3, 6, 1]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 6 && arr[i + 1] === 6 && arr[i + 2] == 6) {
                return false;
            } else if (arr[i] === 6 && arr[i + 1] === 6) {
                return true;
            } else if (arr[i] === 6 && arr[i + 1] !== 6 && arr[i + 2] === 6) {
                return true;
            }
        }
        return false;
    },
    task26: function (arr = [1, 2, 4, 5, 3]) {
        let checkFotTwo = false;
        let checkForThree = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 2 && arr[i + 1] !== 3 && arr[i - 1] !== 3) {
                checkFotTwo = true;
            }
            if (arr[i] === 3 && arr[i + 1] !== 2 && arr[i - 1] !== 2) {
                checkForThree = true;
            }
        }
        return checkFotTwo === checkForThree;
    },
    task27: function (arr = [10, 20, 30, 40]) {
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            obj[arr[i]] = null;
        }
        console.log(obj);
        return 'Original array:\n' + arr + '\nIndex Hash:\n' + obj;
    },
    task28: function (arr = [10, 20, 30, 40, 10, 10, 20]) {
        let obj = {};
        let max = 0;
        for (let i = 0; i < arr.length; i++) {
            let counter = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    counter++;
                }
            }
            obj[arr[i]] = counter;
        }
        for (let i in obj) {
            if (obj[i] > max) {
                max = i;
            }
        }
        console.log(obj);
        return 'Original array:\n' + arr + '\nFrequency of numbers:\n' + obj + '\nThe most occurred item is - ' + max;
    },
    task29: function (arr = [10, 20, 30, 40, 10, 10, 20]) {
        return 'Original array:\n' + arr + '\nIf all items are identical?\n' + arr.every((value) => value === arr[0]);
    },
    task30: function (arr = ["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"]) {
        let search = prompt('Input string for start');
        if (search === null || search.trim().length === 0) {
            return 'Wrong value for search';
        }
        let res = [];
        search = search.trim();
        let lengthOfSearch = search.length;
        for (let i = 0; i < arr.length; i++) {
            let newStr = arr[i].substring(0, lengthOfSearch);
            if (newStr === search) {
                res.push(arr[i]);
            }
        }
        return 'Original array:\n' + arr + '\nSearch items start with \'' + search + '\':\n' + res;
    },
    task31: function (arr = [10, 20, 30, 40, 10, 10, 20]) {
        console.log('Original array:\n' + arr + '\nReverse array:\n');
        for (let i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
        return 'Watch console for result';
    },
    task32: function (arr = ["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"]) {
        let n = +prompt('Input the number of repetitions', 1);
        if (n === null || isNaN(n)) {
            return 'Wrong value';
        }
        let res = [];
        for (let i = 0; i < n; i++) {
            res.push(arr[i]);
        }
        return res;
    },
    task33: function (arr = ["abcde", "abdf", "adeab", "abdgeee", "bdefa", "abc", "ab", "a", "bacdef"]) {
        const origin = [...arr];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length - 1; j++) {
                if (arr[j].length > arr[j + 1].length) {
                    let temporaryValue = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temporaryValue;
                }
            }
        }
        return 'Original array:\n' + origin + '\nSorted array of strings by length\n' + arr;
    },
    task34: function (arr = [1, 2, 0, 4, 0, 0, 7, 8]) {
        const origin = [...arr];
        for (let i = arr.length - 1; i > 0; i--) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                arr.push(-1);
            }
        }
        return 'Original array:\n' + origin + '\nCompresed array is:\n' + arr;
    },
    task35: function (arr = [1, -4, 6, 7, -2, 0, 9, 13, -1]) {
        return arr.sort((a, b) => a - b);
    },
    task36: function (arr = [10, 20, 30, 40, 10, 10, 20]) {
        let n = +prompt('Input number for count', 0);
        let counter = 0;
        if (n === null || isNaN(n)) {
            return 'Wrong data';
        }
        arr.forEach((value) => {
            if (value === n) {
                counter++;
            }
        })
        return 'Number \'' + n + '\' appear in array\n' + arr + '\n' + counter + ' times';
    },
    task37: function (m = 5, n = 4) {
        let arr = [];
        let trans = [];
        let x = parseInt(prompt(`Input number from 1 to ${n}`));
        let y = parseInt(prompt(`Input number from 1 to ${n}`));
        if (isNaN(x) || isNaN(y) || x > n || y > n || x < 1 || y < 1) {
            return 'Wrong data';
        }
        x -= 1;
        y -= 1;
        for (let i = 0; i < m; i++) {
            arr[i] = [];
            trans[i] = [];
            for (let j = 0; j < n; j++) {
                let rand = Math.floor(Math.random() * 10);
                arr[i][j] = rand;
                trans[i][j] = rand;
            }
        }
        console.log('Original array:');
        console.log(arr);
        for (let i = 0; i < trans.length; i++) {
            for (let j = 0; j < trans.length; j++) {
                if (j === x) {
                    let temp = trans[i][x];
                    trans[i][x] = trans[i][y];
                    trans[i][y] = temp;
                }
            }
        }
        console.log('Transformed array:');
        console.log(trans);
        return 'Watch console';
    },
    task38: function (arr = [1, 2, 3, 4, 5, 1, 3, 4, 7, 8]) {
        let result = [];
        let obj = {};
        for (let i = 0; i < arr.length; i++) {
            let counter = 0;
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    counter++;
                }
            }
            obj[arr[i]] = counter;
        }
        for (let key in obj) {
            if (obj[key] * 1 >= 2) {
                result.push(key);
            }
        }
        return result;
    },
    task39: function (arr = [8, 4, 5, 7, 3, 10, 15, 24, 30]) {
        let odd = arr.filter((value) => value % 2 !== 0);
        return Math.min(...odd);
    },
    task40: function (arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
        let n = +prompt('Input number to shift');
        if (n === null || isNaN(n)) {
            return `Wrong data`;
        } else if (n > arr.length) {
            n = arr.length;
        }
        let right = confirm(`Would you like to shift on the right side?(otherwise will be left side)`);
        console.log(arr);
        if (right) {
            for (let i = 0; i < n; i++) {
                arr[i] = 0;
                console.log(arr);
            }
        } else {
            for (let i = arr.length - 1; i >= n; i--) {
                arr[i] = 0;
                console.log(arr);
            }
        }
        return `Watch console`;
    }
}
alert(tasks.task37());