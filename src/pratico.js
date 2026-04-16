function converter(){
    
let resultadoBtn = document.getElementById("resultadoBtn")
let valorUsuario = document.getElementById("valorUsuario").value


const valorConvertido = valorUsuario.replace(',','.') * moedas()

if(valorConvertido === 0){
    return alert("Digitar o valor correto!")
}

resultadoBtn.innerHTML = `O valor convertido em R$ 
${valorConvertido.toFixed(2).replace('.',',')}`
}

function moedas(){

    let moedas = document.getElementById("moedas").value

    if(moedas === "" ){
        return 0
    }

    if(moedas === "dollar" ){
        return 5.30
    }

    if(moedas === "euro" ){
        return 6.90
    }

    if(moedas === "inr" ){
        return 18.90
    }
}