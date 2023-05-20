alert("Seja bem vindo!")

// criando variaveis para os inputs do form

let forms = document.getElementById("formsid")
let nameinput = document.getElementById("nomeid") 
let telefoneinput = document.getElementById("telefoneid") 
let emailinput = document.getElementById("emailid")

// declarando evento 
forms.addEventListener("submit", (event) =>{
    event.preventDefault();

// verifica se o nome esta vazio
if (nameinput.value ==="") {
    alert ("preencha seu nome!");
    return;
}

// verifica se o email esta vazio
if (emailinput.value ==="") {
    alert ("preencha seu email!");
    return;
}

// enviando o form
forms.submit();
alert("suceso! obrigado")

})
