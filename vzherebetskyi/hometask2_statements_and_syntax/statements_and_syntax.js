//------------------------Creates a Simple Hashtable--------------------------

class DumbMap {
    constructor() {
        this.list = {};
    };

    get(x) {
        // console.log(`get ${x}`);
        let result;
        for (let i in this.list) {
            if(i == x) {
                result = this.list[i];
            }; 
        };
        return result;
    };

    set(x, y) {
        // console.log(`set ${x} to ${y}`)
        this.list[x] = y;
    };

    setIncrement(x) {
        this.list[x] = 1;
    };

    increaseIncrement(x) {
        for (let i in this.list) {
            if(i == x) {
                this.list[i] += 1;
            };
        };
    };
}

//----------------------------------------------------------------------------

let hometask2 = {
    
    task1(array, testValue) {
       let trigger = 0; 
       array.map((element) => element === testValue && trigger++);
       console.log(!!trigger);               
    },

    task2(array) {
        console.log(array[array.length - 1] === 7 || array[0] === 7);
    },

    task3(array, n) {
        let answer = [];
        let i;
        while (n > 0) {
            i = Math.floor(Math.random() * array.length);
            answer.push(array[i]);
            n--;
        };
        console.log(answer);
    },

    task4(array1, array2) {
        let i = 0;
        let trigger = 0;
        if (array1[0].length === array2.length && array1[array1.length -1].length === array2.length)
        {
            while (i < array2.length) {
                if (array1[0][i] !== array2[i]) {trigger = 1;};
                if (array1[array1.length -1][i] !== array2[i]) {trigger = 1;};
                i++;
            };
            trigger === 1 ? console.log(false) : console.log(true);
        }
        else console.log(false);
    },

    task5(array) {
        let i = 0;
        array.map((element) => i += element);
        console.log(i);
    },

    task6(array) {
        let answer = [];
        array.map((element) => answer.indexOf(element) === -1 ? answer.push(element) : answer);
        console.log(answer);
    },

    task7(array1, array2) {
        console.log(array1[0] === array2[0] || array1[array1.length - 1] === array2[array2.length - 1]);
    },

    task8(array) {
        let answer = array.filter((element) => element);
        console.log(answer);
    },

    task9(string) {
        let array1 = [];
        let array2 = [];
        string.split('').filter((char) => +char ? array1.push(+char) : ((char.charCodeAt(0) === 32 || (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)) ? array2.push(char) : array2));
        console.log(array1, array2.join('').trim().split(' '));
    },

    task10(array) {
        console.log(array.concat(array.shift()));
    },

    task11(array) {
        console.log(array.reverse());
    },

    task12(array) {
        let a;
        array[0] > array[array.length - 1] ? a = array[0] : a = array[array.length - 1];
        for (let i = 0; i < array.length; i++) {
            array[i] === a ? array : array.splice(i, 1, a);
        };
        console.log(array);
    },

    task13(array) {
        let answer = [];
        let i = 0;
        while (i < array.length) {
            answer = answer.concat(array[i]);
            i++;
        };
        console.log(answer);
    },

    task14(array) {
        let threeOcurrence = array.filter((element) => element === 3); 
        let fiveOcurrence = array.filter((element) => element === 5);
        console.log(threeOcurrence.length === 2 || fiveOcurrence.length === 2);
    },

    task15(array) {
        let answer = array.filter((element) => element % 2 != 0).sort((a,b) => a < b);
        console.log(answer[0]);
    },

    task16(array) {
        console.log(array.slice(0,3));
    },

    task17(array) {
        let answer = array.filter((element) => element %2 === 0);
        console.log(answer.length);
    },

    task18(array) {
        let answer = array.sort((a,b) => a < b); 
        console.log(answer[0] - answer[answer.length - 1]);
    },

    task19(array) {
        let sorted = array.sort((a,b) => a < b);
        let i = 1; let sum = 0;
        while (i < sorted.length - 1) {
            sum += sorted[i];
            i++;
        };
        console.log(sum / (array.length - 2));
    },

    task20(array) {
        let answer;
        let i = 0;
        let removed;
        if (array.indexOf(17) !== -1) {
            removed = array.splice(0, array.indexOf(17));
            answer = removed.map((element) => i += element);
        }
        else answer = array.map((element) => i += element);
        console.log(answer[answer.length - 1]);
    },

    task21(array) {
        let answer = 0;
        let i = 2;
        while (i < array.length) {
            answer += array[i];
            i += 3;
        };
        console.log(answer);
    },

    task22(array) {
        array.sort((a,b) => a < b);
        console.log((array[0] === 3 && array[array.length - 1] === 3) || (array[0] === 5 && array[array.length - 1] === 5));
    },

    task23(array, n) {
        let trigger = 1;
        if (array.indexOf(n) === 0 || array.indexOf(n) === 1) {
            let i = array.indexOf(n);
            while (i < array.length)
            {
                if (array[i] !== n || array[i - 1] === n || array[i + 1] === n) {
                    trigger = 0; break;
                };
                i += 2;
            };
            console.log(!!trigger);
        }
        else console.log(false);
    },

    task24(array) {
        let test = [];
        if (array.indexOf(3) !== -1 || array.indexOf(5) !== -1) {
            let i = 0;
            while (i < array.length) {
                if (array[i] === array[i + 1]) {
                    test.push(array[i]);
                };
                i++;
            };
            console.log((test.indexOf(3) !== -1 && test.indexOf(5) === -1) || (test.indexOf(3) === -1 && test.indexOf(5) !== -1));
        } 
        else console.log(false);
    },

    task25(array) {
        let i = 0; let answer = 0;
        if (array.indexOf(6) !== -1) {
           while (i < array.length) {
            if (array[i] === 6) {(array[i] === array[i + 1] || array[i] === array[i + 2]) ? answer = 1 : answer;};
            i++;
           };
           console.log(!!answer);
        } 
        else console.log(false);
    },

    task26(array) {
        console.log(array.indexOf(2) !== -1 && array.indexOf(3) !== -1 && (array.indexOf(2) < array.indexOf(3)));
    },

    task27(array) {
        let answer = new DumbMap();
        array.map((element) => answer.set(element, null));
        console.log(answer.get(10));
    },

    task28(array) {
        let i = 0;
        let setOfNumbers = [];
        let sorted;
        let sortedArray = new DumbMap();
        while (i < array.length) {
            if (sortedArray.get(array[i]) === undefined) {
                sortedArray.setIncrement(array[i]);
                setOfNumbers.push(array[i]);
            }
            else sortedArray.increaseIncrement(array[i]);
            i++;
        };
        sorted = setOfNumbers.map((element) => [element, sortedArray.get(element)]).sort((a,b) => a[1] < b[1]);
        console.log(sorted[0]);        
    },

    task29(array) {
        let i = 1;
        array.map((element) => array[0] === element ? i : i = 0);
        console.log(!!i);
    },

    task30(array, string) {
        let answer = [];
        array.map(element => element.substr(0, string.length) === string ? answer.push(element) : answer);
        console.log(answer);
    },

    task31(array) {
        array.reverse();
        let i = 0;
        while (i < array.length) {
            console.log(array[i]);
            i++;
        };
    },

    task32(array, n) {
        let i = 0;
        while (i < n) {
            console.log(array[i]);
            i++;
        };
    },
    
    task33(array) {
        console.log(array.sort((a,b) => a.length > b.length));
    },

    task34(array) {
        let answer = array.filter((element) => element !== 0);
        let i = 0; let emptyArray = [];
        while (i < array.length - answer.length) {
            emptyArray.push(-1);
            i++;
        };
        console.log(answer.concat(emptyArray));
    },

    task35(array) {
        let positive = array.filter((element) => element >= 0);
        let negative = array.filter((element) => element < 0);
        console.log(negative.concat(positive));
    },

    task36(array, number) {
        if (array.indexOf(number) !== -1) {
            let timesAppeared = array.filter((element) => element === number);
            console.log(`The number ${number} appeared ${timesAppeared.length} times.`)
        }
        else console.log('Zero times appeared.');
    },

    task37(array, n1, n2) {
    // n1 and n2 are number of columns that you want to swap
        let i = 0;
        let arraySwitched = [];
        while (i < array.length) {
            arraySwitched.push(array[i].map((element, k) => {
                if (k === n1) {
                    return array[i][n2];
                }
                else if (k === n2) {
                    return array[i][n1];
                }
                else return element;
            }));
            i++;
        };
        console.log(arraySwitched);
    },

    task38(array) {
        let i = 0;
        let sortedArray = new DumbMap();
        let uniqueNumbers = [];
        while (i < array.length) {
            if (sortedArray.get(array[i]) === undefined) {
                sortedArray.setIncrement(array[i]);
                uniqueNumbers.push(array[i]);
            }
            else sortedArray.increaseIncrement(array[i]);
            i++;
        };
        let answer;
        let j = 0;
        while (j < uniqueNumbers.length) {
            answer = uniqueNumbers.filter((element) => sortedArray.get(element) >= 2);
            j++;
        };
        console.log(array);
        console.log(answer);
    },

    task39(array) {
        let i = 0;
        let uniqueNumbers = [];
        while(i < array.length) {
            uniqueNumbers.indexOf(array[i]) === -1 ? uniqueNumbers.push(array[i]) : uniqueNumbers;
            i++;
        };
        console.log(array);
        console.log(uniqueNumbers.sort((a,b) => a > b)[0]);
    },

    task40(array,k,direction) {
        let answer = [];
        if (direction === 'right') {
           answer = array.slice(array.length - k, array.length).concat(array.slice(0, array.length - k));
        }
        else if (direction === 'left') {
            answer = array.slice(k, array.length).concat(array.slice(0, k));
        };
        console.log(answer);
    }
}

