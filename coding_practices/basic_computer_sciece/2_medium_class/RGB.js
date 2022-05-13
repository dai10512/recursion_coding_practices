console.log("Hello World");
class RGB{
    constructor(red,green,blue){
        this.red = red;
        this.green = green;
        this.blue = blue;
    }

    getHexCode(){
        getEachHexHelper(number){
            switch(number){
                case 10:
                    number = A
                    break
                case 11:
                    number = B
                    break
                case 12:
                    number = C
                    break
                case 13:
                    number = D
                    break
                case 14:
                    number = E
                    break
                case 15:
                    number = F
                    break
            }
            return number.toString()
        }

        getEachColorHex(colorNumber){
            // firstNumber = getEachHexHelper(colorNumber % 16)
            // secondNumber =  getEachHexHelper(colorNumber /16)
            
            // return secondNumber + firstNumber 
            return 1
        }

        return '#' + getEachColorHex(this.red) + getEachColorHex(this.green) + getEachColorHex(this.blue) 
    }

    // getBits(){
    //     return
    // }

    // getColorShade{
    //     return
    // }
}

color1 = new RGB(0, 153, 255)
console.log(color1.getHexCode())
// console.log(color1.getBits())
// console.log(color1.getColorShade())


color2 = new RGB(255, 153, 204)
console.log(color2.getHexCode())
// console.log(color2.getBits())
// console.log(color2.getColorShade())


color3 = new RGB(0, 87, 0)
console.log(color3.getHexCode())
// console.log(color3.getBits())
// console.log(color3.getColorShade())


gray = new RGB(123, 123, 123)
console.log(gray.getHexCode())
// console.log(gray.getBits())
// console.log(gray.getColorShade())