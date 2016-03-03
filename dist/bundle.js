(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name, age) {
        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: "greet",
        value: function greet() {
            return "私の名前は" + this.name + "です。" + this.age + "歳です。";
        }
    }]);

    return Person;
}();

exports.default = Person;

},{}],2:[function(require,module,exports){
'use strict';

var _Person = require('./Person');

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taro = new _Person2.default('taro', 10);
console.log(taro.greet());

},{"./Person":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvUGVyc29uLmpzIiwic3JjL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTTtBQUNGLGFBREUsTUFDRixDQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBdUI7OEJBRHJCLFFBQ3FCOztBQUNuQixhQUFLLElBQUwsR0FBWSxJQUFaLENBRG1CO0FBRW5CLGFBQUssR0FBTCxHQUFXLEdBQVgsQ0FGbUI7S0FBdkI7O2lCQURFOztnQ0FNTTtBQUNKLDZCQUFlLEtBQUssSUFBTCxXQUFlLEtBQUssR0FBTCxTQUE5QixDQURJOzs7O1dBTk47OztrQkFXUzs7Ozs7Ozs7Ozs7QUNUZixJQUFJLE9BQU8scUJBQVcsTUFBWCxFQUFtQixFQUFuQixDQUFQO0FBQ0osUUFBUSxHQUFSLENBQVksS0FBSyxLQUFMLEVBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgfVxuXG4gICAgZ3JlZXQoKSB7XG4gICAgICAgIHJldHVybiBg56eB44Gu5ZCN5YmN44GvJHt0aGlzLm5hbWV944Gn44GZ44CCJHt0aGlzLmFnZX3mrbPjgafjgZnjgIJgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc29uXG4iLCJpbXBvcnQgUGVyc29uIGZyb20gJy4vUGVyc29uJ1xuXG5sZXQgdGFybyA9IG5ldyBQZXJzb24oJ3Rhcm8nLCAxMCk7XG5jb25zb2xlLmxvZyh0YXJvLmdyZWV0KCkpO1xuIl19
