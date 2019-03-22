class AjaxRequestP {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }
    getPromise(url, params) {
        return new Promise((resolve) => {
            if (params) {
                url += `?params=${JSON.stringify(params)}`
            }
            this.xhr.open("GET", url);
            this.xhr.send();
            this.xhr.onreadystatechange = () => {
                if (this.xhr.readyState == 4) {
                    let response = this.xhr.response;
                    resolve(response);
                }
            }
        })
    }
}