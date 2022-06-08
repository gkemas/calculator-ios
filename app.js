const subresult =document.querySelector(".ustbilgi1");
const result =document.querySelector(".ustbilgi2");
const ac =document.querySelector(".ac");
const abs =document.querySelector(".abs");
const modulus =document.querySelector(".modulus");
const divide =document.querySelector(".divide");
const seven =document.querySelector(".seven");
const eight =document.querySelector(".eight");
const nine =document.querySelector(".nine");
const multiply =document.querySelector(".multiply");
const four =document.querySelector(".four");
const five =document.querySelector(".five");
const six =document.querySelector(".six");
const minus =document.querySelector(".minus");
const one =document.querySelector(".one");
const two =document.querySelector(".two");
const three =document.querySelector(".three");
const plus =document.querySelector(".plus");
const zero =document.querySelector(".zero");
const nokta =document.querySelector(".nokta");
const equal =document.querySelector(".equal");


ac.addEventListener("click",()=>{
    subresult.innerText ="";
    result.innerHTML ="";
});
abs.addEventListener("click", ()=>{
    if(subresult.innerText !==0 )
    result.innerText *=1
    subresult.innerText =result.innerText;
})

seven.addEventListener("click",()=>{
    subresult.innerText +=7;
})
eight.addEventListener("click",()=>{
    subresult.innerText +=8;
})
nine.addEventListener("click",()=>{
    subresult.innerText +=9;
})
multiply.addEventListener("click",()=>{
    subresult.innerText +="*";
})
four.addEventListener("click",()=>{
    subresult.innerText +="4";
})
five.addEventListener("click",()=>{
    subresult.innerText +="5";
})
six.addEventListener("click",()=>{
    subresult.innerText +="6";
})
minus.addEventListener("click",()=>{
    subresult.innerText +="-";
})
one.addEventListener("click",()=>{
    subresult.innerText +="1";
})
two.addEventListener("click",()=>{
    subresult.innerText +="2";
})
three.addEventListener("click",()=>{
    subresult.innerText +="3";
})
plus.addEventListener("click",()=>{
    subresult.innerText +="+";
})
zero.addEventListener("click",()=>{
    subresult.innerText +="0";
})
nokta.addEventListener("click",()=>{
    subresult.innerText +=".";
})
equal.addEventListener("click",()=>{
    subresult.innerText +="=";
})