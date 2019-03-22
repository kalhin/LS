var Worker = function (_name, _lastName, _patronyme, _birthDate, _birthPlace, _ID, _pasp, _addres) {
    this.name = _name;
    this.lastName = _lastName;
    this.patronyme = _patronyme;
    this.birthDate = _birthDate;
    this.birthPlace = _birthPlace;
    this.ID = _ID;
    this.pasp = _pasp;
    this.addres = _addres;
}
Worker.prototype = Object.defineProperties(Worker, "name", {
    get: function () {
        return this.name
    },
    set:function(nam){
        this.name = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "last_name", {
    get: function () {
        return this.last_name
    },
    set:function(nam){
        this.last_name = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "patronyme", {
    get: function () {
        return this.patronyme
    },
    set:function(nam){
        this.patronyme= nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "birthDate", {
    get: function () {
        return this.birthDate
    },
    set:function(nam){
        this.birthDate = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "birthPlace", {
    get: function () {
        return this.birthDate
    },
    set:function(nam){
        this.birthPlace = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "ID", {
    get: function () {
        return this.ID
    },
    set:function(nam){
        this.ID = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "pasp", {
    get: function () {
        return this.pasp
    },
    set:function(nam){
        this.pasp = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "addres", {
    get: function () {
        return this.addres
    },
    set:function(nam){
        this.addres = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "position", {
    get: function () {
        return this.position
    },
    set:function(nam){
        this.position = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "baseSalory", {
    get: function () {
        return this.baseSalory
    },
    set:function(nam){
        this.baseSalory = nam;
    }
})
Worker.prototype = Object.defineProperties(Worker, "exp", {
    get: function () {
        return this.exp
    },
    set:function(nam){
        this.exp = nam;
    }
})