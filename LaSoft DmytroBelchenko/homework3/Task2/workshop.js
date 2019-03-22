var Depart = function (_d_name, _code, _cheef) {
    this.workers = [];
    this.depName = _d_name;
    this.code = _code;
    this.cheef = _cheef;
}
Depart.prototype.addWorker = function (_name, _last_name, _patromyme, _birthDate, _birthPlace, _ID, _pasp, _addres, _position, ) {
    this.worker = new Worker();
    this.worker.name = _name;
    this.worker.last_name = _last_name;
    this.worker.patronyme = _patromyme;
    this.worker.birthDate = _birthDate;
    this.worker.birthPlace = _birthPlace;
    this.worker.ID = _ID;
    this.worker.pasp = _pasp;
    this.worker.addres = _addres;
    this.worker.position = _position;
    if (this.workers.length < 20) {
        this.workers.push(this.worker);
    }
    else {
        return "no_vacancy"
    }
}

var Workshop = function () {
    this.departs = [];
}
Workshop.prototype.addDepart = function (dn, cd, shef) {
    this.depart = new Depart(dn,cd,shef);
    this.departs.push(this.depart);
}
