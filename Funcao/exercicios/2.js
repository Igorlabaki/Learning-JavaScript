const tipoTrinagulo = (a, b, c) => {
   if( a == b && a == c){
       console.log('É um trinagulo Equilátero') 
   }else if(a == b || a == c || b == c ){
        console.log('É um triangulo Isoceles') 
   }else{
        console.log('É um triangulo Escaleno') 
   }
}

tipoTrinagulo(3,3,3)
tipoTrinagulo(1,2,3)
tipoTrinagulo(1,1,2)
tipoTrinagulo(1,2,1)
tipoTrinagulo(1,2,2)
