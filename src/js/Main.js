document.addEventListener("DOMContentLoaded", function () {
    new Document();
})

function Document() {
    this.init();
}

Document.prototype.init = function () {
    var diceBtn = document.getElementById("icon-dice");
    diceBtn.addEventListener("click", this.createDiceApp);
}

Document.prototype.createDiceApp = function () {
    console.log("Creating dice application...");

    new CreateDiceApp();
}
