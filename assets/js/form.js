// Tabs
function openLink(evt, linkName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("myLink");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();


function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  if (x == "") {
    alert("Nome deve estar preenchido");
    return false;
  }  
  let y = document.forms["myForm"]["desc"].value;
  if (y == "") {
    alert("Descrição deve estar preenchida");
    return false;
  }

  let z = document.forms["myForm"]["data"].value;
  if (z == "") {
    alert("Data deve estar preenchida!");
    return false;
  }  

  let w = document.forms["myForm"]["horario"].value;
  if (w == "") {
    alert("Horário deve estar preenchido!");
    return false;
  }  
  

	alert("Formulário enviado com sucesso!");
	return true;
}   

function clearForm() {
 document.forms["myForm"].reset(); 
}

function showEquipament(){
  let x = document.forms["myForm"]["equip"].value;

  switch (x){
    case "Impressora 3D":
      //document.forms["myForm"]["desc"].getElementById("equip") = "2 extrusores";


        var p = document.createElement("p");
        var fname = "Impressora"; 
        var lname = "lname";
        var email = "email";
        p.innerHTML = fname + "<br />" + lname + "<br />" + email;
        document.getElementById("desc").appendChild(p);

    break;

  default:
  }

}
