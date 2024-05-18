
//primer intento
import { useEffect,useState } from "react"


const contador = () =>{
    const [contador, serContador] = useState (0)
    const[imputValue, setImputValue] =  useState ("");

    const sumar =() =>{
        setContador (contador +1)
    }

    const reiniciar =() =>{
        setContador (0)
    }

    const restar =() =>{
        setContador (contador -1)
    }

    



    return <div>
        <h1>Contador</h1>
        <h2>{Contador}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={restar}>Restar</button>
        <form>
            <input type="text" name="" id="" />
            <button>ingrese num</button>
        </form>
    </div>
}