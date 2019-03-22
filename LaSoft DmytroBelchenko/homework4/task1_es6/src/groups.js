class AllGroups {
    constructor() {
        this.groupsArr = [];
    }

    addGroup(grpNum) {
        this.grpNum = grpNum || this.groupsArr.length + 1;
        let groupe = new Group();
        groupe.setGroupNumber(this.grpNum);
        this.groupsArr.push(groupe);
    }
    delGroup(grpNum) {
        this.grpNum = grpNum;
        if (this.groupsArr.length > 1) {
            let delId = this.groupsArr.findIndex((el) => {
                return el[grpNum] === this.grpNum;
            })
            this.groupsArr.splice(delId, 1);
        }
        else {
            alert("YOU HAS ONLY THISONE GROUPE, DELITING IMPOSSIBLE");
        }
    }

}