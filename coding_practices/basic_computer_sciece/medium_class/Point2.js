console.log("Hello World");

class Point{
    constructor(x,y){
        this.x = x;
        this.y =y;
    }


}

class Line{
    xDifference = 0;
    constructor(startPoint, endPoint){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    getLength(){
        xDifference　= this.startPoint.x - this.endPoint.x
        ydifference = this.startPoint.y - this.endPoint.y
        return Math.squart(xDifference * xDifference + ydifference * ydifference )
    }
}

a = new Point(3,1)
b = new Point(3,6)
lineAB = new Line(a, b)
lineAB.getLength() --> 5


c = new Point(1,3)
d = new Point(6,15)
lineCD = new Line(c, d)
lineCD.getLength() --> 13