import { useState } from "react";

type FormData = {
  firstName: string,
  lastName: string
}

function App() {

  const [fullName, setFullName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({ /* é de boa prática, colocar os campos pra iniciarem vazios*/
    firstName: '',
    lastName: ''
  });

  function handleInputChange(event : any) {
    const value = event.target.value; /* valor que o usuario digitou no campo, se digitou joao é esse valor que sera capturado*/
    const name = event.target.name; /* nome do campo do input que foi alterado*/
    console.log("campo alterado", name);
    console.log("campo alterado", value);
    setFormData({...formData, [name]: value}); /* aproveita os dados que estao no formulario*//* aproveita os dados que estao no formulario*/
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setFullName(formData.firstName + " " + formData.lastName);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}> 
        <div>
          <input 
            name="firstName"
            value={formData.firstName}
            type="text" 
            placeholder="Digite seu nome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input 
            name="lastName"
            value={formData.lastName}
            type="text" 
            placeholder="Digite o sobrenome"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Mostrar nome completo</button>
        </div>
      </form>
      <h2>{fullName}</h2>
    </>
  );
}

export default App
