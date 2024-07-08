function submit(){

    let Nome = document.getElementById('Nome').value
    let email = document.getElementById('email').value
    let senha = document.getElementById('senha').value
    let termoCondi = document.querySelector("input[name = 'Concordar']:checked").value
   

    alert('nome: ' +Nome+ ' email: ' + email + ' Senha: ' + senha + ' ' + termoCondi)

    window.location.href="gay.html"
}

function nao(){
    window.location.href="aa.html"
}

