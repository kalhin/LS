let validator = (num) => {
    if ((+num) < 1 || (+num > 100)) {
        alert("incorrect input");
        return false;
    }
    else {
        return +num;
    }
}