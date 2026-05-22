// let div=document.querySelector("div");
// div.style.backgroundColor="green"
// div.style.backgroundColor="purple"
// div.style.fontSize="30px"
// div.innerText="hello"
// // div.style.visibility="hidden";


// div me button append
let btn=document.createElement("button");
btn.innerText ="click me!";
console.log(btn);

let div=document.querySelector("div");
// div.append(btn);    //ending me use ke liye append
// div.prepend(btn);    //starting me use karne ke liye prepe nd
// div.before(btn);        //div ke start me use karna he to before use kar sakte he
// div.after(btn);           //div ke last me niche use karna he to after ka use kar sakte he


//paragraph ke bhar button ko acess karna he to phele paragraph ko acess karo or fir karo add
let p=document.querySelector("p");
p.after(btn);