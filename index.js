//------------ level 6 and 7 ---------------
// changing the first letter to capital
// in function set the param , change the param to lowercase to make all small then split it to chage to array/
// afterthat make looping to read the array index
// str[i] is str[i] divided to char based on the index (firts) then change to uppercase plus str[i] and sting that is change deleted by slice

// let sentenceB = 'nama ku'

// let titlecase = function(str) {
//     str = sentenceB.toLowerCase().split(' ');
//     for( var i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }

//     return str.join(' ');
// }

// let rubah = sentenceB.join('');
// console.log(titlecase(sentenceB));


//---------- level 8,9,10,11,12 ----- if 

var a = 7;
var  b = 8;
var c = 9;
var d = 10;

let high = (x) => {
    if (x > 9) {
        return 'the highest'
    }

    else if ( x > 8 && x < 10 ) {
        return 'the second highest'
    }

    else if ( x < 10) {
        return 'the second lowest'
    }

    else {
        return 'the lowest'
    }
}

console.log(high(b))



// ---------- ------------ level 14, 15, 16 ------ arrow function

// let add = (a, b) =>  a + b;
// let multiply = (a,b) => a * b;
// let devide = (a,b) => a / b;
// let substract = (a, b) => a - b;
// let modulo = (a,b) => a % b



// console.log(add(7,2));
// console.log(multiply(7,2))
// console.log(devide(7,2))
// console.log(substract(7,2))
// console.log(modulo(7,2))

// console.log(add(7,2), substract(4,5));

// ------------------ level 17, 18, 19 ---- function

// function calculateSquareArea(a) { return a * a }
// function calculateSquarePerimeter(a) { return 12 * a }
// function calculateCircleArea(r) { return Math.PI * Math.sqrt(r) }
// function calculateCircleCircumference(r) { return 2 * Math.PI * r }
// function calculateCubeArea( s ) { return 6 * Math.pow(s,2) }
// function calculateCubeVolume( s ) { return s * 3 }
// function calculateTubeArea(r,t) { return (2 * Math.PI * Math.pow(r,2) + (2 * Math.PI * r * t)) }
// function calculateTubeVolume(r,t) { return (Math.PI * Math.pow(r,2)) * t }



// console.log(calculateSquareArea(2), calculateSquarePerimeter(3))
// console.log(calculateCircleArea(10), calculateCircleCircumference(10))
// console.log(calculateCubeArea(7), calculateCubeVolume(7));
// console.log(calculateTubeArea(7,3), calculateTubeVolume(7,3))







