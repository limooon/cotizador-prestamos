
import { useState,useEffect} from "react";
import Header from "../src/assets/components/Header.jsx";
import Button from "../src/assets/components/Button.jsx";
import {formatoMoneda , calcularTotalPagar} from "../src/assets/helpers";


//cada que cantidad cambie el hook se va ejecutar


function App() {

  const min = 0;
  const max = 20000;
  const steap = 100;

  const [cantidad,setCantidad] = useState(10000);
  const [meses , setMeses] = useState(6);
  const [total , setTotal] = useState(0);
  const [pago , setPago] = useState(0);

  useEffect(() => {
    const resultado = calcularTotalPagar(cantidad , meses)
    setTotal(resultado)
  }, [cantidad , meses])
  
  useEffect(()=>{
    setPago(total / meses);
  },[total])

  function handleChange(e){
    console.log(e.target.value);
    setCantidad(e.target.value);
    
  }

  function handleClickDecremento(){
    
    const valor = cantidad - steap;
    if(valor < min){
      alert("cantidad no valida")
      return
    }
    setCantidad(valor);
    
  }
  function handleClickAumento(){
    const valor = cantidad + steap;
    if(valor > max){
      alert("cantidad exedida")
      return
    }
    setCantidad(valor);
  }
  
  return(
    <>
     <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
          <Header/>
          <div className="flex justify-between my-14">
               <Button
                operador = '-'
                fn={handleClickDecremento}
               />
               <Button
                   operador = '+'
                   fn={handleClickAumento}
               />
          </div>
          <input 
            type="range" 
            className=" w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
            onChange={handleChange}
            min={min}
            max={max}
            step={steap}
            value={cantidad}
          />
          <p className=" text-center my-10 text-5xl font-extralight text-indigo-600">
            {formatoMoneda(cantidad)}
          </p>
          <select className="mt-5 w-full p-2 bg-white border border-gray-300
           rounded-lg text-center text-xl font-bold text-gray-500"
            value={meses}
            onChange={e => setMeses(+e.target.value)}
           >
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24"> 24 meses</option>
          </select>
          <div className="my-5 space-y-3 bg-gray-50 p-5">
                <h2 className="text-xl text-gray-500 text-center font-bold">
                   Resumen<span className="text-indigo-600"> de pagos</span>
                </h2>
                <p className="text-xl text-gray-500 text-center font-bold">{meses} Meses</p>
                <p className="text-xl text-gray-500 text-center font-bold"> {formatoMoneda(total)}</p>
                <p className="text-xl text-gray-500 text-center font-bold">{formatoMoneda(pago)}</p>
          </div>
     </div>
    </>
  )

}

export default App
