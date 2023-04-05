const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener('click', (e) =>{
    e.preventDefault()

    camposFormulario.forEach((input)=>{
        const campo = input.value

        if(campo) {

            validarCampo(input)
        }
        
        if(!campo) {

            erroValidacao(input)
        }

    })
})

function validarCampo(input) {
    input.classList.add('valido')
    input.nextElementSibling.classList.remove('mostrar')
}

function erroValidacao(input) {
    if(input.classList.contains('valido')){
        input.classList.remove('valido')
    }

    input.classList.add('erro')
    input.nextElementSibling.classList.add('mostrar')
}