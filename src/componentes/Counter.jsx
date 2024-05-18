//correccion
import React, { useState } from "react";

function Counter() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContador(parseInt(inputValue));
  };

  return (
    <div>
      <div className="counter-cnt">
        <h1>Contador</h1>
        <h2>{contador}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        <button onClick={restar}>Restar</button>
        <form onSubmit={handleSubmit}>
          <input type="text" name="" id="" onChange={handleChange} />
          <button>ingrese num</button>
        </form>
      </div>
    </div>
  );
}

export default Counter;