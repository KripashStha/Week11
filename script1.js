function myFunction(){
    const element=document.body;
    element.classList.toggle("dark-mode");

    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light-mode";
    }else{
        button.textContent="Dark-mode";
    }
}

const textchange=document.querySelector("#kk");
const textvalue =["an Entrepreneur","a Billionaire","IT student"]
let counter=0;
setInterval(()=>{
    textchange.textContent=textvalue[counter];
    counter=(counter+1)% textvalue.length;

},3000);