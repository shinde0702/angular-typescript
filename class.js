var Calculator = /** @class */ (function () {
    function Calculator() {
        this.num3 = 20;
        this.num4 = 30;
    }
    Calculator.prototype.addition = function () {
        console.log(this.num3 + this.num4);
    };
    return Calculator;
}());
var cal = new Calculator();
cal.addition();
