
function CreateDiceApp(onDestroy) {
    this.onDestroy = onDestroy;
    this.construct();
    this.sum = 0;
    this.die = new Array();
}

CreateDiceApp.prototype.construct = function () {
    console.log('In constructor');

    this.windowWrapper = document.createElement("div");

    var diceAppDiv = document.getElementById("page-content-wrapper");
    var menuWrapper = document.createElement("div");
    var closeBtn = document.createElement("div");

    var toolBarWrapper = document.createElement("div");
    var toolbarUl = document.createElement("ul");
    var addDice = document.createElement("li");
    var removeDice = document.createElement("li");
    var rollDice = document.createElement("li");

    var liForToolbar = document.createElement("li");
    var toolbarInnerUl = document.createElement("ul");
    for (var i = 0; i < 5; i++) {
        console.log('in loop');
        var liZero = document.createElement("li");

        liZero.classList.add("zero");
        toolbarInnerUl.appendChild(liZero);
    }

    var diceContentWrapper = document.createElement("div");
    this.diceWrapperUl = document.createElement("ul");

    this.windowWrapper.classList.add("dice-window-wrapper");
    menuWrapper.classList.add("dice-menubar-wrapper");
    closeBtn.classList.add("close");

    toolBarWrapper.classList.add("dice-toolbar-wrapper");
    addDice.classList.add("add");
    removeDice.classList.add("remove");
    rollDice.classList.add("roll");

    toolbarInnerUl.classList.add("dice-toolbar-counter-wrapper");

    diceContentWrapper.classList.add("dice-content-wrapper");

    diceAppDiv.appendChild(this.windowWrapper);
    this.windowWrapper.appendChild(menuWrapper);
    menuWrapper.appendChild(closeBtn);

    this.windowWrapper.appendChild(toolBarWrapper);
    toolBarWrapper.appendChild(toolbarUl);
    toolbarUl.appendChild(addDice);
    toolbarUl.appendChild(removeDice);
    toolbarUl.appendChild(rollDice);

    toolbarUl.appendChild(liForToolbar);
    liForToolbar.appendChild(toolbarInnerUl);

    this.windowWrapper.appendChild(diceContentWrapper);
    diceContentWrapper.appendChild(this.diceWrapperUl);



    addDice.addEventListener("click", function (event) {
        this.addDice();
        this.calcSum();
        this.displaySum();
    }.bind(this));

    removeDice.addEventListener("click", function (event) {
        this.removeDice();
        this.calcSum();
        this.displaySum();
    }.bind(this));

    rollDice.addEventListener("click", function (event) {
        this.rollDice();
        this.calcSum();
        this.displaySum();
    }.bind(this));

    closeBtn.addEventListener("click", this.deStruct.bind(this));
}

CreateDiceApp.prototype.deStruct = function () {
    console.log("Destroying dice app instance.");

    if (this.windowWrapper) {
        this.windowWrapper.parentNode.removeChild(this.windowWrapper);
    }
}

CreateDiceApp.prototype.addDice = function () {
    this.dice();
}

CreateDiceApp.prototype.dice = function () {
    console.log('In prototype "dice" of CreateDiceApp class.');
    var die = new Dice;

    this.diceWrapperUl.appendChild(die.render());
    this.die.push(die);
}

CreateDiceApp.prototype.removeDice = function () {
    if (this.diceWrapperUl.lastChild) {
        this.diceWrapperUl.removeChild(this.diceWrapperUl.lastChild);
        this.die.pop(this.diceWrapperUl.lastChild);
    } else {
        console.log("There are no dice to remove.");
        return;
    }
}

CreateDiceApp.prototype.rollDice = function () {
    var diceElements = this.diceWrapperUl.children;

    for (var i = 0; i < diceElements.length; i++) {
        var die = new Dice;
        var newDice = die.render();

        this.diceWrapperUl.replaceChild(newDice, diceElements[i]);
        this.die[i] = die;
    }
}

CreateDiceApp.prototype.calcSum = function () {
    console.log('Inside calcSum');
    this.sum = 0;

    for (var i = 0; i < this.die.length; i++) {
        this.sum += this.die[i].value;
    }
    return this.sum;
}

CreateDiceApp.prototype.displaySum = function () {
    var stringNumbers = new Array("zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine");

    this.toolbarInnerUl = document.querySelector(".dice-toolbar-counter-wrapper");

    this.Sum = this.calcSum();
   
    var sumToString = this.Sum.toString();
    console.log(sumToString);

    for (var i = 0; i < sumToString.length; i++) {
        console.log('Number of die: ' + this.die.length);
        this.toolbarInnerUl.children[i].classList.add(stringNumbers[parseFloat(sumToString[i])]);
    }
}