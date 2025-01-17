/**
 * A class for creating and managing a dice
 * application.
 * 
 * This class initializes the following:
 *  - A dynamic DOM structure for the interface
 *    of the application.
 *  - A variable for the sum of the rolled dice.
 *  - An array for storing each die of the dice
 *    application.
 *  - A sound effect, preloaded for performance
 *    issues.
 *  - Drag functionality through the instance of
 *    DragHandler class.
 *  - Z-index functionality through the instance
 *    of ZIndexHandler class.
 * 
 * @class
 */
function CreateDiceApp() {
    this.construct();
    this.sum = 0;
    this.die = new Array();
    this.sound = new Audio("src/wav/add.wav");
    this.sound.preload = "auto";

    this.dragHandler = new DragHandler(this.windowWrapper);
    this.zIndexHandler = new ZIndexHandler(this.windowWrapper);
}

/**
 * Constructs and initializes DOM elements for the
 * interface of the dice application.
 * 
 * Creates and appends following elements:
 *  - A wrapper surrounding the entire window.
 *  - A wrapper surrounding the menu-bar for closing the
 *    application.
 *  - A wrapper surrounding the tool-bar for different 
 *    actions, e.g. showing sum of dice values, adding, 
 *    removing and rolling die.
 *  - A wrapper for the area where each die displays.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.construct = function () {
    this.windowWrapper = this.createElement("div", {
        className: "dice-window-wrapper",
        appendTo: document.getElementById("page-content-wrapper")
    });

    this.menuWrapper = this.createElement("div", {
        className: "dice-menubar-wrapper",
        appendTo: this.windowWrapper
    });

    this.closeBtn = this.createElement("div", {
        className: "close",
        appendTo: this.menuWrapper,
        event: {
            click: function () {
                this.deStruct();
            }.bind(this)
        }
    });

    this.toolBarWrapper = this.createElement("div", {
        className: "dice-toolbar-wrapper",
        appendTo: this.windowWrapper
    });

    this.toolBarUl = this.createElement("ul", {
        appendTo: this.toolBarWrapper
    });

    this.addDiceBtn = this.createElement("li", {
        className: "add",
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.addDice();
                this.calcSum();
                this.displaySum();
                this.playSound();
            }.bind(this)
        }
    });

    this.removeDiceBtn = this.createElement("li", {
        className: "remove",
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.removeDice();
                this.calcSum();
                this.displaySum();
                this.playSound();
            }.bind(this)
        }
    });

    this.rollDiceBtn = this.createElement("li", {
        className: "roll",
        appendTo: this.toolBarUl,
        event: {
            click: function () {
                this.rollDice();
                this.calcSum();
                this.displaySum();
                this.playSound();
            }.bind(this)
        }
    });

    this.liForToolbar = this.createElement("li", {
        appendTo: this.toolBarUl
    });

    this.toolbarInnerUl = this.createElement("ul", {
        className: "dice-toolbar-counter-wrapper",
        appendTo: this.liForToolbar
    });

    for (var i = 0; i < 5; i++) {
        this.liZero = this.createElement("li", {
            className: "zero",
            appendTo: this.toolbarInnerUl
        });
    };

    this.diceContentWrapper = this.createElement("div", {
        className: "dice-content-wrapper",
        appendTo: this.windowWrapper
    });

    this.diceWrapperUl = this.createElement("ul", {
        appendTo: this.diceContentWrapper
    });
}

/**
 * Cleans up and removes instances of the dice application 
 * and its handlers.
 * 
 * Removes the following instances:
 *  - this.windowWrapper, the dice application.
 *  - this.DragHandler, the drag functionality.
 *  - this.zIndexHandler, the z-index function-
 *    ality.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.deStruct = function () {
    if (this.windowWrapper) {
        this.windowWrapper.parentNode.removeChild(this.windowWrapper);
    }

    if (this.dragHandler) {
        this.dragHandler.deStruct();
    }

    if (this.zIndexHandler) {
        this.zIndexHandler.deStruct();
    }
}

/**
 * Creates the specified DOM element with specific properties.
 * 
 * The method creates an HTML element, adds classes to the element along
 * with possible events. It also appends the element to the DOM structure.
 * 
 * @param {string} tag - The type of HTML element to create.
 * @param {object} obj - Contains properties for class name, appendation and events.
 * 
 * @param {string|string[]} obj.className - The class name to assign. If the property
 *                                          is of an array, each item (class) in the 
 *                                          array is added.
 * 
 * @param {HTMLElement} obj.appendTo - The element in which to append the created element to.
 * 
 * @param {object} obj.event - The event listeners to assign.
 *                             The key, typeOfEvent, corresponds to
 *                             type of event, e.g. click.
 * 
 * @returns {HTMLElement} - DOM-element with specified properties.
 *                   
 */
