
function CreateDiceApp() {
    this.construct();
    this.sum = 0;
    this.die = new Array();
}

CreateDiceApp.prototype.construct = function () {
    console.log('In constructor');

    this.windowWrapper = this.createElement("div", {
        className: ["dice-window-wrapper"],
        appendTo: document.getElementById("page-content-wrapper")
    });

    this.menuWrapper = this.createElement("div", {
        className: ["dice-menubar-wrapper"],
        appendTo: this.windowWrapper
    });

    this.closeBtn = this.createElement("div", {
        className: ["close"],
        appendTo: this.menuWrapper,
        event: {
            click: function () {
                this.deStruct()
            }.bind(this)
        }
    });

    this.toolBarWrapper = this.createElement("div", {
        className: ["dice-toolbar-wrapper"],
        appendTo: this.windowWrapper
    });

    this.toolBarUl = this.createElement("ul", {
        appendTo: this.toolBarWrapper
    });

    this.addDiceBtn = this.createElement("li", {
        className: ["add"],
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.addDice();
                this.calcSum();
                this.displaySum();
            }.bind(this)
        }
    });

    this.removeDiceBtn = this.createElement("li", {
        className: ["remove"],
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.removeDice();
                this.calcSum();
                this.displaySum();
            }.bind(this)
        }
    });

    this.rollDiceBtn = this.createElement("li", {
        className: ["roll"],
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.rollDice();
                this.calcSum();
                this.displaySum();
            }.bind(this)
        }
    });

    this.liForToolbar = this.createElement("li", {
        appendTo: this.toolBarUl
    });

    this.toolbarInnerUl = this.createElement("ul", {
        className: ["dice-toolbar-counter-wrapper"],
        appendTo: this.liForToolbar
    });

    for (var i = 0; i < 5; i++) {
        this.liZero = this.createElement("li", {
            className: ["zero"],
            appendTo: this.toolbarInnerUl
        });
    };

    this.diceContentWrapper = this.createElement("div", {
        className: ["dice-content-wrapper"],
        appendTo: this.windowWrapper
    });

    this.diceWrapperUl = this.createElement("ul", {
        appendTo: this.diceContentWrapper
    });
}

CreateDiceApp.prototype.deStruct = function () {
    console.log("Destroying dice app instance.");

    if (this.windowWrapper) {
        this.windowWrapper.parentNode.removeChild(this.windowWrapper);
    }
}

CreateDiceApp.prototype.createElement = function (tag, obj) {
    console.log(tag, obj);
    elem = document.createElement(tag);

    if (obj.className) {
        elem.classList.add(obj.className);
    }

    if (obj.appendTo) {
        obj.appendTo.appendChild(elem);
    }

    if (obj.event) {
        for (var typeOfEvent in obj.event) {
            elem.addEventListener(typeOfEvent, obj.event[typeOfEvent]);
        }
    }

    return elem;
}

CreateDiceApp.prototype.addDice = function () {
    this.dice();
}

CreateDiceApp.prototype.dice = function () {
    console.log('In prototype "dice" of CreateDiceApp class.');
    var die = new Dice();

    this.diceWrapperUl.appendChild(die.render());
    this.die.push(die);
}

CreateDiceApp.prototype.removeDice = function () {
    if (this.diceWrapperUl.lastChild) {
        this.diceWrapperUl.removeChild(this.diceWrapperUl.lastChild);
        this.die.pop();
    } else {
        console.log("There are no dice to remove.");
        return;
    }
}

CreateDiceApp.prototype.rollDice = function () {
    var diceElements = this.diceWrapperUl.children;

    for (var i = 0; i < diceElements.length; i++) {
        var die = new Dice();
        var newDice = die.render();

        this.diceWrapperUl.replaceChild(newDice, diceElements[i]);
        this.die[i] = die;
    }
}

CreateDiceApp.prototype.calcSum = function () {
    console.log('Inside calcSum of' + this);
    this.sum = 0;

    for (var i = 0; i < this.die.length; i++) {
        this.sum += this.die[i].value;
    }
    return this.sum;
}

CreateDiceApp.prototype.displaySum = function () {
    var stringNumbers = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");

    this.liElems = document.querySelectorAll(".zero");

    this.Sum = this.calcSum();

    var sumToString = this.Sum.toString();
    
    var sumWithPadding = sumToString.padStart(this.liElems.length, "0");

    console.log(this.liElems.length);
    for (var i = 0; i < this.liElems.length; i++) {
        var number = parseInt(sumWithPadding[i]);

        this.liElems[i].className = "";
        this.liElems[i].classList.add("zero");
        this.liElems[i].classList.add(stringNumbers[number]);
    }
}