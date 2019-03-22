"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Book = function Book(janre, autor, number, name, price, status) {
  _classCallCheck(this, Book);

  this.autor = autor;
  this.janre = janre;
  this.name = name;
  this.number = number;
  this.status = status;
  this.price = price;
};

var Reader =
/*#__PURE__*/
function (_Student) {
  _inherits(Reader, _Student);

  function Reader(name, surname, patronyme, studTickNum) {
    var _this;

    _classCallCheck(this, Reader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Reader).call(this, name, surname, patronyme, studTickNum));
    _this.readingBooks = [];
    return _this;
  }

  _createClass(Reader, [{
    key: "givBooksPrice",
    value: function givBooksPrice() {
      var sum = 0;
      this.readingBooks.forEach(function (el) {
        sum += el.price;
      });
      return sum;
    }
  }, {
    key: "addBooks",
    value: function addBooks(book) {
      this.readingBooks.push(book);
    }
  }]);

  return Reader;
}(Student);

var Libruary =
/*#__PURE__*/
function () {
  function Libruary() {
    _classCallCheck(this, Libruary);

    this.readers = [];
    this.books = [];
  }

  _createClass(Libruary, [{
    key: "addReader",
    value: function addReader(name, surname, patronyme, studTickNum, univer) {
      var _this2 = this;

      this.name = name;
      this.surname = surname;
      this.patronyme = patronyme;
      this.studTickNum = studTickNum;
      this.allStud = univer;
      var isStudent = true;
      this.allStud.forEach(function (el) {
        for (var g = 0; g < el.length; g++) {
          if (el.students[g].studTickNum !== _this2.studTickNum) {
            isStudent = false;
          }
        }
      });

      if (isStudent) {
        this.readers.push(new Reader(this.name, this.surname, this.patronyme, this.studTickNum, this.birthDate, this.birthPlace, this.family, this.hobby, this.rating, this.sholship));
      } else {
        var err = new Error("NOT STUDENT");
        err.status = "HI_IS_NOT_STUD";
        throw err;
      }
    }
  }, {
    key: "loadBook",
    value: function loadBook(janre, autor, name, price, status) {
      var number = this.books.length + 1;
      this.books.push(new Book(janre, autor, number, name, price, status));
    }
  }, {
    key: "bookToRent",
    value: function bookToRent(book, reader, date) {
      if (this.books[book].status == 0) {
        this.books[book].status = new Date(date);
        this.readers[reader].addBooks(this.books[book]);
      } else {
        alert("Book ".concat(this.books[book].name, " already in rent"));
        return "n/a";
      }
    }
  }]);

  return Libruary;
}();