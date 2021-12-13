function validateForm() {
  let nome = document.forms["form"]["nome"].value;
  let email = document.forms["form"]["email"].value;
  let telefone = document.forms["form"]["telefone"].value;
  let assunto = document.forms["form"]["assunto"].value;

  if (nome == "") {
    alert("Nome deve estar preenchido");
    return false;
  }  

  if (email == "") {
    alert("Email deve estar preenchido!");
    return false;
  }  

  if (telefone == "") {
    alert("Telefone deve estar preenchido!");
    return false;
  }  
  
  if (assunto == "") {
    alert("Assunto deve estar preenchido!");
    return false;
  }  
  
	alert("Formulário enviado com sucesso!");
	return true;
}   

function clearForm() {
  document.forms["form"].reset();
}