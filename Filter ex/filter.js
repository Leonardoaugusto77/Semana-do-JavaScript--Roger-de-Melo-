/* const notas = [25, 60, 70, 32, 35]

const res = notas.filter(item =>{
    if(item < 60){
        console.table(item+":" + " Reprovado")
    } else {
        console.table(item+":" + " Aprovado")
    } 

}) */

// Nesse exemplo criado por min, foi criado um array notas e logo em seguida uma const que recebeu o array com o metodo filter
// O Filter vai receber uma função anonima e essa função vai receber o teste 




 const users = [
     { name: 'Ada Lovelace', premium: true },
     { name: 'Grace Hopper', premium: false },
     { name: 'Alan Turing', premium: true },
     { name: 'Linus Torvalds', premium: false },
     { name: 'Margaret Hamilton', premium: true },
     { name: 'Pedro', normal: false },
     { name: 'Bruno', normal: false },
     { name: 'Camilo', normal: false }
   ]


   const premiumUsers = users.filter(user => user.premium ) 


   console.log(premiumUsers)



