const topic_3 = {
    exercise_1: function() {
        const arr = ["Red", "Green", "Blue", "White"];
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'Green') {
                console.log(true);
            } else if (arr[i] === 'Pinc') {
                console.log(false);
            }
        }
    },
    exercise_2: function(arr) {
        if (typeof arr !== 'object') {
            console.log(`Your input type ${arr} is not array`);
        } else if (arr.length <= 1) {
            console.log(`The array length ${arr} is to small for this check`);
        } else if (arr[0] !== 7) {
            console.log(`The first element of array isn't 7. It is ${arr[0]}`);
        } else if (arr[arr.length - 1] !== 7) {
            console.log(`The last element of array isn't 7. It is ${arr[arr.length-1]}`);
        } else {
            console.log(arr[0] === 7 && arr[arr.length - 1] === 7);
        }
    },
    exercise_3: function() {
        const usernumber = prompt('Please, input your number');
        const newArr = [];

        function rundomArray() {
            for (let i = 0; i < usernumber; i++) {
                const rundomNumber = Math.floor(Math.random() * 100)
                newArr.push(rundomNumber);
            }
            if (newArr.length === 0) {
                return rundomeArray();
            }
        }
        rundomArray();
        console.log(newArr);
    },
    exercise_4: function(arr) {
        console.log(arr);
        return arr.length <= 1 ? `The array length ${arr} is to small for this check` :
            arr[0] === arr[arr.length - 1] ? true : false
    },
    exercise_5: function(arr) {
        console.log(arr);
        const sumOfNumbers = arr.reduce(function(accumulator, value) {
            return accumulator + value
        });
        console.log(`Sum of the values of the above array: ${sumOfNumbers}`);
    },
    exercise_6: function(arr) {
        console.log(arr);
        const newArr = arr.filter(function(element, index) {
            return arr.indexOf(element) === index;
        });
        console.log(newArr);
    },
    exercise_7: function(arr1, arr2) {
        console.log(arr1, arr2);
        if (arr1.length <= 1 && arr2.length <= 1) {
            console.log(`The arrays length is to small for this check`);
        } else {
            console.log(arr1[0] === arr2[0] || arr1[arr1.length - 1] === arr2[arr2.length - 1] ? true : false);
        }
    },
    exercise_8: function(arr) {
        console.log(arr);
        const newArr = arr.filter(Boolean);
        console.log(newArr);
    },
    exercise_9: function(str) { //need finish
        console.log(str);
        const arr = str.split(' ');
        console.log(arr)
        const newArr = arr.map(function(el) {
            if (el[el.length - 1] === ',') {
                return el.substring(0, el.length - 1);
            } else {
                return el;
            }
        });
        console.log(newArr.indexOf('1White'))
        const mixedEl = newArr.filter(function(el) {
            const splitEl = el.split('');
            for (let i = 0; i < splitEl.length; i++) {
                for (let j = 1; j < splitEl.length; j++) {
                    if (isNaN(splitEl[i]) === true && isNaN(splitEl[j]) === false ||
                        isNaN(splitEl[i]) === false && isNaN(splitEl[j]) === true) {
                        return splitEl;
                    }
                }
            }
        });
        console.log(mixedEl)
        console.log(typeof mixedEl, typeof newArr[3])
        const splitMixedEl = mixedEl[0].split('')
        console.log(splitMixedEl)
        const numberArray = [];
        const stringArray = [];
        separator(newArr);

        function separator(array) {
            array.forEach(function(element) {
                if (isNaN(parseInt(element))) {
                    stringArray.push(element)
                } else {
                    numberArray.push(parseInt(element));
                }
            });

            if (mixedEl.length > 0) {
                newArr.splice(newArr.indexOf(mixedEl[0]), 1)
            }
        }

        console.log(newArr)
        console.log(stringArray, numberArray)




        // const array = str.split(', ');
        // const numberArray = [];
        // const stringArray = [];

        // array.forEach(function(element) {
        //     if (isNaN(parseInt(element))) {
        //         stringArray.push(element)
        //     } else {
        //         numberArray.push(parseInt(element));
        //     }
        // });
        // console.log(stringArray, numberArray);
    },
    exercise_10: function(arr) {
        console.log(arr);
        const newArr = arr.concat(arr.splice(0, 1));
        console.log(newArr);
        // arr.shift(arr.push(arr[0]));
        // console.log(arr);
    },
    exercise_11: function(arr) {
        console.log(arr);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.unshift(arr[i]);
        }
        console.log(newArr);
        // console.log(arr.reverse());  
    },
    exercise_12: function(arr) {
        console.log(arr);
        let largNumb = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i] > largNumb ? largNumb = arr[i] : largNumb
        }
        const newArr = arr.map(function(element) {
            return largNumb;
        });
        console.log(newArr);
    },
    exercise_13: function(arr) {
        console.log(arr);
        const newArr = arr.reduce(function(accumulator, element) {
            return accumulator.concat(element);
        });
        console.log(newArr);
    },
    exercise_14: function(arr) {
        console.log(arr);
        const isThree = arr.filter((el) => el === 3);
        const isFive = arr.filter((el) => el === 5);
        isThree.length >= 2 && isFive.length >= 2 ? console.log(true) : console.log(false);
    },
    exercise_15: function(arr) {
        console.log(arr);
        const oddNumbers = arr.filter(function(element) {
            return Math.abs(element) % 2 === 1;
        });
        if (oddNumbers.length < 1) {
            console.log('In your array isn`t odd numbers')
        } else {
            let largeOdd = oddNumbers[0];
            for (let i = 1; i < oddNumbers.length; i++) {
                oddNumbers[i] > largeOdd ? largeOdd = oddNumbers[i] : largeOdd;
            }
            console.log(largeOdd);
        }
    },
    exercise_16: function(arr, num) {
        console.log(arr);
        const newArr1 = [];
        for (let i = 0; i < num; i++) {
            newArr1.push(arr[i]);
        }
        console.log(newArr1);
    },
    exercise_17: function(arr) {
        console.log(arr);
        let counter = 0;
        arr.forEach(function(element) {
            element % 2 === 0 ? counter++ : counter
        });
        console.log(counter);
    },
    exercise_18: function(arr) {
        console.log(arr);
        const largestNum = Math.max.apply(null, arr);
        const smallestNum = Math.min.apply(null, arr);
        console.log(largestNum - smallestNum);
    },
    exercise_19: function(arr) {
        console.log(arr);
        const largestNum = Math.max.apply(null, arr);
        const smallestNum = Math.min.apply(null, arr);
        const cutArr = arr.filter(function(element) {
            return element !== largestNum && element !== smallestNum;
        });
        const sumOfNumbers = cutArr.reduce(function(accumulator, element) {
            return accumulator + element;
        });
        const averageValue = sumOfNumbers / cutArr.length
        console.log(averageValue.toFixed(2));
    },
    exercise_20: function(arr) {
        console.log(arr);
        let sumOfNumbers = null;
        for (let i = 0; i < arr.length; i++) {
            arr[i] >= 17 ? sumOfNumbers : sumOfNumbers += arr[i]
        }
        console.log(sumOfNumbers);
    },
    exercise_21: function(arr) {
        console.log(arr);
        const arrThirdNumbers = arr.filter((el, i) => i % 3 === 0)
        const sumOfEvThirdNumb = arrThirdNumbers.reduce((accum, el) => accum + el);
        console.log(sumOfEvThirdNumb);
    },
    exercise_22: function(arr) {
        console.log(arr);
        const check = arr.every((el) => el === 3 || el === 5);
        check === true ?
            console.log('Your array contain only numbers 3 and 5') :
            console.log('Your array contain not only numbers 3 and 5');
    },
    exercise_23: function(arr, num) {
        console.log(arr, num);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                continue;
            } else if (arr[i + 1] === num || arr[i + 1] === undefined) {
                newArr.push(true);
            } else {
                newArr.push(false);
            }
        }
        const check = newArr.every((el) => el === true);
        check === true ? console.log(true) : console.log(false)
    },
    exercise_24: function(arr) {
        console.log(arr);
        const checkThree = arr.filter((el, i, arr) => arr[i] === 3 && arr[i + 1] === 3);
        const checkFive = arr.filter((el, i, arr) => arr[i] === 5 && arr[i + 1] === 5);
        if (checkThree.length > 0 && checkFive.length > 0) {
            console.log(false);
        } else if (checkThree.length > 0 || checkFive.length > 0) {
            console.log(true);
        } else {
            console.log(false);
        }
    },
    exercise_25: function(arr, num) {
        console.log(arr, num);
        const numInArr = arr.filter((el) => el === num);
        if (numInArr[0] !== num) {
            console.log(`The number ${num} isn't in the array ${arr}`);
        } else if (numInArr[0] === num && numInArr.length === 1) {
            console.log(`The number ${num} appears in the array ${arr} once`);
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num && arr[i + 1] === num) {
                    console.log(`The array cointains two ${num}'s next to each other`);
                } else if (arr[i] === num && arr[i + 2] === num) {
                    console.log(`The array cointains two ${num}'s separated by one element`);
                }
            }
        }
    },
    exercise_26: function(arr) {
        console.log(arr);
        let startFromTwo = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 2) {
                startFromTwo = arr.slice(i, arr.length)
                break;
            } else {
                continue;
            }
        };
        const isThree = startFromTwo.filter((el) => el === 3);
        isThree.length > 0 ? console.log(true) : console.log(false);
    },
    exercise_27: function(arr) {
        console.log(arr);
        const indexHash = {};
        arr.forEach((el) => indexHash[el] = null);
        console.log(indexHash);
    },
    exercise_28: function(arr) {
        console.log(arr);
        const counter = {};
        arr.forEach(function(el) {
            return check(el);
        });

        function check(num) {
            const everyNum = [];
            for (let i = 0; i < arr.length; i++) {
                arr[i] === num ? everyNum.push(arr[i]) : everyNum
            }
            counter[num] = everyNum.length
        }
        console.log(counter);

        // const count = {};
        // arr.forEach((el) => count[el] = (count[el] || 0) + 1);
        // console.log(count);
    },
    exercise_29: function(arr) {
        console.log(arr);
        const identical = arr.every((el) => el === 10);
        console.log(identical);
    },
    exercise_30: function(arr, str) {
        console.log(arr, str);
        const check = arr.filter((el) => el.substring(0, str.length) === str);
        console.log(check);
    },
    exercise_31: function(arr) {
        console.log(arr);
        const reverseArr = arr.reverse();
        reverseArr.forEach((el) => console.log(el));
    },
    exercise_32: function(arr, n) {
        console.log(arr, n);
        if (n > arr.length) {
            return `The ${n} is to big`
        } else {
            return arr.slice(0, n)
        }
    },
    exercise_33: function(arr) {
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i + 1] === undefined) {
                break;
            } else if (arr[i].length < arr[i + 1].length && arr[i] < arr[i + 1]) {
                continue;
            } else {
                const arr1 = [arr[i + 1], arr[i]]
                arr.splice(i, 2, arr1[0], arr1[1])
                continue;
            }
        }
        console.log(arr);
        // arr.sort((a, b) => a.length - b.length);
    },
    exercise_34: function(arr) {
        console.log(arr);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            (arr[i] !== 0) ? newArr.push(arr[i]): newArr;
        }
        const counter = arr.length - newArr.length
        let i = 0
        do {
            newArr.push(-1)
            i++
        } while (counter > i);
        console.log(newArr);
    },
    exercise_35: function(arr) {
        console.log(arr);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 0) {
                newArr.push(arr[i]);
            } else {
                newArr.unshift(arr[i]);
            }
        }
        console.log(newArr)
    },
    exercise_36: function(arr, n) {
        console.log(arr, n);
        const counter = arr.filter((el) => el === n);
        console.log(counter.length);
    },
    exercise_37: function() {
        const columns = parseFloat(prompt('Please, input size for COLUMN'));
        const rows = parseFloat(prompt('Please, input size for ROW'));
        const arr = [];

        while (arr.length < columns) {
            const newArr = []
            while (newArr.length < rows) {
                const randomNum = Math.floor(Math.random() * 10);
                newArr.push(randomNum)
            }
            arr.push(newArr);
        }
        console.log(arr);
        const changedArr = []
        for (let i = 0; i < arr.length; i++) {
            changedArr.push(arr[i]);
        }

        const m = Math.floor(Math.random() * columns)
        const n = Math.floor(Math.random() * rows)
        for (let i = 0; i < changedArr.length; i++) {
            let temp = changedArr[i][m];
            changedArr[i][m] = changedArr[i][n];
            changedArr[i][n] = temp;
            console.log(changedArr);
        }
        console.log(changedArr);
    },
    exercise_38: function(arr) {
        console.log(arr);
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j] && i !== j) {
                    newArr.push(arr[i]);
                } else {
                    continue;
                }
            }
        }
        const repeatEl = newArr.filter((el, i) => newArr.indexOf(el) === i);
        console.log(`The values ${repeatEl} repeated two and more times`);
    },
    exercise_39: function(arr) {
        console.log(arr);
        const unicEl = arr.filter((el, i) => arr.indexOf(el) === i);
        let smallestEl = unicEl[0];
        for (let i = 0; i < unicEl.length; i++) {
            unicEl[i] < smallestEl ? smallestEl = unicEl[i] : smallestEl
        }
        console.log(`The smallest nonpaired number is ${smallestEl}`);
    },
    exercise_40: function(arr, n, side) {
        console.log(arr);
        if (side === 'left') {
            while (n > 0) {
                const remFirstEl = arr.shift();
                arr.push(remFirstEl)
                n--;
            }
            console.log(arr)
        } else if (side === 'right') {
            while (n > 0) {
                const remFirstEl = arr.pop();
                arr.unshift(remFirstEl)
                n--;
            }
            console.log(arr)
        } else {
            console.log(`You are input isn't correct side "${side}". Please, enter correct side "right" or "left"`)
        }
    },
};
// topic_3.exercise_1();
// topic_3.exercise_2([7, 5, 'John', true, [1, 2, 3], 7]);
// topic_3.exercise_3();
// console.log(topic_3.exercise_4([12, 34, 23, 125, 12]));
// topic_3.exercise_5([12, 34, 23, 56]);
// topic_3.exercise_6([1, 2, 3, 4, 1, 2, 2, 3, 5, 6]);
// topic_3.exercise_7([4, 2, 3, 4], [1, 5, 36, 8]);
// topic_3.exercise_8(["Red", "Green", "", "Blue", "White"]);
// topic_3.exercise_9('Red, Green, Blue, 1Whi1te, 3, 4, 5, 7');
// topic_3.exercise_10([1, 2, 3]);
// topic_3.exercise_11([5, 1, 9]);
// topic_3.exercise_12([-10, 25, 13]);
// topic_3.exercise_13([
//     ["Red", true, "Blue", null],
//     [12, undefined, 56],
//     ["John"]
// ]);
// topic_3.exercise_14([2, 3, 2, 5, 6, 8, 3, 1, 2, 5, -5]);
// topic_3.exercise_15([-11, -7, 14, 0, -1]);
// topic_3.exercise_16(['John', 17, true, "Blue", undefined, null], 3);
// topic_3.exercise_17([1, 2, 3, 4, 1, 2, 2, 3, 5, 6]);
// topic_3.exercise_18([11, 0, 2, 57, 16]); //read about call, apply, bind and this context!!!
// topic_3.exercise_19([6, 2, -3, 4, 5]);
// topic_3.exercise_20([0, 21, 3, 16, -10]);
// topic_3.exercise_21([1, 2, 3, 4, 1, -2, 2, 3, -5, 6]);
// topic_3.exercise_22([5, 3, 5, 5, 3]);
// topic_3.exercise_23([1, 2, 5, 2, 3, 2], 2);
// topic_3.exercise_24([1, 2, 5, 1, 2, 3, 3]);
// topic_3.exercise_25([6, 2, 6], 6);
// topic_3.exercise_26([3, 5, 9, 7, 2, 9, 3]);
// topic_3.exercise_27([10, 20, 30, 40]);
// topic_3.exercise_28([10, 20, 30, 40, 10, 10, 20]);
// topic_3.exercise_29([10, 10, 10]);
// topic_3.exercise_30(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"], 'ad');
// topic_3.exercise_31([10, 20, 30, 40, 10, 10, 20]);
// console.log(topic_3.exercise_32(["abcde", "abdf", "adeab", "abdgse", "bdefa", "bacdef"], 3));
// topic_3.exercise_33(["abcde", "abdf", "adeab", "abdgeee", "bdefa", "abc", "ab", "a", "bacdef"]);
// topic_3.exercise_34([1, 0, 5, 0, 0, 3, 0]);
// topic_3.exercise_35([1, 2, -5, -1, -2, 0, 3]);
// topic_3.exercise_36([2, 3, 2, 5, 6, 2, 5, 2, 9, 5, 7, 3, 2, 1, -2, 0, -5], 2);
// topic_3.exercise_37();
// topic_3.exercise_38([2, 5, 2, 9, 5, 7, 3, 3, 1, 2]);
// topic_3.exercise_39([2, 5, 2, 9, 5, 7, 3, 3, 1, 2]);
// topic_3.exercise_40(['one', 'two', 'three', 'four', 'five'], 2, 'right');