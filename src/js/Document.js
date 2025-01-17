/** 
 * An event listener that initializes the program by creating an instance of Document class when DOM is loaded.
 * 
 * @returns {void}
 */
document.addEventListener("DOMContentLoaded", function () {
    new Document();
})

/** 
 * The initializing Document function.
 * Initializes event listeners for various icons.
 * 
 * @class
 */
function Document() {
    this.init();
}

/**
 * Various icons are extracted from the DOM.
 * 
 * Event listeners are added to the DOM-elements.
 * 
 * The event listeners trigger their individual application creator-method.
 * @returns {void}
 */
Document.prototype.init = function () {
    var diceBtn = document.getElementById("icon-dice");
    diceBtn.addEventListener("click", this.createDiceApp);

    var clockBtn = document.getElementById("icon-clock");
    clockBtn.addEventListener("click", this.createClockApp);
}

/**
 * Instantiates the dice application by creating a new instance of CreateDiceApp.
 * 
 * @returns {void}
 */
Document.prototype.createDiceApp = function () {
    new CreateDiceApp();
}

/**
 * Instantiates the clock application by creating a new instance of CreateClockApp.
 * 
 * @returns {void}
 */
Document.prototype.createClockApp = function () {
    new CreateClockApp();
}