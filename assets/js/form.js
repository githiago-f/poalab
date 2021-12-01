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
  let x = document.forms["myForm"]["equip"].value;
  if (x == "") {
    alert("Nome deve estar preenchido");
    return false;
  }  



  let z = document.forms["myForm"]["data"].value;
  if (z == "") {
    alert("Data deve estar preenchida!");
    return false;
  }  

  let hi = document.forms["myForm"]["horarioinicio"].value;
  let hf = document.forms["myForm"]["horariofim"].value;
  if (hi == "" || hf == "") {
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
  let equipament = document.forms["myForm"]["equip"].value;

  switch (equipament){
    
    case "Impressora 3D Wanhao":
        var p = document.createElement("p");
        var img = '<img src="/assets/img/wanhao.png" width="50%"  alt="Impressora 3D Wanhao" />';
        var l1 = "2 extrusores"; 
        var l2 = "Filamento 1.75mm";
        var l4 = "Área: 225mm x 145mm x 150mm";
        var l5 = "Base aquecida";

        p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${l4}<br/>${l5}<br/>${img}` ;       
        document.getElementById("desc").innerHTML = p.outerHTML;      
    break;
    
    case "Impressora 3D PrintrBot":
        var p = document.createElement("p");
        var img = '<img src="/assets/img/printrbot.png" width="50%"  alt="Impressora 3D PrintrBot"/>';
        var l1 = "Filamento de 1.75mm"; 
        var l2 = "Resolução de camada entre 0.1 e 0.5mm"; 
        var l3 = "Área de trabalho: 152mm x 152mm x 152mm"; 

        p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${img}`;       
        document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    case "Cortadora Laser":
        var p = document.createElement("p");
        var img = '<img src="/assets/img/Cortadora.png" width="50%"  alt="Cortadora Laser"/>';
        var l1 = "Área de corte de 60cm x 40cm"; 
        var l2 = "Potência do laser: 70-80W"; 
        var l3 = "Precisão &lt; 0.01mm"; 
 

        p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${img}`;       
        document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    case "Plotter de Recorte":
      var p = document.createElement("p");
      var img = '<img src="/assets/img/plottersaga.png" width="50%"  alt="Plotter de Recorte"/>';
      var l1 = "Largura máxima da mídia: 72cm"; 
      var l2 = "Largura máxima de corte: 62cm"; 
      var l3 = "Laser point"; 
      var l4 = "Velocidade: 600mm"; 
      var l5 = "Precisão de repetição: 0.082mm"; 
      
      p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${l4}<br/>${l5}<br/>${img}` ;       
      document.getElementById("desc").innerHTML = p.outerHTML;      
      break;

    case "Fresadora":
      var p = document.createElement("p");
      var img = '<img src="/assets/img/fresa1.png" width="50%"  alt="Fresadora"/>';
      var l1 = "Área: 200mm x 250mm"; 
      var l2 = "Eixo z: 150mm"; 
      var l3 = "Refrigeração do motor a ar"; 
      var l4 = "Velocidade de rotação programável"; 

      p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${l4}<br/>${img}`;       
      document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    case "Extrusora Filabot":
      var p = document.createElement("p");
      var img = '<img src="/assets/img/Extrusora.png" width="50%"  alt="Extrusora Filabot"/>';
      var l1 = "Bico de extrusão de 1.75mm"; 
      var l2 = "Adequado para ABS e PLA"; 
      var l3 = "Taxa de extrusão entre 13 e 51 cm/minuto"; 

      p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${img}`;       
      document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    case "Plotter de Impressão":
      var p = document.createElement("p");
      var img = '<img src="/assets/img/plotterhp.png" width="50%"  alt="Plotter de Impressão"/>';
      var l1 = "Alimentação por rolo ou folha"; 
      var l2 = "Largura de impressão: 61cm"; 
      var l3 = "Espessura: até 11.8 milésimos de polegada"; 
      var l4 = "Resolução de impressão: 2400 x 1200 dpi"; 

      p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${l4}<br/>${img}`;       
      document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    case "Bancada de Eletrônica":
      var p = document.createElement("p");
      var img = '<img src="/assets/img/bancada.png" width="50%"  alt="Bancada de Eletrônica"/>';
      var l1 = "Osciloscópio"; 
      var l2 = "Fonte de bancada"; 
      var l3 = "Estação de solda"; 
      var l4 = "Componentes eletrônicos diversos"; 

      p.innerHTML = `${l1}<br/>${l2}<br/>${l3}<br/>${l4}<br/>${img}`;        
      document.getElementById("desc").innerHTML = p.outerHTML;      
    break;

    

  default:
  }

}
