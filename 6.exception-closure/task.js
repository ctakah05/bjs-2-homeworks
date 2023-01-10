function parseCount(str) {
let nP = Number.parseInt(str);
  if (isNaN(nP)) {
    throw new Error("Невалидное значение");
  }
  return nP;
}

function validateCount(strPars) {
    try{
      return parseCount(strPars);
    } catch (error){
      return error;
    }
}

class Triangle {
    constructor(a,b,c){
        if (a + b < c || a + c < b || c + b < a){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter(){
        return this.a + this.b + this.c;
    }
    getArea(){
            let p = (this.a + this.b + this.c)*0.5;
            return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a,b,c){
    try{
        return new Triangle(a,b,c);
    } catch(error){
        return {
            getArea(){console.log("Ошибка! Треугольник не существует");},
            getPerimeter(){console.log("Ошибка! Треугольник не существует");}
        }
    }
}