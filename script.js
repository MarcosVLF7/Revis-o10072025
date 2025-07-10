function script(){
        let n1 = Number(window.prompt('Qual o primeiro Número?'))
        let n2 = Number(window.prompt('Qual o Segundo Número?'))
        let n3 = Number(window.prompt('Qual o Terceiro Número?'))
            R = n1+n2
        let msg
            if (R > n3){msg = `O valor é maior que:${n3}`          
            }
            else {msg = `O valor é menor que:${n3}`
            }
        let res = document.getElementById('situacao')
        res.innerHTML = `<p>Calculando o Resultado</p>`
        res.innerHTML += `<p>Os Valores obtidos foram ${n1}, ${n2} e ${n3}</p>`
        res.innerHTML += `<p>O Resultados dos valores é ${R}</p>`

            res.innerHTML += `<p>a mensagem é: <strong style='color:red;'>${msg}</strong></p>`
}
