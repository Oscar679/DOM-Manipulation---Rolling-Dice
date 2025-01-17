/**
 * A class for creating and managing the z-index of an application.
 * Initializes the construction of the functionality.
 * 
 * @class
 * 
 * @param {HTMLElement} element - The HTML element which is being handled.
 */
function ZIndexHandler(element) {
    this.element = element;
    this.container = this.element.parentElement;
    this._onMouseDown = this._updateZIndex.bind(this);
    this.construct();
}

/**
 * Constructs and initializes an eventlistener for which item that is being targeted.
 * 
 * @returns {void}
 */
ZIndexHandler.prototype.construct = function () {
    this.element.addEventListener("mousedown", this._onMouseDown);
}

/**
 * Updates the z-index of the targeted element.
 * 
 * @returns {void}
 */
ZIndexHandler.prototype._updateZIndex = function () {
    this.element.style.zIndex = String(this.getHighestZIndex() + 1);
}

/**
 * Resets highestIndex variable.
 * Establishes the item with the highest z-index of the DOM and returns the value.
 * 
 * @returns {number} - The index of the item that holds the higest z-index at the given time.
 */
ZIndexHandler.prototype.getHighestZIndex = function () {
    var elements = this.container.children;
    var highestIndex = 0;

    for (var i = 0; i < elements.length; i++) {
        var zIndex = parseInt(window.getComputedStyle(elements[i]).zIndex, 10) || 0;
        if (zIndex > highestIndex) {
            highestIndex = zIndex;
        }
    }
    return highestIndex;
}

/**
 * Destructs the eventlistener for dynamic z-index functionality.
 * 
 * @returns {void}
 */
ZIndexHandler.prototype.deStruct = function () {
    this.element.removeEventListener("mousedown", this._onMouseDown);
}