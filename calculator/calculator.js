 let result=document.getElementById("display");

 let calculate=(number)=>{
        result.value=result.value+number;

 }

 let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch{
        alert("Enter the valid input");
    }
 }