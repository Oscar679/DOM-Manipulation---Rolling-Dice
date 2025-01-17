/**
 * A class for creating and managing a clock application.
 * 
 * This class initializes the following:
 * This class initializes the following:
 *  - A dynamic DOM structure for the interface
 *    of the application.
 *  - Drag functionality through the instance of
 *    DragHandler class.
 *  - Z-index functionality through the instance
 *    of ZIndexHandler class.
 * 
 * @class
 */
function CreateClockApp() {
    this.construct();

    this.dragHandler = new DragHandler(this.windowWrapper);
    this.zIndexHandler = new ZIndexHandler(this.windowWrapper);
}

/**
 * Constructs the DOM dynamically for the clock application.
 * Initializes e.g. wrappers, buttons & li-elements.
 * 
 * @returns {void}
 */
CreateClockApp.prototype.construct = function () {
    this.windowWrapper = CreateDiceApp.prototype.createElement("div", {
        className: "clock-window-wrapper",
        appendTo: document.getElementById("page-content-wrapper")
    });

    this.menuWrapper = CreateDiceApp.prototype.createElement("div", {
        className: "clock-menubar-wrapper",
        appendTo: this.windowWrapper
    });

    this.closeBtn = CreateDiceApp.prototype.createElement("div", {
        className: "close",
        appendTo: this.menuWrapper,
        event: {
            click: function () {
                CreateDiceApp.prototype.deStruct.call(this);
            }.bind(this)
        }
    });

    this.contentWrapper = CreateDiceApp.prototype.createElement("div", {
        className: "clock-content-wrapper",
        appendTo: this.windowWrapper
    });

    this.clockDigitWrapperHour = CreateDiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "hour"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.hourLi = CreateDiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperHour
        });
    }

    this.clockDigitWrapperMinute = CreateDiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "minute"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.minuteLi = CreateDiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperMinute
        });
    }

    this.clockDigitWrapperSecond = CreateDiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "second"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.secondLi = CreateDiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperSecond
        });
    }
}