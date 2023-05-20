// declarando as variaveis 

let forms = document.getElementById("formsid")
let nameinput = document.getElementById("nomeid")
let telefoneinput = document.getElementById("telefoneid")
let emailinput = document.getElementById("emailid")

// adicionando os eventos

forms.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome esta vazio 
    if (nameinput.value === "") {
        alert ("preencha seu nome");
        return;
    }

    // verifica se o telefone esta vazio 
    if (telefoneinput.value === "") {
        alert ("preencha seu telefone");
        return;
    }
    // verifica se o email esta vazio 
    if (emailinput.value === "") {
        alert ("preencha seu email");
        return;
    }

    // se estiver tudo preenchido 
    forms.submit();
})