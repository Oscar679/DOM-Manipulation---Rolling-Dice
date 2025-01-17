/**
 * A class for creating and managing the drag functionality of an application.
 * Initiaizes the construction of the fundamental functionality.
 * 
 * @class
 *  
 * @param {HTMLElement} element - The HTML element which is being handled.
 */
function DragHandler(element) {
    this.element = element;
    this.menuBar = this.element.firstChild;
    this.dragStart = this.dragStart.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.construct();
}

/**
 * Constructs and initializes an eventlistener for which item that is being targeted.
 * 
 * @returns {void}
 */
DragHandler.prototype.construct = function () {
    this.element.firstChild.addEventListener("mousedown", this.dragStart);
}

/**
 * Dynamically constructs drag-functionality.
 * 
 * @param {MouseEvent} e - The mouse event.
 * 
 * @returns {void}
 */
DragHandler.prototype.dragStart = function (e) {
    e.preventDefault();

    var dragElemRect = this.element.getBoundingClientRect();

    this.offsetX = e.clientX - dragElemRect.left;
    this.offsetY = e.clientY - dragElemRect.top;


    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
}

/**
 * Calculates the position of moving target.
 * 
 * @param {MouseEvent} e - The mouse event.
 * 
 * @returns {void}
 */
DragHandler.prototype.onMouseMove = function (e) {
    e.preventDefault();

    var x = e.clientX - this.offsetX;
    var y = e.clientY - this.offsetY;

    this.element.style.position = "absolute";
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
}

/**
 * Removes eventlisteners when mouse button is released which kills the dragging process.
 * 
 * @returns {void}
 */
DragHandler.prototype.onMouseUp = function () {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
}

/**
 * Destructs eventlisteners for dynamic drag functionality.
 * 
 * @returns {void}
 */
DragHandler.prototype.deStruct = function () {
    this.element.removeEventListener("mousedown", this.dragStart);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
}