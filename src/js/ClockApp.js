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
function ClockApp() {
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
ClockApp.prototype.construct = function () {
    this.windowWrapper = DiceApp.prototype.createElement("div", {
        className: "clock-window-wrapper",
        appendTo: document.getElementById("page-content-wrapper")
    });

    this.menuWrapper = DiceApp.prototype.createElement("div", {
        className: "clock-menubar-wrapper",
        appendTo: this.windowWrapper
    });

    this.closeBtn = DiceApp.prototype.createElement("div", {
        className: "close",
        appendTo: this.menuWrapper,
        event: {
            click: function () {
                DiceApp.prototype.deStruct.call(this);
            }.bind(this)
        }
    });

    this.contentWrapper = DiceApp.prototype.createElement("div", {
        className: "clock-content-wrapper",
        appendTo: this.windowWrapper
    });

    this.clockDigitWrapperHour = DiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "hour"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.hourLi = DiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperHour
        });
    }

    this.clockDigitWrapperMinute = DiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "minute"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.minuteLi = DiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperMinute
        });
    }

    this.clockDigitWrapperSecond = DiceApp.prototype.createElement("ul", {
        className: ["clock-digit-wrapper", "second"],
        appendTo: this.contentWrapper
    });

    for (var i = 0; i < 2; i++) {
        this.secondLi = DiceApp.prototype.createElement("li", {
            className: "clock-digit-zero",
            appendTo: this.clockDigitWrapperSecond
        });
    }
}