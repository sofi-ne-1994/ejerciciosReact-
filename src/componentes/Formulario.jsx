import React,{useState, useEffect} from "react";
// me salia un iconito que dice "remove import from react(? no se que onda"

//este es el segundo componente que estoy haciendo acá así que no se si, deberia llamrlo "invocarlo" en "app.jsk"


const Formulario = () => {
    const [imputValue, setImputValue] = useState("");
    const [formValue, setFormValue] = ("");
    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [mail, setMail] = useState ("");
    const [telefono, setTelefono] = useState ("");
    

useEffect(() =>{
    setFormValue("Página recién cargada")
},[])    
//muestra texto de que se cargo la pagina, luego desaparece


function handleChange(event){
    setImputValue(event.target.value);
    console.log(event);//sacar 
}

function handleChangeNombre(event){
    setNombre(event.target.value);
}
function handleChangeApellido(event){
    setApellido(event.target.value);
}

function handleChangeMail(event){
    setMail(event.target.value);
}

function handleChangeTelefono(event){
    setTelefono(event.target.value);
}

    //handlechange es para captar lo que se escribe,(el event toma el onChange, el target toma el imput, el value es lo que escribimos) 
    //en imputValue se guarda lo que se escribe

    
function handleSubmit(event){
    event.preventDefault();
    setFormValue(inputValue);
}
//acá solo capta la acción del botón submit
//se ejecuta cuando se envia el formulario



  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" onChange={handleChangeNombre}/>
            <input type="text" name="" id="" onChange={handleChangeApellido}/>
            <input type="mail" name="" id="" onChange={handleChangeMail}/>
            <input type="number" name="" id="" onChange={handleChangeTelefono}/>
            <h2>nombre ={nombre} apellido={apellido} mail={mail} telefono={telefono} {formValue}</h2>
            <button type="submit">mostrar</button>
        </form>
      
    </div>
  )
}

export default Formulario;
