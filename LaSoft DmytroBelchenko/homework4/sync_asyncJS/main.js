window.onload = () => {
    let request = new AjaxRequestP();
    let all = document.querySelector(".all");
    let one = document.querySelector(".one");
    let input = document.querySelector(".enter");

    all.onclick = () => {
        input.setAttribute("disabled", "disabled");
    }
    one.onclick = () => {
        input.removeAttribute("disabled", "disabled");
        clear();
    }
    reset.onclick = () => {
        input.removeAttribute("disabled", "disabled");
        clear();
    }
    subm.onclick = () => {
        let posts = input.value;
        if (all.checked) {
            request.getPromise(' https://jsonplaceholder.typicode.com/posts/'
            ).then((res) => {
                let out = JSON.parse(res);
                clear();
                multOut(out);
             })
        }
        else if (validator(posts)) {
            request.getPromise(` https://jsonplaceholder.typicode.com/posts/${posts}`
            ).then((res) => {
                let out = JSON.parse(res) ;
                singleOut(out);
            })
        }
      
    }
}