let tabuada, result = ""

tabuada = Number(5)
for(let i = 1; i <= 10; i++){
    /*result += tabuada + ' X ' + i + " = "
    + (tabuada * i) + '\n'*/
    result += `${tabuada} X ${i} = ${tabuada*i}
`
}
alert(result)