function submit(){

    let Nome = document.getElementById('Nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let termoCondi = document.getElementById("Concordar")
   

    
    if(termoCondi.checked){
        alert('nome: ' +Nome+ ' email: ' + email + ' Senha: ' + senha + ' termos: ' + termoCondi.value)
        window.location.href="gay.html"
    }
    else{
        alert('Você precisa aceitar os termos.')
    }
}

function nao(){
    window.location.href="aa.html"
}

