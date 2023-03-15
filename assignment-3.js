

let array = [];
let input = document.querySelector("input");
let add = document.querySelector(".add");
let print = document.querySelector(".print");
let output = document.querySelector("p")

add.onclick = () => {
    array.push(input.value);
    console.log(array);
    input.value = ""; 
    input.focus();
}

print.onclick = () => {
    let i = 0 ;
    let x  = setInterval( () => {
        if(i === array.length - 1){
            clearInterval(x);
            output.innerHTML += array[i++];
        }else output.innerHTML += array[i++] + ", ";
        },1000)
 }