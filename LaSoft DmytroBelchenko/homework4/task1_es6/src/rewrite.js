class ReTable {
    constructor() {
        this.table = document.querySelector(".studentsTable tbody");
        this.select = document.querySelector("#wrapper #groupe_select");
    }
    tableWrite(groupsAr, groupeToTable) {
        this.gropsAr = groupsAr;
        this.groupeToTable = groupeToTable || 0;
        for (let j = 0; j < this.gropsAr[this.groupeToTable].students.length; j++) {
            let delBtn = document.createElement("button");
            delBtn.innerHTML = "DELETE";
            delBtn.classList.add("studBtnId_" + j);
            let newTableRow = document.createElement("tr");
            let cell = document.createElement("td");
            cell.innerHTML = j + 1;
            this.table.appendChild(newTableRow);
            let next = document.querySelector(".studentsTable tr:last-child");
            next.appendChild(cell);
            for (let key in this.gropsAr[this.groupeToTable].students[j]) {
                cell = document.createElement("td");
                cell.innerHTML = this.gropsAr[this.groupeToTable].students[j][key];
                next.appendChild(cell);

            }
            next.appendChild(delBtn);
        }
    }

    optionsWrite(groupsAr) {
        this.gropsAr = groupsAr;
        let groupeSelect = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");
        for (var i = 0; i < this.gropsAr.length; i++) {
            let newOpt = document.createElement("option");
            newOpt.classList.add("groupe_" + i);
            newOpt.innerHTML = "Groupe " + i;
            groupeSelect.appendChild(newOpt);
        }
    }




    clearTable() {
        let reserv = document.querySelector(".studentsTable .table_head");

        while (this.table.firstChild) {
            this.table.removeChild(this.table.firstChild);
        }
        this.table.appendChild(reserv);
    }

    clearOption() {
        while (this.select.firstChild) {
            this.select.removeChild(this.select.firstChild);
        }
    }
}