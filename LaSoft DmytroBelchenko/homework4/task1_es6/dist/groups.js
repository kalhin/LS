"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AllGroups =
/*#__PURE__*/
function () {
  function AllGroups() {
    _classCallCheck(this, AllGroups);

    this.groupsArr = [];
  }

  _createClass(AllGroups, [{
    key: "addGroup",
    value: function addGroup(grpNum) {
      this.grpNum = grpNum || this.groupsArr.length + 1;
      var groupe = new Group();
      groupe.setGroupNumber(this.grpNum);
      this.groupsArr.push(groupe);
    }
  }, {
    key: "delGroup",
    value: function delGroup(grpNum) {
      var _this = this;

      this.grpNum = grpNum;

      if (this.groupsArr.length > 1) {
        var delId = this.groupsArr.findIndex(function (el) {
          return el[grpNum] === _this.grpNum;
        });
        this.groupsArr.splice(delId, 1);
      } else {
        alert("YOU HAS ONLY THISONE GROUPE, DELITING IMPOSSIBLE");
      }
    }
  }]);

  return AllGroups;
}();