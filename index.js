let radius = [3, 1, 2, 4]

let area = function(radius){
    let a = Math.PI*radius*radius;
    return a;
}
let circum = function(radius){
    let b = Math.PI*2*radius;
    return b;
}

let calculate = function (radius, logic){
    let output = [];
    for (let i =0; i< radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area));
console.log(calculate(radius, circum))

