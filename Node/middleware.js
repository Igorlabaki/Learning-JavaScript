// middlaware pattern (cade de responsabilidade)

const pass1 = (ctx,next) =>{
    ctx.value = 'md01'
    next()
}


const pass2 = (ctx,next) =>{
    ctx.value = 'md02'
    next()
}


const pass3 = ctx => ctx.value = 'md03'


const exec = (ctx, ...middlewares) =>{
    const execPasso = indice=>{
        middlewares && indice < middlewares.length &&
            middlewares[indice][ctx,()=> execPasso(indice+1)]
    }
    execPasso(0)
}

const ctx = {}

exec(ctx,pass1,pass2,pass3)
console.log(ctx)