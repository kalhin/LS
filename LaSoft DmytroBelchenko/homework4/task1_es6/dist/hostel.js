"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Room =
/*#__PURE__*/
function () {
  function Room(roomNumber) {
    _classCallCheck(this, Room);

    this.residents = [];
    this.roomNumber = roomNumber;
  }

  _createClass(Room, [{
    key: "getResidents",
    value: function getResidents() {
      return this.residents;
    }
  }, {
    key: "getRoomNumber",
    value: function getRoomNumber() {
      return this.roomNumber;
    }
  }, {
    key: "setRoomNumber",
    value: function setRoomNumber(num) {
      this.RoomNumber = num;
    }
  }, {
    key: "setResident",
    value: function setResident(residentId) {
      if (this.residents.length < 3) {
        this.residents.push(residentId);
      } else {
        return "full";
      }
    }
  }]);

  return Room;
}();

var Hostel =
/*#__PURE__*/
function () {
  function Hostel() {
    _classCallCheck(this, Hostel);

    this.rooms = [];
  }

  _createClass(Hostel, [{
    key: "getRooms",
    value: function getRooms() {
      return this.rooms;
    }
  }, {
    key: "createRoom",
    value: function createRoom(rumNum) {
      this.roomNumber = rumNum || this.rooms.length + 1; //this.room =;

      this.rooms.push(new Room(this.roomNumber));
    }
  }]);

  return Hostel;
}();