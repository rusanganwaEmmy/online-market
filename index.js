const head=document.getElementsByClassName("main");
const containerr=document.querySelectorAll(".container");

const number1=Array.from(document.querySelectorAll(".number1"));

console.log(number1);

const part=document.getElementsByClassName("part2")[0];

const item=document.getElementsByClassName("item")[0];

const butto=document.getElementsByClassName("button")[0];
console.log(butto);
const capture=[];
let currentlaber=0;
number1[currentlaber].classList.add("changecolor");

function items(){
    part.addEventListener("click",e=>{
    const source=e.target.getAttribute("src");
    
    const phot=e.target.getAttribute("className");

    function Image(src,className){
        this.src=src;
        this.className=className;

    }

    const images=new Image(source,phot);
    capture.push(images);
    item.innerHTML=capture.length;

})


}
items();



butto.addEventListener("click",e=>{
    currentlaber++;
    number1[currentlaber].classList.add("changecolor");
    part.innerHTML=" ";


})


 