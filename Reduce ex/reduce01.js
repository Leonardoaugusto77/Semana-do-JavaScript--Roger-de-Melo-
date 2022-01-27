const numbers = [1,2,3]

const sumResult = numbers.reduce((accuumulator, item) => accuumulator + item , 0)

console.log(sumResult)




/* 
    const sumResult = numbers.reduce((accuumulator, item) => accuumulator + item , 0)


    A função acima vai funcionar da seguinte forma, accumulator vai receber o segundo argumento do reduce que é o zero que está
    no final do sumResult, logo depois o item vai receber o valor do Array que é 1 e em seguida
    a função => vai somar accumulator + item que no caso é 1 + 0 = 0, certo agora accumulator passa a 
    valer 1, a função sera executada e novamente sera somado => accumulator + item 
    que será 1 + 2 = 3, será executada uma terceira vez e agora como o accumulator vale 3 fica 3 + 3 = 6



*/ 