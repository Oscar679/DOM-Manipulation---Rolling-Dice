function DragHandler(element) {
    this.element = element;
    this.menuBar = this.element.firstChild;
    this.dragStart = this.dragStart.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this.construct();
}

DragHandler.prototype.construct = function () {
    this.menuBar.addEventListener("mousedown", this.dragStart);
}

DragHandler.prototype.dragStart = function (e) {
    e.preventDefault();

    var dragElemRect = this.element.getBoundingClientRect();

    console.log(dragElemRect);

    this.offsetX = e.clientX - dragElemRect.left;
    this.offsetY = e.clientY - dragElemRect.top;


    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
}

DragHandler.prototype.onMouseMove = function (e) {
    e.preventDefault();

    var x = e.clientX - this.offsetX;
    var y = e.clientY - this.offsetY;

    this.element.style.position = "absolute";
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
}

DragHandler.prototype.onMouseUp = function () {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
}

DragHandler.prototype.deStruct = function () {
    console.log("Destroying eventlisteners of DragHandler.");

    this.element.removeEventListener("mousedown", this.dragStart);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
}