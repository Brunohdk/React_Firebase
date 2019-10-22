import React, {useState} from 'react';
    
function TodoForm({addTodo}) {
    const [data, setData] = useState("");
    const [teste, setTeste] = useState([{}]);

    const onSubmit = e => {
        e.preventDefault();
        if(!data) return;
        setTeste([...teste, data])
        addTodo(teste);
        setData("");
    };
  
    return (
      <div className="container">
          <div className="row">
              <div className="mx-auto">
                  <form onSubmit={onSubmit}>
                      <input type="text" value={data} onChange={e => setData(e.target.value)}/>
                  </form>
              </div>
          </div>
      </div>
    );
  }

  function Todo() {
    const [user, setUser] = useState([]);

    const addTodo = dados => {
        const newTodos = [...user, dados]
        setUser(newTodos)
    };

    const removeTodo = id => {
        const newUsers = [...user];
        const xablau = newUsers.filter(i => i.id !== id);
        setUser(xablau);
    }
     
    let carro = {
        marca: 'VW',
        modelo: "FOX",
        placa: "FCQ1949",
        ano: 2016,
        cor: 'PRATA',
        quantasPortas: 4,
        assentos: 5,
        quantidadePessoas: 0
    }

    carro.mudarCor = (x) => carro.cor = x; 

    carro.obterCor = () => carro.cor;

    carro.obterModelo = () => carro.modelo;

    carro.obterMarca = () => carro.marca;

    carro.obterMarcaModelo = () => `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`;

    carro.adicionarPessoas = (x) => {
        carro.quantidadePessoas += x
        let cabem = carro.assentos - carro.quantidadePessoas;
        let singular = cabem === 1 ? "pessoa" : "pessoas";
        let singular1 = cabem === 1 ? "Cabe" : "Cabem";
        if(carro.quantidadePessoas <= 4){
            return `${singular1} mais ${cabem} ${singular}`
        }
        if(carro.quantidadePessoas >= 5){
            return "O carro já está lotado"
        }
    }


    return(
        <div className="container">
            <TodoForm addTodo={addTodo}/>
            <div className="row">
                {console.log(user)}
                <div className="mx-auto">
                    {user.map(i => <p onClick={() => removeTodo(i.id)}>{i}/{i.id}</p>)}
                    <p>{carro.adicionarPessoas(5)}{console.log(carro.quantidadePessoas)}</p>
                </div>
            </div>
        </div>
    )
  }

  export default Todo


