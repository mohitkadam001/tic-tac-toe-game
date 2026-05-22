// function add(x, y) {
//     var num1 = document.getElementById("first_number").value;
//     var num2 = document.getElementById("second_number").value;
//     var sum = Number(num1) + Number(num2)
//     document.getElementById("result").innerText = "Result:" + " " + sum
// }

// function mul(x,y){

//     var num1 = document.getElementById("mul_first").value;
//     var num2 = document.getElementById("mul_second").value;
//     var multiply = Number(num1) * Number(num2);

//     document.getElementById("mul_result").innerText ="Result " + multiply;
// }



// function add_info() {
//     alert("Data add sucessfully")
// }

// function view_info() {
//     alert("Data show sucessfully")
// }

// function update_info() {
//     alert("Data update sucessfully")
// }

// function delete_info() {
//     alert("Data delete sucessfully")
// }








// let name = "ajay"
// const city = "indore"
// var age = 23


// if (true) {
//     let name = "vijay"
//     console.log(name)

// }
// console.log(name)





// function add(){
//      a=10;
//     console.log(a)
  

// }
// add()
// console.log(a)



// // callback function
// function info(name,func){
//             console.log("hii",name);
//             func();
//         }

// // function display(){
// //             console.log("call back function result")
// // }
// // info("ajay",display)
// info("viay",function(){
//     console.log("here is the callback function")
// })
// info("jay",()=>{console.log("here is the callback function")})


// greet()
// function greet(){
//     console.log("hello user")
// }


// function add(a,a){
//     "use strict"
//     return a+a;
// }
// console.log(add(10,20))



// function info(){
//     name="ajay"

// }
// info()
// console.log(name)


// function show(name){
//     function display(){
//         console.log("hello",name)
//     }
//     return display
// }
// const res= show("ajay")
// res()
// res()
// res()


// defult parameter
// function greet(name="jay"){
//     console.log(name)
// }
// greet("ajay")
// greet()
// greet("sumit")


const user={
    "name":"mohit",
    "age":22,
    "city":"indore",
    show: function(){
        console.log(this.name)
    }
}
user.show()