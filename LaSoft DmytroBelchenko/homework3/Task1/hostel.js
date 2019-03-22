var Room = function (roomNumber) {
    this.residents = []
    this.roomNumber = roomNumber;
}
Room.prototype.getResidents = function(){
    return this.residents;
}
Room.prototype.getRoomNumber = function(){
    return this.roomNumber;
}
Room.prototype.setRoomNumber = function(num){
    this.RoomNumber = num;
}
Room.prototype.setResident = function(residentId){
    this.residentId = residentId;
    if( this.residents.length < 3 ){
        this.residents.push(this.residentId);
    }
    else{
        return "full";
    }
}


var Hostel = function () {
    this.rooms = [];
}
Hostel.prototype.getRooms = function(){
    return this.rooms;
}
Hostel.prototype.createRoom = function(rumNum){
    this.roomNumber = rumNum||this.rooms.length+1;
    //this.room =;
    this.rooms.push( new Room(this.roomNumber));
}




