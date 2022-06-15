//to change the border of input when clicked
let info = document.getElementsByClassName("info");
 info.addEventListener(click ,()=>{
    info.style.border = "2px solid rgb(204, 139, 142)";
 });


 //to show message of the input field is empty
 var form=document.getElementById("forms");
 form.addEventListener('submit',function(event){
    event.preventDefault();
 })
 
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["last"].value;
    var w = document.forms["myForm"]["country"].value;
    var z= document.forms["myForm"]["score"].value;
    if (x == "" || y=="") {
      document.getElementById("alert").style.display="inline-block";
      return false;
    }

    if (z == "" || w=="") {
        document.getElementById("alert").style.display="inline-block";
        return false;
      }
    
  }