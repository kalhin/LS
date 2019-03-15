window.onload = function () {
    homeWork2 = {

        ifArrIsInt(arr) {
            arr.forEach(function (el) {
                if (isNaN(parseInt(el))) {
                    alert("aray consisst in not only integers");
                    return false;
                }
            })
            return true;
        },
        ifArrIsStr(arr) {
            return arr.every(function (el) {
                return el instanceof String;
            })
        },
        task1: function (arr) {
            var inputArr = arr;
            var search = prompt("enter searching string");
            if (inputArr.indexOf(search) != -1) {
                alert(`check if ${search} in array TRUE`);
            }
            else {
                alert(`check if ${search} in array FALSE`);
            }
        },
        task2: function (arr) {
            if (arr.length >= 1) {
                if ((arr[0] === 7) || (arr.length - 1 === 7)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        task3: function (arr) {
            var rand = +prompt("Enter nmber of randomize");
            var out = [];
            for (var i = 0; i <= rand; i++) {
                var temp = Math.floor(Math.random() * 10);
                if (temp < arr.length) {
                    out.push(arr[temp])
                }
                else {
                    i--;
                }

            }
            return out;
        },
        task4: function (arr) {
            if (this.ifArrIsInt(arr)) {
                return (arr[0] === arr[arr.length - 1]);
            }
        },
        task5: function (arr) {
            var sum = 0;
            arr.forEach(function (el) {
                if (isNaN(parseInt(el))) {
                    alert("array consist in not only integers");
                    return;
                }
                sum += el;
            })
            alert(`giving array[${arr}]\nsum of the values: ${sum}`)
        },
        task6: function (arr) {
            var temp = {};
            for (var i = 0; i < arr.length; i++) {
                var el = arr[i];
                temp[el] = true;
            }

            return Object.keys(temp);
        },
        task7: function (arr1, arr2) {
            if (arr1.length < 1 || arr2.length < 1) {
                return;
            }
            if (this.ifArrIsInt(arr1) && this.ifArrIsInt(arr2)) {
                if ((arr1[0] === arr2[0]) || (arr1[arr1.length - 1] === arr2[arr2.length - 1])) {
                    return true
                }
                else {
                    return false;
                }
            }
        },
        task8: function (arr) {
            var blank = arr.indexOf("");
            if (blank == -1) {
                return arr;
            }
            var out = [];
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === "") {
                    continue;
                }
                else {
                    out.push(arr[j])
                }
            }
            return out;
        },
        task9: function (string) {
            var nums = [];
            var liters = [];
            var allstr = string.split("");
            for (var y = 0; y < allstr.length; y++) {

                if (!isNaN(+allstr[y]) && (allstr[y] != " ") && (allstr[y] != ",")) {
                    nums.push(allstr[y]);
                }
                else {
                    if (allstr[y] != ",") {
                        liters.push(allstr[y]);
                    }
                }
            }
            var words = this.task8(liters.join("").split(" "));

            console.log(nums);
            console.log(words);
            alert(`${words} \n ${nums}`)
        },
        task10: function (arr) {
            if (this.ifArrIsInt(arr)) {
                if (arr.length == 3) {
                    arr.unshift(arr.pop());
                    return arr;
                }
                else {
                    var err = new Error("ARR LENGTH IS NOT 3");
                    err.attrib = "WRONG LENGTH";
                    throw err;
                }
            }
        },
        task11: function (arr) {
            if (this.ifArrIsInt(arr)) {
                if (arr.length == 3) {
                    return arr.reverse();
                }
                else {
                    var err = new Error("ARR LENGTH IS NOT 3");
                    err.attrib = "WRONG LENGTH";
                    throw err;
                }
            }
        },
        task12: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var max = Math.max(arr[0], arr[arr.length - 1]);
                var outArr = arr.map(function (item) {
                    return item = max;
                })
                return outArr;
            }
            else {
                var err = new Error("ARR LENGTH IS NOT 3");
                err.attrib = "WRONG LENGTH";
                throw err;
            }
        },
        task13: function (arr) {
            var oute = [];
            arr.forEach(function (item) {
                if (!item.length) {
                    oute.push(item);
                }
                else {
                    for (h = 0; h < item.length; h++) {
                        oute.push(item[h]);
                    }
                }

            })
            return oute;

        },
        task14: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var fifth = 0;
                var threes = 0;
                arr.forEach(function (el) {
                    if (el === 3) {
                        threes++;
                    }
                    if (el === 5) {
                        fifth++;
                    }

                })
                return (fifth >= 2 || threes >= 2)
            }
        },
        task15: function (arr) {
            var oddAr = arr.filter(function (item) {
                if (item % 2 != 0) {
                    return item;
                }
            })

            return Math.max.apply(null, oddAr);
        },
        task16: function (arr) {
            if (this.ifArrIsInt(arr)) {
                return arr.slice(0, 3);
            }
        },
        task17: function (arr) {
            var odd = 0;
            arr.forEach(function (item) {
                if (!isNaN(+item) && (item % 2 == 0)) {

                    odd++;
                }
            })
            return odd;
        },
        task18: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var max = Math.max.apply(null, arr);
                var min = Math.min.apply(null, arr);
                return max - min;
            }
        },
        task19: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var max = Math.max.apply(null, arr);
                var min = Math.min.apply(null, arr);
                arr.splice(arr.indexOf(min), 1);
                arr.splice(arr.indexOf(max), 1);
                return arr.reduce(function (sum, cur) {
                    return sum + cur;
                }) / arr.length;
            }
        },
        task20: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var seventhin = arr.indexOf(17);
                return arr.slice(0, seventhin).reduce(function (sum, cur) {
                    return sum + cur;
                })
            }
        },
        task21: function (arr) {
            if (this.ifArrIsInt(arr)) {
                var third = [];
                var s = 2;
                do {
                    third.push(arr[s]);
                    s += 3;
                }
                while (s < arr.length)
                return third.reduce(function (sum, cur) {
                    return sum + cur;
                })
            }
        },
        task22: function (arr) {
            return arr.every(function (el) {
                return el === 3 || el === 5;
            })

        },
        task23: function (arr, nom) {
            for (var j = 0; j < arr.length - 1; j++) {
                if (arr[j] != nom && arr[j + 1] != nom) {
                    return false;
                }
            }
            return true;

        },
        task24: function (arr) {
            var threeFlag = false;
            var fiveFlag = false;
            for (var j = 0; j < arr.length - 1; j++) {

                if (arr[j] === 3 && arr[j + 1] === 3) {
                    threeFlag = true;
                }
                if (arr[j] === 5 && arr[j + 1] === 5) {
                    fiveFlag = true;
                }
            }
            if (threeFlag && fiveFlag) {
                return false;
            }
            else {
                return threeFlag || fiveFlag;
            }
        },
        task25: function (arr) {
            if (this.ifArrIsInt(arr)) {
                for (var j = 0; j < arr.length - 1; j++) {

                    if (arr[j] === 6 && arr[j + 1] === 6) {
                        return true
                    }
                    if (arr[j] === 6 && arr[j + 2] === 6) {
                        return true
                    }
                }
                return false;
            }
            else {
                var err = new Error("ARR CONSISTS IS NOT ONLY INT");
                err.attrib = "WRONG ARRAY";
                throw err;
            }
        },
        task26: function (arr) {
            var flag = false;
            if (this.ifArrIsInt(arr)) {
                var two = arr.indexOf(2);
                if (two != -1) {
                    arr.forEach(function (item, i) {

                        if ((item === 3) && (i > two)) {
                            flag = true;
                        }
                    })
                }
                return flag;
            }
            else {
                var err = new Error("ARR CONSISTS IS NOT ONLY INT");
                err.attrib = "WRONG ARRAY";
                throw err;
            }
        },
        task27: function (arr) {
            var outObj = {};
            arr.forEach(function (item) {
                outObj[item] = null;
            })
            return outObj;
        },
        task28: function (arr) {
            var outObj = {};
            arr.forEach(function (el) {
                var count = 0;
                for (var x = 0; x < arr.length; x++) {
                    if (el === arr[x]) {
                        count++;
                    }
                }
                outObj[el] = count;

            })
            return outObj;
        },
        task29: function () {
            var str = prompt("If all items are identical?\n enter string like 1,2,3,4");
            var arr = str.split(",");
            var flag = true
            arr.forEach(function (el) {
                for (var x = 0; x < arr.length; x++) {
                    if (el != arr[x]) {
                        flag = false;
                    }
                }

            })
            alert(`${flag}`);
        },
        task30: function (arr) {
            var str = prompt("Search items start with: (string like 'ab')");
            var outArr = arr.filter(function (el) {
                if (el.indexOf(str) == 0) {
                    return el;
                }
            })
            return outArr;
        },
        task31: function (arr) {
            return arr.reverse();
        },
        task32: function (arr, n) {
            var out = [];
            for (var g = 0; g < n; g++) {
                out.push(arr[g]);
            }
            return out;
        },
        task33: function (arr) {
            if (this.ifArrIsStr(arr)) {
                arr.sort(function (a, b) {
                    return a.length - b.length;
                })
                return arr
            }
            else {
                var err = new Error("ARR CONSISTS IS NOT ONLY STRING");
                err.attrib = "WRONG ARRAY";
                throw err;
            }
        },
        task34: function (arr) {
            var out = arr.filter(function (item) {
                return item != 0;
            })
            var zero = arr.filter(function (item) {
                return item === 0;
            })
            for (var d = 0; d < zero.length; d++) {
                out.push(-1);
            }
            return out
        },
        task35: function (arr) {
            arr.sort(function (a, b) {
                return a - b;
            })
            return arr
        },
        task36: function (arr, num) {
            var count = 0;
            arr.forEach(function (item) {
                if (item === num) {
                    count++;
                }
            })
            return count;
        },
        task37: function (arrMN, sw1, sw2) {
            var position1 = null;
            var position2 = null;
            arrMN.forEach(function (el, i) {
                var flag = true;
                for (var h = 0; h < sw1.length; h++) {
                    if (el[h] != sw1[h]) {
                        flag = false;
                    }

                    if (flag && h === sw1.length - 1) {
                        position1 = i
                    }

                }
            })
            arrMN.forEach(function (el, i) {
                flag = true;
                for (var j = 0; j < sw2.length; j++) {
                    if (el[j] != sw2[j]) {
                        flag = false;
                    }

                    if (flag && j === sw2.length - 1) {
                        position2 = i
                    }

                }
            })
            if (position1 == null || position2 == null) {
                var err = new Error("SUB ARR'S NOT PRESENT IN ARR");
                err.attrib = "WRONG SUBARRAY";
                throw err;
            }
            arrMN[position1] = sw2;
            arrMN[position2] = sw1;
            return arrMN;
        },
        task38: function (arr) {
            if (arr.length != 10) {
                var err = new Error("ARR MUST CONSIST 10 ELEMENTS");
                err.attrib = "WRONG ARRAY";
                throw err;
            }
            var repeated = {};
            arr.forEach(function (el, i) {

                if (arr.indexOf(el, i + 1) != -1) {
                    repeated[el] = true;
                }

            })

            alert(`Given array ${arr}\n repeated items ${Object.keys(repeated)}`)
        },
        task39: function (arr) {
            if (arr.length != 10) {
                var err = new Error("ARR MUST CONSIST 10 ELEMENTS");
                err.attrib = "WRONG ARRAY";
                throw err;
            }
            var noRepeated = {};
            arr.forEach(function (el, i) {

                if (arr.indexOf(el, i + 1) == -1) {
                    noRepeated[el] = true;
                }

            })

            alert(`Given array ${arr}\n  smolest not repeated item ${Math.min.apply(null, Object.keys(noRepeated))}`)
        },
        task40: function (arr, sw, n) {
            var sw = sw || "left";
            var n = n || 1;
            if (sw === "right") {
                for (var z = 0; z < n; z++) {
                    arr.unshift(arr.pop())
                }
            }
            if (sw === "left") {
                for (var y = 0; y < n; y++) {
                    arr.push(arr.shift())
                }
            }
            return arr;
        }



    }
    var str = [1, 2, 4, 8, 2, 4, 8, 9, 4, 7];
    console.log(homeWork2.task40(str, "right", 1));
}
