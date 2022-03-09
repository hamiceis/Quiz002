const form = document.forms[0]
const btn = document.querySelector('#btnConfirma')
const result = document.querySelector('#result')
const resultado = document.querySelector('#resultado')
const btnClose = document.querySelector('#btnClose')


const respostas = ['D','C','D','A']


form.addEventListener('submit', event =>{
    event.stopPropagation()
    event.preventDefault()
    
    
    const respostasForm = [
        form.InputQuestion1.value,
        form.InputQuestion2.value,
        form.InputQuestion3.value,
        form.InputQuestion4.value
    ]

    let pontuacao = 0

    respostasForm.forEach((resp,index) =>{
        if(resp === respostas[index]){
            pontuacao += 25
        } 
    })

    if(pontuacao === 100){
        result.style.display="flex"
        resultado.innerHTML = `Parabéns você acertou todas as questões`
    } else if(pontuacao === 0){
        result.style.display="flex"
        resultado.innerHTML = `Infelizmente você errou todas as questões`
    } else {
        result.style.display="flex"
        resultado.innerHTML = `Sua pontuação foi ${pontuacao} pontos. `
    }

})


btnClose.addEventListener('click', event =>{
    event.preventDefault()
    result.style.display="none"
})