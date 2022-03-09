const form = document.forms[0]
const btn = document.querySelector('#btnConfirma')
const result = document.querySelector('#result')
const resultado = document.querySelector('#resultado')
const btnClose = document.querySelector('#btnClose')


const respostas = ['D','C','D','A','B','B']


form.addEventListener('submit', event =>{
    event.stopPropagation()
    event.preventDefault()
    
    
    const respostasForm = [
        form.InputQuestion1.value,
        form.InputQuestion2.value,
        form.InputQuestion3.value,
        form.InputQuestion4.value,
        form.InputQuestion5.value,
        form.InputQuestion6.value
    ]

    let pontuacao = 0

    respostasForm.forEach((resp,index) =>{
        if(resp === respostas[index]){
            pontuacao += 25
        } 
    })

    if(pontuacao === 150){
        result.style.display="flex"
        resultado.style.color="green"
        resultado.innerHTML = `Parabéns você acertou todas as questões`
    } else if(pontuacao === 0){
        result.style.display="flex"
        resultado.style.color="red"
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