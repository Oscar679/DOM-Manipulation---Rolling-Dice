
/** 
 * The initializing Main function.
 * Initializes event listeners for various icons.
 * 
 * @class
 */
function Main() {
    this.init();
}

/**
 * An IIFE that initializes the Main class.
 */
(function () {
    function initDocumentOnLoad() {
        new Main();
    }

    document.addEventListener("DOMContentLoaded", initDocumentOnLoad);
})();

/**
 * Various icons are extracted from the DOM.
 * 
 * Event listeners are added to the DOM-elements.
 * 
 * The event listeners trigger their individual application creator-method.
 * @returns {void}
 */
Main.prototype.init = function () {
    var diceBtn = document.getElementById("icon-dice");
    diceBtn.addEventListener("click", this.createDiceApp.bind(this));

    var clockBtn = document.getElementById("icon-clock");
    clockBtn.addEventListener("click", this.createClockApp.bind(this));
}

/**
 * Instantiates the dice application by creating a new instance of DiceApp.
 * 
 * @returns {void}
 */
Main.prototype.createDiceApp = function () {
    new DiceApp();
}

/**
 * Instantiates the clock application by creating a new instance of ClockApp.
 * 
 * @returns {void}
 */
Main.prototype.createClockApp = function () {
    new ClockApp();
}