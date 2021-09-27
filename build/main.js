"use strict";
var person;
//eslint-disable-next-line prefer-const
person = 'Rory';
var buildPerson = function (person) {
    return "your person is " + person;
};
console.log(buildPerson(person));
