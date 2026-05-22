// let btn1 = document.querySelector("#btn1");

// btn1.onclick =() => {
//     console.log("btn was clicked")
//     let a=25;
//     a++;
//     console.log(a);
// }

// let div=document.querySelector("div");

// div.onmouseover =()=>{
//     console.log("you are inside div")

// }


// btn1.addEventListener("click", () => {
//     console.log("button was clicked");
// })
// btn1.addEventListener("click", (event) => {
//     console.log("button was clicked--2");

// })
// const handler = () => {
//     console.log("button 3 was clicked")
// };
// btn1.addEventListener("click", handler);

// btn1.addEventListener("click", () => {
//     console.log("button was clicked--4");
// })

// btn1.removeEventListener("click", handler);


let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentmode = "light";

modebtn.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark"
        body.classList.add("dark");
         body.classList.remove("light");
    } else {
        currentmode = "light";
         body.classList.add("light");
          body.classList.add("dark");
    }
    console.log(currentmode);
});