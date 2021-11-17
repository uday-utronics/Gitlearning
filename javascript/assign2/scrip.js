// function square(x){ return(x*x);}
// function double(x){
//     return(2*x);
// }
// // function composedValue(square(x),double(z), y){
// //     return(square(5)*double(5)*y)

// // }
// var k = square(double(5));
// document.write(k);
//-------------------------
//----------------------------------

// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 
// const double = x => x * 2
// const square = x => x * x

// // function composition
// var output_final = compose(square, double)(5);
// console.log(output_final);
// document.write(output_final);

// function getEvenNumbers() {
//     var arr = [1, 2, 3, 4, 5, 6];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             document.writeln(arr[i] + "<br />");
//             break;
//         }
//     }
// }

// getEvenNumbers();

//--------------------------------------
//-------------------------------------------
let getEvenNumbers = (num) => {
    if (num % 2 === 0) {
        document.writeln(num + "<br />");
    }
}
    
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(getEvenNumbers);