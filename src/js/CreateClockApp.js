function CreateClockApp() {
    this.construct();

    this.dragHandler = new DragHandler(this.windowWrapper);
    this.zIndexHandler = new ZIndexHandler(this.windowWrapper);
}

CreateClockApp.prototype.construct = function () {
    console.log("In constructor of clock application");
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