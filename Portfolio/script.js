/*to display projects*/
function project(){
  var x = document.getElementById("scroll-text");
    if (x.innerHTML.includes("ExpertEase")) {
      insert1("Aúfholen- Personalized app to create to-do list");
    } 
    else if(x.innerHTML.includes("Aúfholen")) {
      insert1("Match Outcome Predictor");
    } 
    else if(x.innerHTML.includes("Match"))  {
      insert1("ExpertEase- Website to provide guidance")
    }
    

}

function insert1(skills){
  var x = document.getElementById("scroll-text");
  x.style.display="none";
  x.innerHTML = skills;
  x.style.display="block";

  setTimeout(project,7000);
}


/*for technologies*/
function myFunction() {
    var x = document.getElementById("mytech");
    if (x.innerHTML === "JAVA") {
      x.style.color='red';
      insert("HTML");
    } 
     else if(x.innerHTML === "HTML") {
      x.style.color='blue';
      insert("CSS");
    } 
    else if(x.innerHTML==="CSS")  {
      x.style.color='green';
      insert("JAVASCRIPT");
    }
    else if(x.innerHTML==="JAVASCRIPT")  {
      x.style.color='#00CED1';
      insert("REACTJS");
    }
    else if(x.innerHTML==="REACTJS")  {
      x.style.color='black';
      insert("JAVA");
    }

  }

  function insert(skills){
    var x = document.getElementById("mytech");
    x.style.display="none";
    x.innerHTML = skills;
    x.style.display="block";
    setTimeout(myFunction,4000);
  }

