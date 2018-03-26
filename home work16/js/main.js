class Shape{
    constructor(color, initX, initY){
        this.color = color;
        this.initX = initX;
        this.initY = initY;
    }
    getColor(){
        return this.color;
    }
    setColor(val){
        this.color = val;
    }
    getCoords(){
        return this.initX, this.initY;
    } 
    moveTo(newX, newY){
        this.initX = newX;
        this.initY = newY;
    }
};

class Rectangle extends Shape{
    constructor(color, initX, initY, initWidth, initHeight){
        super(color, initX, initY)
        this.initWidth = initWidth;
        this.initHeight = initHeight;
    }
    setWidth(newWidth){
        this.initWidth = newWidth;
    }
    setHeight(newHeight){
        this.initHeight = initHeight;
    }
    getDims(){
        return this.initWidth, this.initHeight;
    }
    draw(){
        console.log(`Drawing a Regtangle at
        (X: ${this.initX}, Y: ${this.initY})
         With dimentions:
         width: ${this.initWidth}
        height: ${this.initHeight}   
        Filled with color: ${this.color}`)
        }
};

let regtangle = new Rectangle("#009688", 10, 10, 100, 100);
regtangle.draw();


class Circle extends Shape{
    constructor(color, initX, initY, initRadius){
        super(color, initX, initY)
        this.initRadius = initRadius;
    }

    getRadius(){
        return this.initRadius;
    }
    setRadius(val){
        this.initRadius = val;
    }
    draw(){
        console.log(`Drawing a Regtangle at
        (X: ${this.initX}, Y: ${this.initY})
        With dimentions:
        redius: ${this.initRadius}   
        Filled with color: ${this.color}`)

    }
}

let circle = new Circle("#ff5722", 50, 50, 250);
circle.draw();