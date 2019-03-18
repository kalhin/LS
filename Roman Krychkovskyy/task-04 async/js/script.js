let range = document.getElementById('range');
range.addEventListener('change', () => {
    if (range.value > 100) {
        let errorText = document.getElementById('error');
        errorText.style.display = 'flex';
        errorText.innerText = 'too many. Select a user with id from 1 to 100'
        range.value = 100;
    } else if (range.value < 1) {
        let errorText = document.getElementById('error');
        errorText.style.display = 'flex';
        errorText.innerText = 'too low. Select a user with id from 1 to 100'
        range.value = 1;
    } else {
        let errorText = document.getElementById('error');
        errorText.style.display = 'none';
    }
})
let submit = document.getElementById('button');
submit.addEventListener('click', () => {
    let all = document.getElementById('all').checked;
    if (all) {
        let request = new XMLHttpRequest();
        request.open('GET', `https://jsonplaceholder.typicode.com/posts`, false);
        request.send();
        let arr = JSON.parse(request.responseText);
        for (let i = 0; i < arr.length; i++) {
            let list = document.getElementById('list');
            let li = document.createElement('li');
            let str = '';
            for (let key in arr[i]) {
                str += `${key}: ${arr[i][key]}\n`
            }
            li.innerText = `{\n${str}}`;
            list.appendChild(li)
        }
    } else {
        let range = document.getElementById('range').value;
        let request = new XMLHttpRequest();
        request.open('GET', `https://jsonplaceholder.typicode.com/posts/${range}`, false);
        request.send();
        let list = document.getElementById('list');
        let li = document.createElement('li');
        li.innerText = request.responseText;
        list.appendChild(li)
    }
})
let clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    let list = document.getElementById('list');
    list.innerText = '';
})
function foo() {
    let all = document.getElementById('all').checked;
    let range = document.getElementById('range');
    if (all) {
        range.style.display = 'none';
    } else {
        range.style.display = 'flex';
    }
}