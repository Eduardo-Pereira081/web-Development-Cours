class Control{
    constructor(temp,color){
       this.color = color;
       this.temp = temp;
       this.isOn = false;  
    }
    power() {
        this.isOn =  !this.isOn;
        return "plin!"
       }

       upper(){
       // ++this.temp;// 1
       // return this.temp
       if(this.temp<30){
        this.temp++;
       }
    
       return this.temp;
    }
       dow(){
        if (this.temp > 16){
            this.temp--;
        }
        return this.temp;
    }
   
        
       }


function control(temp) {
    console.log(temp);
}

control(17);
const consol1 = new Control(17, "branco");
const consol2 = new Control(20, "preto");
console.log(consol1.qualquer);
console.log(consol1.color);
console.log(consol2.color);
console.log(consol2.isOn);
console.log(consol2.power());
console.log(consol2.isOn);
console.log(consol2.power());
console.log(consol2.isOn);
console.log(consol1.upper());
console.log(consol1.upper());
console.log(consol1.upper());





