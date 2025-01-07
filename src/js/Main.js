document.addEventListener("DOMContentLoaded", function () {
    new Document();
})

function Document() {
    this.init();
}

Document.prototype.init = function () {
    var diceBtn = document.getElementById("icon-dice");
    diceBtn.addEventListener("click", this.createDiceApp);

    var clockBtn = document.getElementById("icon-clock");
    clockBtn.addEventListener("click", this.createClockApp);
}

Document.prototype.createDiceApp = function () {
    console.log("Creating dice application...");

    new CreateDiceApp();
}

Document.prototype.createClockApp = function () {
    new CreateClockApp();
}