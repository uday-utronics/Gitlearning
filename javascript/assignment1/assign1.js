// const number = parseInt(prompt('enter a positive integer: '));

// let sum = 0;

// for (let i =1;i<=number;i++){
//     sum+=i;
// }
// console.log('the sum of natural numbers:', sum);
// document.write("the sum of "+number+" natural numbers is: ",sum);

// --------------------question 2-------------------------
// const number = parseInt(prompt('enter a positive integer: '));

// let sum = 0;

// for (let i =1;i<=number;i++){
//     if(i%2!=0){
//         sum+=i;
//         document.writeln(i);
//     }
// }
// console.log('the sum of natural numbers:', sum);
// document.write("the sum of this numbers is: ",sum);
// -------------question 3---------------------------
// -----------------------------------------------
// const number = parseInt(prompt('enter a positive integer: '));
// var parity = function(a){
//     if(a%2==0){
//         return("even");
//     }
//     else{
        
//         return("odd");
//     }
// }
// var s = parity(number);
// document.write(s);

// -------------------------question 4--------------------------
// ------------------------------------------------------


//----------------------question 5-----------------
//---------------------------------------------

// const number = parseInt(prompt('enter a year to check leap: '));
// var printleap = function(n){
//     var count = 0;
//     while(count<=20){
//         // document.writeln(count);
//         if((n%4==0) && (n%100!=0)||(n%400==0)){
//             document.writeln(n);
//             n+=4;
//             count++;
//         }
//         else{
//             n++;
//         }
//     }
    
// }
// printleap(number);

// question 6---------------------------
//--------------------------------

// const nam = new Array("hello","world","in","a","frame");
// var style = function(nam){

//     document.writeln("******<br>")
//     for(i=0;i<nam.length;i++){
//         document.writeln("*"+nam[i]+"*<br>");
//         //alert(nam[i]);
//     }
//     document.writeln("******<br>");
// };
// style(nam);
//---------------------------------------question 8----------------
//-----------------------------------------------


// const nam = new Array("hello","world","in","a","frame");
// const num = new Array(1,2,3);
// document.writeln(nam+num);
// console.log(nam+num);


//-----------------------------------question 10-------------
//-------------------------------------------------------
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     document.writeln(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
    
// }

//---------------------question11--------------------
// const nam = new Array("hello","world","in","a","frame");
// document.writeln(nam.reverse(0));
///----------------------------
//---------------------question 14-------------------------

// var num = [50,66,88,99,70];
// var sum =0;
// for(i=0;i<num.length;i++){
//     sum+=num[i];
// }
// document.write(sum);
// --------------------------------
//---------------------------question 14---------------------
// var list = Array.from({length: 100}, () => Math.floor(Math.random()*100));
// // document.write(list+"<br");
// var least = Math.max(...list);
// document.write(least)

// var most = Math.min(...list);
// document.write("<br>"+most);
// var ecount =0, ocount =0;

// for(i=0;i<list.length;i++){
//     if(list[i]%2==0){
//         ecount++
//     }
//     else{
//         ocount++;
//     }
// }
// document.write("<br>"+ecount);
// document.write("<br>"+ocount);
// if(ecount>ocount){
//     document.write("<br> even count is more "+ecount+" than odd count "+ocount);
// }
// else{
//     document.write("<br> odd count is more "+ocount+" than even count "+ecount);
// }

// --------------------question 15-------------------------
//----------------------------------------------------------
// let bubbleSort = (inputArr) => {
//     let len = inputArr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (inputArr[j] > inputArr[j + 1]) {
//                 let tmp = inputArr[j];
//                 inputArr[j] = inputArr[j + 1];
//                 inputArr[j + 1] = tmp;
//             }
//         }
//     }
//     return inputArr;
// };
// var arr = [23,33,44,2,4,5,6,7];
// var sortarr = bubbleSort(arr);
// document.write(sortarr);

//-----------------------question 18-----------------------
//--------------------------------------
var arr =[1,2,3,4,5,6];
var k = arr.length;
var temp,c=4;
while(c){
temp =arr[0];
for(i=0;i<k-1;i++){
    arr[i] = arr[i+1];
    //arr[k-1] = temp;
    if(i==k-2){
        arr[k-1] = temp;
    }

}
c--;
}
document.write(arr);