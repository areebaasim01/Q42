"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician + ' ' + "The Great");
    }
}
let make_great = ["Archimedes the Astonishing", 'Alistair the Amazing', 'Azura the Arcane'];
show_magicians(make_great);
