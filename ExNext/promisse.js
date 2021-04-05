function falaeDepois(segundos,frase){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(frase)
        },segundos*1000)
    })
}

falaeDepois(3,'Que Legal')
            .then(f => f.concat("?!?!"))
            .then(outraFrase => console.log(outraFrase))
            .catch(e => console.log(e))

