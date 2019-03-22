let singleOut = (obj) => {
    let list = document.createElement("ul");
    let outList = document.querySelector("#wrapper .list_Out");
    outList.appendChild(list);
    let listUl = document.querySelector("#wrapper .list_Out ul:last-child")
    for (let key in obj) {
        let li = document.createElement("li");
        li.innerHTML = `${key}: ${obj[key]}`;
        listUl.appendChild(li);

    }
}
let multOut = (arr) => {
    arr.forEach(element => {
        let list = document.createElement("ul");
        let outList = document.querySelector("#wrapper .list_Out");
        outList.appendChild(list);
        let listUl = document.querySelector("#wrapper .list_Out ul:last-child");
        for (let key in element) {
            let li = document.createElement("li");
            li.innerHTML = `${key}: ${element[key]}`;
            listUl.appendChild(li);

        }
    });

}
let clear = () => {
    let outList = document.querySelector("#wrapper .list_Out");
    while (outList.firstChild) {
        outList.removeChild(outList.firstChild);
    }
}