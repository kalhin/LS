"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReTable =
/*#__PURE__*/
function () {
  function ReTable() {
    _classCallCheck(this, ReTable);

    this.table = document.querySelector(".studentsTable tbody");
    this.select = document.querySelector("#wrapper #groupe_select");
  }

  _createClass(ReTable, [{
    key: "tableWrite",
    value: function tableWrite(groupsAr, groupeToTable) {
      this.gropsAr = groupsAr;
      this.groupeToTable = groupeToTable || 0;

      for (var j = 0; j < this.gropsAr[this.groupeToTable].students.length; j++) {
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
  }, {
    key: "optionsWrite",
    value: function optionsWrite(groupsAr) {
      this.gropsAr = groupsAr;
      var groupeSelect = document.querySelector("#wrapper .controls .groupe_controls #groupe_select");

      for (var i = 0; i < this.gropsAr.length; i++) {
        var newOpt = document.createElement("option");
        newOpt.classList.add("groupe_" + i);
        newOpt.innerHTML = "Groupe " + i;
        groupeSelect.appendChild(newOpt);
      }
    }
  }, {
    key: "clearTable",
    value: function clearTable() {
      var reserv = document.querySelector(".studentsTable .table_head");

      while (this.table.firstChild) {
        this.table.removeChild(this.table.firstChild);
      }

      this.table.appendChild(reserv);
    }
  }, {
    key: "clearOption",
    value: function clearOption() {
      while (this.select.firstChild) {
        this.select.removeChild(this.select.firstChild);
      }
    }
  }]);

  return ReTable;
}();