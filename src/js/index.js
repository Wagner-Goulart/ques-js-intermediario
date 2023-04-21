const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn-enviar')

botaoEnviar.addEventListener('click', (e) =>{
    e.preventDefault()

    camposFormulario.forEach((input)=>{
  

        if(input.value) {
            input.classList.add('valido')
            input.nextElementSibling.classList.remove('mostrar')
            
        } else {
            input.classList.remove('valido')
            input.classList.add('erro')
            input.nextElementSibling.classList.add('mostrar')
        }


    })
})

