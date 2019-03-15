var ReTable = function () {
    this.table = document.querySelector(".studentsTable tbody");
    this.select = document.querySelector("#wrapper #groupe_select");
}

ReTable.prototype.tableWrite = function (groupsAr, groupeToTable) {
    this.gropsAr = groupsAr;
    this.groupeToTable = groupeToTable || 0;
    for (var j = 0; j < this.gropsAr[this.groupeToTable].students.length; j++) {
        // this.students[i].number = i + 1;
        var delBtn = document.createElement("button");
        delBtn.innerHTML = "DELETE";
        delBtn.classList.add("studBtnId_" + j);
        var newTableRow = document.createElement("tr");
        var cell = document.createElement("td");
        cell.innerHTML = j + 1;
        this.table.appendChild(newTableRow);
        var next = document.querySelector(".studentsTable tr:last-child");
        next.appendChild(cell);
        for (var key in this.gropsAr[this.groupeToTable].students[j]) {
            cell = document.createElement("td");
                cell.innerHTML = this.gropsAr[this.groupeToTable].students[j][key];
                next.appendChild(cell);
            
        }
        next.appendChild(delBtn);
    }
}

ReTable.prototype.optionsWrite = function (groupsAr) {
    this.gropsAr = groupsAr;
    var groupeSelect = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");
    for (var i = 0; i < this.gropsAr.length; i++) {
        var newOpt = document.createElement("option");
        newOpt.classList.add("groupe_" + i);
        newOpt.innerHTML = "Groupe " + i;
        groupeSelect.appendChild(newOpt);
    }
}

ReTable.prototype.clearTable = function () {
    var reserv = document.querySelector(".studentsTable .table_head");

    while (this.table.firstChild) {
        this.table.removeChild(this.table.firstChild);
    }
    this.table.appendChild(reserv);
}

ReTable.prototype.clearOption = function () {
    while (this.select.firstChild) {
        this.select.removeChild(this.select.firstChild);
    }
}
