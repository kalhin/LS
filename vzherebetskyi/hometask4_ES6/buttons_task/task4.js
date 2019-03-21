//-----------------------Single radio button is checked-------------------------------------
console.log('working!');

let rad = document.formA.choice;

let prev = null;
for (let i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
        if (this.value === 'single') {
            document.getElementById('answer').disabled = false;
        }
        else if (this.value === 'all') { 
            document.getElementById('answer').disabled = true;
            document.getElementById('answer').value = '';
    };
    });
};


function submitFunction(answer = document.getElementById('answer').value) {
    if (rad.value === 'single' && (!answer || (answer < 1 || answer > 100))) {
        alert('There is no answer or the answer is not within the range from 0 to 100. Please enter the right answer!')
    }
    else {
        let data = undefined;
        let element  = document.getElementById('answer_text');

        let request = new XMLHttpRequest();
        request.open('GET', 'https://jsonplaceholder.typicode.com/posts/' + answer, true);
        // request.open('GET', 'https://api.myjson.com/bins/56ce4', true);
        
        request.onload = function() {
            if (request.status >= 200 && request.status <= 400) {
            //Success!
                alert('Success!');
                element.innerHTML = '';
                data = JSON.parse(request.responseText);
                if (rad.value === 'single') {                
                for (let i in data) {
                    element.innerHTML += '<li>' + i + ' : ' + data[i] + '</li>';
                };
                }
                else if (rad.value === 'all') {
                    for (let i in data) {
                        let innerText = '';
                        for (let j in data[i]) {
                            innerText += j + ' : ' + data[i][j];
                        };
                        element.innerHTML += '<li>' + i + ' : ' + innerText + '</li>';
                    };
                };
            } else {
            //We reached our target server but it returned an error!
                alert('Error! Something is wrong');
            };
        };

        request.onerror = function() {
            alert('There was an error with connection!');
        };

        request.send();
    };
}





