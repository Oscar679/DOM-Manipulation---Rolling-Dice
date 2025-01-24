/**
 * A class for creating and managing individual die.
 * 
 * The class initializes the following:
 *  - Randomization of the value of the die.
 *  - Creation of DOM representation of the die.
 * 
 * @class
 */
function Dice() {
    this.value = null;
    this.liDice = null;
    this.construct();
}

/**
 * Initializes a random value.
 * 
 * @returns {void}
 */
Dice.prototype.construct = function () {
    this.value = this.roll();
    this.liDice = this.render();
}

/**
 * Randomizes a value in the range of 1-6.
 * 
 * @returns {number} - The randomized value.
 */
Dice.prototype.roll = function () {
    this.value = Math.floor(Math.random() * 6) + 1;
    return this.value;
}

/**
 * Creates a li-element and adds a CSS class
 * according to its value.
 * 
 * @returns {HTMLElement} - The created DOM element (die).
 */
Dice.prototype.render = function () {
    var diceSides = new Array("one", "two", "three", "four", "five", "six");

    this.liDice = document.createElement("li");
    this.liDice.classList.add("dice", "dice-side-" + diceSides[this.value - 1]);

    return this.liDice;
}

Dice.prototype.updateValue = function () {
    var diceSides = new Array("one", "two", "three", "four", "five", "six");

    this.value = this.roll();

    this.liDice.classList.remove(...this.liDice.classList);

    this.liDice.classList.add("dice", "dice-side-" + diceSides[this.value - 1]);

    return this.liDice;
}