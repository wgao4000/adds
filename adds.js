var num1=document.getElementById("number1").value;
var num2=document.getElementById("number2").value;
function add(){
	getcont("plus");
}	
function sub(){
    getcont("subs");
}
function getcont(v1){
    num1=document.getElementById("number1").value; 
    num2=document.getElementById("number2").value;
	if(num1!="" && num2!=""){
	  if(isNaN(num1) || isNaN(num2)){
		document.getElementById("resul").innerHTML="At least one of the values is not a number";
		getcolor("red"); 
	  }	
	  else{
	    if(Math.floor(num1)==num1 && Math.floor(num2)==num2){	
	  	 if(v1=="plus")
	      document.getElementById("resul").innerHTML=parseInt(num1)+" plus "+parseInt(num2)+" is "+(parseInt(num1)+parseInt(num2))+". ";
	     else if(v1=="subs")
	      document.getElementById("resul").innerHTML=parseInt(num1)+" minus "+parseInt(num2)+" is "+(parseInt(num1)-parseInt(num2))+". ";	
         document.getElementById("number1").value="";
         document.getElementById("number2").value="";
         getcolor("#444");
        }
        else{
          document.getElementById("resul").innerHTML="At least one of the values is not an integer.";
          getcolor("red"); 
        }
      }
    }
    else{
       document.getElementById("resul").innerHTML="At least one of the two values is missing.";
       getcolor("red"); 
    }
}
function getcolor(v1){
    document.getElementById("resul").style.color=v1;
}