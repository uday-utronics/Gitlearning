// var rectangle = new Object();
// rectangle.height = 100;
// rectangle.width = 200;
// rectangle.area = function(){
//    return(rectangle.height*rectangle.width);
// }
// //var k = rectangle.area(rectangle.height,rectangle.width);
// document.write(rectangle.height+" "+rectangle.area());

// const person = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function() {
//       alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     },
//     greeting: function() {
//       alert('Hi! I\'m ' + this.name[0] + '.');
//     }
//   };
//   document.write(person.name);

//   person.bio();
// -----------------------------------------------
// -------------------------------------------------
class Person {
    constructor(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
}
  const myFather = new Person("John", "Doe", 50, "blue");
  document.write(myFather.age);