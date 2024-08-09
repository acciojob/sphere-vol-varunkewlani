let a=document.getElementById("radius")
let b=document.getElementById("volume")
let v=0;
function volume_sphere(event) {
	event.preventDefault();
	v=(4/3)* Math.PI * Math.pow(a.value,3)
	if(isNaN(a.value) || a.value<0)
	{
		b.value="NaN"		
	}
	
	if(a.value>0)
	{		
		b.value= v.toFixed(4)
	}
	
	
	
    //Write your code here
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