// hometask2.task1(['red','green','blue','white','black','yellow','one'], 'pink');
// hometask2.task2([7,1,2,3,4,5,6,7,88,9,0,10,12,55,67,98,7]);
// hometask2.task3([12,2,3,5,77,89,56,1,44,777,7,512], 3);
// hometask2.task4([[3,2,5],[3],[4,5,6],[7,88,12,3],[3,2,5]],[3,2,5]);
// hometask2.task5([12,5,6,100]);
// hometask2.task6([1,1,2,3,4,5,6,7,7,7,8,9,10,11,12]);
// hometask2.task7([1,2,3,4,5],5);
// hometask2.task8(['blue','','','red','white','test','1','2']);
// hometask2.task9('Red, blue, white, green, red1, 2, 3, 4, 5');
// hometask2.task10([2,3,4,5,6,7,8]);
// hometask2.task11([1,2,3,4,5]);
// hometask2.task12([7,2,3,4,5]);
// hometask2.task13([['test'], ['colour'], ['blue'], [2]]);
// hometask2.task14([3,2,5,3,3,5]);
// hometask2.task15([1,2,4,6,8,23,28,93,94]);
// hometask2.task16([1,2,4,6,8,23,28,93,94]);
// hometask2.task17([1,2,4,6,8,23,28,93,94,98]);
// hometask2.task18([6,8,23,28,93,94,98,1,2,4]);
// hometask2.task19([3,3,3,96,3,3,3,1,3,3]);
// hometask2.task20([1,2,3,4,4,6]);
// hometask2.task21([1,2,3,4,4,6,1,1,1,1,1,2]);
// hometask2.task22([3,3,3,3,3,3,3,3]);
// hometask2.task23([1,2,2,1,2,1,3,1,4,1,3,1,5],1);
// hometask2.task24([1,1,2,3,5,5,7,7]);
// hometask2.task25([1,1,2,3,5,33,1,6,5,22,7,1,6,8,9]);
// hometask2.task26([1,1,4,5,2,6,3,5,6,2]);
// hometask2.task27([10,20,30,40]);
// hometask2.task28([1,2,2,2,34,34,34,34,34,5,5,5,5,5,5,5,5,5,5,1,1,778,778,333]);
// hometask2.task29([34,34,34,34,34,34,34,34,34]);
// hometask2.task30(['abcde', 'abdf', 'aseab', 'abdgsea', 'bdefa', 'bacdef'], 'b');
// hometask2.task31([1,2,3,4,5,6,7]);
// hometask2.task32(['abcde', 'ray', 'takeshi', 'kitano', 'Milan', 'New York', 'Toronto'], 5);
// hometask2.task33(['abcde', 'ray', 'takeshi', 'kitano', 'Milan', 'New York', 'Toronto', 'Kyiv', 'a']);
// hometask2.task34([1,2,3,4,0,50,0,0,34,42,0,5,7,7]);
// hometask2.task35([-1,2,34,55,67,7,8,9,-1,-1,0,0,34,42,-50,13,-1]);
// hometask2.task36([1,1,1,1,55,67,80,45,1,2,3,3,4,3,1,2,1,3], 90);
// hometask2.task37([[1,2,3],[1,2,3],[1,2,3],[1,2,3],[1,2,3]], 0, 2);
// hometask2.task38([1,1,1,1,23,43,42,42,5,5,5,5,5,67,8,5,5]);
// hometask2.task39([1,1,1,1,23,43,42,42,5,5,5,5,5,67,8,5,5]);
// hometask2.task40([1,2,3,4,5,6,7,8,9,10],6,'right');
