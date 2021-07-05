```
arrayDeNumeros = [1, 4, 8, 2, 5, 4, 10, 1, 2, 4, 7, 5]

numeroEscolhido = 4

function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    const novoArray = []
    for(let num of arrayDeNumeros) {
        if(num === numeroEscolhido){
            novoArray.push(num)
            
        }
        }
        
        if (novoArray.length > 0) {
            return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
    } else {
            return "Número não encontrado"
        
        
    }
  
}
console.log((contaOcorrencias))
```