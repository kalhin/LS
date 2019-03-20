const getSinglePost = document.querySelector('.single');
const inputID = document.querySelector('.inputID');
const getAllPost = document.querySelector('.all');
const button = document.querySelector('.submitButton');


//input disabled
function on() {
    inputID.disabled = false;
}

function off() {
    inputID.disabled = true
}

//stop reload page on click enter
document.addEventListener('keypress', function(event) {
    if (event.which == '13') {
        event.preventDefault();
    }
});

//validate for checked radiobutton
button.onclick = function startSubmit() {
    if (!getSinglePost.checked && !getAllPost.checked) {
        alert('Please, make your post choice')
    } else {
        ajaxGet()
    }
}


function ajaxGet() {
    //check range and isNaN
    if (inputID.value < 1 || inputID.value <= 100 && !isNaN(inputID.value) || inputID.value !== 0) {
        const request = new XMLHttpRequest();


        request.onreadystatechange = function() {
            if (request.readyState === 4 && request.status === 200) {
                const ul = document.createElement('ul');
                document.querySelector('.getList').appendChild(ul);
                const obj = JSON.parse(request.responseText);
                for (let i = 0; i < obj.length; i++) {
                    if (getAllPost.checked) {
                        const li = document.createElement('li');
                        ul.appendChild(li);
                        li.innerHTML += obj[i].body;

                    } else {
                        if (obj[i].id == inputID.value) {
                            const li = document.createElement('li');
                            ul.appendChild(li);
                            li.innerHTML += obj[i].body;
                            break;
                        } else {
                            continue;
                        }
                    }
                }
            }
        }
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
        request.send();
    } else {
        alert('Please, enter ID in range from 1 to 100')
    }
}