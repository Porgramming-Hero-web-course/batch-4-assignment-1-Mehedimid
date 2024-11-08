type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle

const calculateShapeArea = (areaShape : Shape) => { 
    if(areaShape.shape === "circle"){
        const r = areaShape.radius
        return (Math.PI*r*r) 
    }else if(areaShape.shape === "rectangle"){
        return (areaShape.height * areaShape.width) 
    }
 }

 console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
 console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  }));