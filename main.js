const TB = document.getElementById("textbox");
const TC = document.getElementById("textcount");

let x ;
TB.addEventListener('keyup',(e) =>{
    x=10-TB.value.length;
    console.log(TB.value);
    TC.textContent = `残り${x}文字`;
    if(x>=0){
        TC.style.color ="black";
    }else{
        TC.style.color ="red";
    }
});