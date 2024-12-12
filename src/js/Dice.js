function Dice() {
    this.construct();
}

Dice.prototype.construct = function () {
    console.log('In constructor of Dice.');

    this.value = this.roll();
}

Dice.prototype.roll = function () {
    return Math.floor(Math.random() * 6) + 1;
}

Dice.prototype.render = function () {
    var diceSides = new Array("one", "two", "three", "four", "five", "six");

    this.liDice = document.createElement("li");
    this.liDice.classList.add("dice", "dice-side-" + diceSides[this.value - 1]);

    return this.liDice;
    // Om jag vet vad själva applikationens eller då alltså diceContentWrappers dimensioner är kan jag använda dessa för att räkna ut hur många tärningar som får plats för aktuell gränssnittsstorlek
}