CreateDiceApp.prototype.createElement = function (tag, obj) {
    var elem = document.createElement(tag);

    if (obj.className) {
        elem.classList.add(obj.className);
    }

    if (typeof obj.className === "object") {
        for (var i = 0; i < obj.className.length; i++) {
            elem.classList.add(obj.className[i]);
        }
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

/**
 * Adds a new dice until it does not fit in the container.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.addDice = function () {
    if (this.die.length > 0) {
        var appWidth = this.diceContentWrapper.offsetWidth;
        var diceWidth = this.die[0].liDice.offsetWidth + 8;

        var appHeight = this.diceContentWrapper.offsetHeight;
        var diceHeight = this.die[0].liDice.offsetHeight + 8;

        var maxDiceRow = Math.floor(appWidth / diceWidth);
        var maxDiceColumn = Math.floor(appHeight / diceHeight);

        var maxDice = maxDiceRow * maxDiceColumn;
    }

    if (this.die.length >= maxDice) {
        return;
    } else {
        this.dice();
    }
}

/**
 * Method that creates a new instance of Dice class.
 * Method appends the instance to the DOM and pushes
 * the individual instance to the this.die array.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.dice = function () {
    var die = new Dice();

    this.diceWrapperUl.appendChild(die.render());
    this.die.push(die);
}

/**
 * Removes the last die of the array.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.removeDice = function () {
    if (this.diceWrapperUl.lastChild) {
        this.diceWrapperUl.removeChild(this.diceWrapperUl.lastChild);
        this.die.pop();
    } else {
        return;
    }
}

/**
 * Rolls all dice in the application and replaces their DOM
 * representation randomly.
 * 
 * Replaces each die with the newly created die.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.rollDice = function () {
    var diceElements = this.diceWrapperUl.children;

    for (var i = 0; i < diceElements.length; i++) {
        var die = new Dice();
        var newDice = die.render();

        this.diceWrapperUl.replaceChild(newDice, diceElements[i]);
        this.die[i] = die;
    }
}

/**
 * Sums the values of each die.
 * 
 * @returns {number} The sum of all dice.
 */
CreateDiceApp.prototype.calcSum = function () {
    this.sum = 0;

    for (var i = 0; i < this.die.length; i++) {
        this.sum += this.die[i].value;
    }
    return this.sum;
}

/**
 * 
 * @param {string} str - The string to use as padding.
 * @param {number} length - Desired length.
 * @param {*} padStr - The string which is being padded.
 * @returns {string} - A padded version of the string.
 */
CreateDiceApp.prototype.padStartManual = function (str, length, padStr) {
    str = String(str);
    padStr = String(typeof padStr !== "undefined" ? padStr : "");

    if (str.length >= length) {
        return str;
    }

    var paddingLength = length - str.length;

    while (padStr.length < paddingLength) {
        padStr += padStr;
    }

    return padStr.slice(0, paddingLength) + str;
}

/**
 * Displays the total sum of all dice.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.displaySum = function () {
    var stringNumbers = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");

    this.liElems = this.windowWrapper.querySelectorAll(".zero");

    this.sum = this.calcSum();

    var sumWithPadding = this.padStartManual(this.sum, this.liElems.length, "0");

    for (var i = 0; i < this.liElems.length; i++) {
        var number = parseInt(sumWithPadding[i]);

        this.liElems[i].className = "";
        this.liElems[i].classList.add("zero");
        this.liElems[i].classList.add(stringNumbers[number]);
    }
}

/**
 * Method that plays the audio file connected with
 * different events.
 * 
 * @returns {void}
 */
CreateDiceApp.prototype.playSound = function () {
    this.sound.play();
}