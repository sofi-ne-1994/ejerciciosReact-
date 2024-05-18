import React, { useState } from "react";

export const Register = ({ setIsRegister }) => {
  const [username, setUsername] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [mail, setMail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" && password === "") {
      setIsLogin(true);
    } else {
      alert("user o  password incorrectos!");
    }
  };

  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="Register-container">
      <h1>Login page</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="Register-form">
          <input
            type="text"
            onChange={handleChangeUser}
            placeholder="Username"
          />
          <input
            type="text"
            onChange={handleChangePassword}
            placeholder="Password"
          />
          <input type="text" name="" id="" onChange={handleChangeNombre} />
          <input type="text" name="" id="" onChange={handleChangeApellido} />
          <input type="mail" name="" id="" onChange={handleChangeMail} />
          <input type="number" name="" id="" onChange={handleChangeTelefono} />

          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
};
