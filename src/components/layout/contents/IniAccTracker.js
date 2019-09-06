import React, { useState } from 'react'


function Register({addDados, addUser}) {
    const [local, setValueLocal] = useState("");
    const [data, setValueData] = useState("");
    const [desc, setValueDesc] = useState("");
    const [price, setValuePrice] = useState("");
            const initialFormState = {id:null, local:'', data:'', desc:'', price:''};
            const [user, setUser] = useState(initialFormState)

            const handleInputChange = e => {
                const {name, value} = e.target;
                setUser({...user, [name]:value})
            }
        
        const handleSubmit = e => {
            e.preventDefault();
            if(!(user.local, user.price))return;
            addUser(user);
            setUser(initialFormState);
            
        }
        return (
            <div className="form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-8">
                            <label>Local:</label>
                            <input type="text" name="local" placeholder="Extra, McDonalds..."
                                className="form-control" onChange={handleInputChange}
                                value={user.local} />
                        </div>
                        <div className="col-4">
                            <label>Data:</label>
                            <input type="text" name="data" placeholder="23/07/19..."
                                className="form-control" onChange={handleInputChange}
                                value={user.data} />
                        </div>
                        <div className="col-8 mt-3">
                            <label>Descrição:</label>
                            <input type="text" name="desc" placeholder="Compra do mês, farmácia..."
                                className="form-control" onChange={handleInputChange}
                                value={user.desc} />
                        </div>
                        <div className="col-4 mt-3">
                            <label>Valor:</label>
                            <input type="number" name="price" placeholder="R$..."
                                className="form-control" onChange={handleInputChange}
                                value={user.price} />
                        </div>
                    </div>
                    <button className="btn btn-dark col-12 mt-2"
                        onClick={handleSubmit}
                        >Salvar</button>
                </div>
            </div>
        )
    }

    function Products({dados, deleteUser, editing}) {
        return (
            <div className=" table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-fixed text-center table-bordered ">
                    <thead className="thead-dark">
                        <tr>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dados && dados.map(vc => {
                        return (
                                <tr key={vc.id}>
                                    <td>{vc.data}</td>
                                    <td>{vc.local}</td>
                                    <td>{vc.desc}</td>
                                    <td>R${vc.price}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm"
                                        onClick={()=>editing(vc)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm ml-2"
                                        onClick={() => deleteUser(vc.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <span>R$ na conta</span>
                    </tfoot>
                </table>
            </div>
        )
    }

    
    function Contas() {
        const exampleData=[
            {id:1, data:'24/07', local:'Supermercado', desc:'Compra do mês', price:'445'},
            {id:2, data:'26/07', local:'Conta de casa', desc:'Conta de luz', price:'189'},
            {id:3, data:'01/08', local:'Sorveteria', desc:'', price:'39'}
        ]
        const [users, setUsers] = useState(exampleData);
        
        const addUser = user => {
            user.id = users.length + 1
            setUsers([...users, user])
        }

        const deleteUser = id => {
            setUsers(users.filter(user => user.id !== id))
        }

        const [edit, setEdit] = useState(false)

        const initialFormState = {id:null, local:'', data:'', desc:'', price:''};

        const [currentUser, setCurrentUser] = useState(initialFormState)

        const editing = vc => {
            setEdit(true)
            setCurrentUser({id: vc.id, local: vc.local, data: vc.data, desc: vc.desc, price: vc.price})
        }
    
/*         const addDados = (data, local, desc, price) => {
            const newDados = [...dados, {data, local, desc, price}];
            setDados(newDados);
        }

        const remove = id => {
            setDados(dados.filter(dado => dado.id !== id))
        } */
        return (
            <div className="container mt-4">
                <div className="row mt-30">
                    <div className="col-4">
                        <h2 className="font-weight-bold text-center" style={{marginTop:'5px'}}>Cadastro</h2>
                        <Register  addUser={addUser}/>
                    </div>
                    <div className="col-8">
                        <h2 className="font-weight-bold text-center">Histórico</h2>
                        <Products dados={users} deleteUser={deleteUser} editing={editing} />
                    </div>
                </div>
            </div>
        )
    }



export default Contas
