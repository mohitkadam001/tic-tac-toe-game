// console.log("hello my name is smartcoder")
// console.log("hello my name is smartcoder")
// console.log("hello my name is smartcoder")
// console.log("hello my name is smartcoder")
// console.log("hello my name is smartcoder")


// i=1;
// while(i<=10){
// console.log("hello world")
// i+=1;
// }



// a = 1;
// b = 10;
// while (a <= b) {
//     console.log("hello world")
//     a++;
// }

// console.log("end of program")




// console.log ("start program")
// let a=1;
// let b=5;

// while (b>=a) {
//     console.log("hello")
//     console.log("my nane")
//     console.log("moihit kadam")
//     a++;
// }

// console.log("end of program")


// i=1;
// while(i<=10){
// console.log(i)
// i+=1;
// }


// i=1;
// while(i<=10){
//     console.log(i*2)
//     i+=1;
// }


// const prompt= require('prompt-sync')();
// i=1;
// fact=1;
// let n=Number(prompt("enter a number"))
// while(i<=n){
//     fact=fact*i;
//     i+=1;
// }
// console.log(fact)



// i=0;
// while(i<=50){
//     console.log(i," ")
//     i+=2;
// }

// let num=432;
// let sum_digit=0

// while(num>0){
//     let last_digit=num%10
//     sum_digit=sum_digit+last_digit
//     num=Math.floor(num/10)

// }
// console.log(sum_digit)




// #reverse number
// let num = 432;
// let rev = 0;

// while(num>0){
//   let last = num % 10;
//   rev = rev * 10 + last;
//   num = Math.floor(num / 10);
// }

// console.log(rev); 


// const prompt= require('prompt-sync')();
// // chek palindrome
// let num=Number(prompt("enter the value you want to check tha palindrome or not:"))
// let real_num =num;
// let rev_num = 0;

// while(num>0){
//   let last_digit = num % 10;
//   rev_num = rev_num * 10 + last_digit;
//   num = Math.floor(num / 10);
// }
// if(real_num==rev_num){
//     console.log("number is palindrome")
// }
// else{
//     console.log("number is not palindrome")
// }



// charcter chaeck palindrome 
// ch="nayan"
// i=0;
// n=ch.length-1
// rev_str=''
// while(i<=n){
//     last_ch=ch[n]
//     rev_str=rev_str+last_ch
//     n--
// }
// if(rev_str==ch){
//     console.log("str is palindrome")
// }
// else{
//     console.log("str is not palindrome")
// }



// vovle accure in the string


// let str = "abcdejjedefi123";
// let i=0;

// while(i<=str.length) {
//     let ch=str[i]

//     if ("aeiou".includes(ch)) {
//         console.log(ch);
//     }
//     i++;
// } 




// vovale consonant count
// ch = "abcdejjedefi123";
// i = 0;
// n = ch.length
// vov_count = 0
// cons_count = 0

// while (i < n) {
//     if (ch[i].toLowerCase() != ch[i].toUpperCase()) {
//         if (ch[i] == "a" || ch[i] == "e" || ch[i] == "i" || ch[i] == "o" || ch[i] == "u") {
//             vov_count++;

//         } else {
//             cons_count++
//         }
        
//     }
//     i++
// }
// console.log(vov_count)
// console.log(cons_count)




// using a number toperoform some basic oprations
const prompt = require('prompt-sync')();
console.log("1 press to add")
console.log("2 press to sub")
console.log("3 press to mul")
console.log("4 press to div")
console.log("5 press to exit")
while(true){
    ch=Number(prompt("enter your choice:"))
    if(ch==1){
        console.log("add result:")
    }else if(ch==2){
        console.log("sub result")
    }else if(ch==3){
        console.log("mul result")
    }else if(ch==4){
        console.log("mul result")
    }else if(ch==5){
        console.log("exit")
        break
    }else{
        console.log("invalid choice")
    }
}