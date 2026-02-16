// let a = {
//     name : "ajai" ,
//     age : 38,
//     networth : 50 
// };
// let b = new a();
// console.log(b)
// //b.name = "sanjay";
// console.log(b);

// // function Car(nameof,modelno,manufactureyear){
//     this.name = nameof,
//     this.modelno = "zb384",
//     this.manufactureyear = 2020
// };
// let b = new Car("hero honda","rjo",9890)
// console.log(b)


//  let arr = ;
// arr.push("ajai")
// arr.push("ajith");
// arr.push("rahuman");
// arr.push(42);
// arr.unshift("ajith")
// arr.unshift("rocketraja")
// arr.shift()
// arr.pop()
// arr.pop()
// arr.shift()
// arr.shift()
// console.log(arr.length)
// arr.splice(0)
// arr.push("ajai")
// //arr.splice(0)
// console.log(arr);
// console.log(arr.)

// let arr  = [ function add(a, b){return a+b }];
// console.log(arr.call(add,3,4))
// call(this: Function, thisArg: any, ...argArray: any[]): any;



// let arr = new Array()
// arr = [[1,2,3],[4,6,7],[4,5,6]]
// for(let i = 0; i<arr.length ; i++){
//     for(let j = 0; j < arr[i].length ; j++){
//     console.log(arr[i][j])
//     }
// }

//JSON - JavaScript Object Notation 

// let User = '{"name" : " ajai" ,"age" : 23}';
// console.log(JSON.parse(User))


//let today = new Date("2006-06-1")
// let today = new Date("200-4-3")

// console.log(today.getUTCDate())


// class Car{
//     constructor(){
//             console.log("this will we automatically waked up when the object is created ")
//     }
//     name = "ajai";
//     age = 34;
//     display(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// let a = new Car()
// console.log(a)



// function factorial(n){
//     if(n == 1){
//         return 1
// //     }
// //     return n * factorial(n -1)
// // }
// // console.log(factorial(453))


// class user{
//     #name
//     constructor(name,age){
//         this.#name = name ;
//         this.age = age;
//     }
//     display(){
//             console.log(this.#name);
//             console.log(this.age);
//     }
//     get name(){
//         return "name"+ this.#name;
//     }
//     set name(name){
//         this.#name = name ;
//     }
// }
// //console.log(typeof(user))
// let ajai = new user("vibhav",435);
// ajai.name = "dhoni";
// console.log(ajai.name);

// class OOPs {
//     constructor(name) {
//         this.name = name;
//     }

//     // Getter method
//     get langName() {
//         return this.name;
//     }

//     // Setter method
//     set langName(x) {
//         return this.name = x;
//     }
//     hello(){
//         console.log(`Hello ${this.name}`)
//     }
// }

// let obj = new OOPs('JavaScript');
// console.log(obj.name); 

// obj.langName = 'Java';
// console.log(obj.name);


// const Bike ={
//        'function_name'  : function(name){
//         console.log("this is a function inside an object " + name );
//         return " this is a retrun statement "
//        }
// }
// console.log(Bike.function_name("KTM"))


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show()); // Output: I have a Ford, it is a Mustang





// class Car{
//     constructor(name,brand){
//         this.name = name ;
//     }
//     display(){
//         return " this is my car  named " + this.name ;
//     }
// }
// class Carbrand extends Car{
//     constructor(name , brand ){
//         super(name);
//         this.brand = brand;
//     }
//     show(){
//         return this.display() + " and the brand is "  + this.brand ;
//     }
// }
// let Mycar = new Carbrand("tesla" , "Model ev 3")
// console.log(Mycar.show());


// class animal{
//     bark(){
//         console.log("all animals bark ");
//     }
// }
// class dog extends animal{
//     bark(){
//         if(super.bark() == undefined){
//             console.log("parent bark is undefined ");
//         }
//         else{
//         console.log("dog barks")
//         }
//     }
// }
// let a = new dog();
// // a.bark();;


// let a = prompt("enter your name ")
// console.log(a);