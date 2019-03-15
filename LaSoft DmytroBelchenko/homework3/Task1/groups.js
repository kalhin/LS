var AllGroups = function () {
    this.groupsArr = [];
}
AllGroups.prototype.getGroups = function () {
    return this.groupsArr;
}
AllGroups.prototype.addGroup = function (grpNum) {
    this.grpNum = grpNum||this.groupsArr.length + 1;
    var groupe = new Group();
    groupe.setGroupNumber(this.grpNum);
    this.groupsArr.push(groupe);
}
AllGroups.prototype.delGroup = function(grpNum) {
    this.grpNum = grpNum;
    if (this.groupsArr.length > 1) {
       var _this = this;
       var delId = this.groupsArr.findIndex(function (el) {
        return el[grpNum] === _this.grpNum;
    })
    this.groupsArr.splice(delId, 1);
    }
    else{
        alert("YOU HAS ONLY THISONE GROUPE, DELITING IMPOSSIBLE");
    }
}

