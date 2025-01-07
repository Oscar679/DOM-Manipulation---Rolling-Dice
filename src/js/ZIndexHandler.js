function ZIndexHandler(element) {
    this.element = element;
    this.container = this.element.parentElement;
    this.construct();
}

ZIndexHandler.prototype.construct = function () {
    this.element.addEventListener("mousedown", function () {
        this.element.style.zIndex = this.getHighestZIndex() + 1;
    }.bind(this));
}

ZIndexHandler.prototype.getHighestZIndex = function () {
    var elements = this.container.children;
    console.log(elements);
    var highestIndex = 0;

    for (var i = 0; i < elements.length; i++) {
        var zIndex = parseInt(window.getComputedStyle(elements[i]).zIndex, 10) || 0;
        if (zIndex > highestIndex) {
            highestIndex = zIndex;
        }
    }
    return highestIndex;
}

ZIndexHandler.prototype.deStruct = function () {
    console.log("Destroying instance of ZIndexHandler.");
    this.element.removeEventListener("mousedown", function () {
        this.element.style.zIndex = this.getHighestZIndex() + 1;
    }.bind(this));
}