const formatoMoneda = (valor) =>{
 const formato = new Intl.NumberFormat('en-US', {
    style:'currency',
    currency:'USD',
 });
 return formato.format(valor);
}


const calcularTotalPagar = (cantidad,plazo) =>{

  let total;
  //mientras mayor es la cantidad mayor es el interes
  if(cantidad < 5000){
    //50% de interes
    total = cantidad * 1.5;
  }else if(cantidad >= 5000 && cantidad < 10000){
    total = cantidad * 1.4;
  }else if(cantidad >= 10000 && cantidad < 15000){
    total = cantidad * 1.3;
  }else{
    total = cantidad * 1.2;
  }

  //mas plazo mayor interes
  if(plazo === 6){
    //si paga rapido se le cobra un 10% mas
    total *= 1.1;
  }else if(plazo === 12){
    total *= 1.2;
  }else if(plazo === 24){
    total *= 1.3;
  }
 
  return total;
}

//exportas multiples funciones
export{

    formatoMoneda,
    calcularTotalPagar
} 

