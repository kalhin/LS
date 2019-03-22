class Room {
    constructor(roomNumber) {
        this.residents = []
        this.roomNumber = roomNumber;
    }
    getResidents() {
        return this.residents;
    }
    getRoomNumber() {
        return this.roomNumber;
    }
    setRoomNumber(num) {
        this.RoomNumber = num;
    }
    setResident(residentId) {
        if (this.residents.length < 3) {
            this.residents.push(residentId);
        }
        else {
            return "full";
        }
    }
}


class Hostel {
    constructor() {
        this.rooms = [];
    }
    getRooms() {
        return this.rooms;
    }
    createRoom(rumNum) {
        this.roomNumber = rumNum || this.rooms.length + 1;
        //this.room =;
        this.rooms.push(new Room(this.roomNumber));
    }
}






