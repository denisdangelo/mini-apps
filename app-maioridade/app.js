

//função para validação da maioridade
//alert é como se fosse um consele, evitar utilizar, a menos que seja para testes: alert("teste de envio")

function validar(event){
    //a linha abaixo desativa o comportamento padrão de envio do formulario no "event"
    event.preventDefault()
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value
    //saida
    document.getElementById('aluno').value = `Aluno: ${nome}`
    
    if (idade < 18 ){
        document.getElementById('status').value = "Menor de idade"
    } else {
        document.getElementById('status').value = "Maior de idade"
    }
}

