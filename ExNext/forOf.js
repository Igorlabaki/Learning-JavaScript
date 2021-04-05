for(let letras of 'Cod3r'){
    console.log(letras)
}

const assuntos = ['Maps', 'Set', 'Promise']

for(let i in assuntos){
    console.log(i)
}

for(let assunto of assuntos){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map',{abordado:true}],
    ['Set',{abordado:true}],
    ['Promise',{abordado:false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let assunto of assuntosMap.keys()){
    console.log(assunto)
}

for(let assunto of assuntosMap.values()){
    console.log(assunto)
}

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch,vl)
}
