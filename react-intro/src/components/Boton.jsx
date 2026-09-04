import { useState } from "react";

function Boton() {
  const [valor, setValor] = useState(0);

  const handleClick = () => {
    setValor((prevValor) => prevValor + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <p>Valor: {valor}</p>
    </>
  );
}

export default Boton;
