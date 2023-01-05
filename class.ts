class Calculator {
    num3: number = 20;
    num4: number = 30;
    
    addition() {
        console.log(this.num3 + this.num4)
    }
}
let cal=new Calculator();
cal.addition()