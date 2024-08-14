let input= document.getElementById("result");
let buttons= document.querySelectorAll("button");
let str="";

let arr=Array.from(buttons)
arr.forEach((i) => {
    i.addEventListener('click',(e)=>{
        let v=e.target.innerHTML;
        if(v== "AC"){
            str=""
            input.value=str;
            document.getElementById("exp").innerHTML=str;
        }
        else if(v== "="){
            document.getElementById("exp").innerHTML=str.toString()+"="+eval(str);
            if(str)
                str=''+eval(str);
            input.value=str;
            
        }
        else if(v== "DEL"){
            str=str.substring(0,str.length - 1);
            input.value=str;
            document.getElementById("exp").innerHTML=str;
        }
        else if(v== "+" || v== "-" || v== "*" || v== "/"){
            str+= v;
            document.getElementById("exp").innerHTML=str;
            input.value='';
        }
        else if(v=="%"){
            str=eval(str)/100;
            input.value=str;
        }
        else{
            str+= v;
            input.value+= ''+v;
            document.getElementById("exp").innerHTML=str;
        }
    });
});