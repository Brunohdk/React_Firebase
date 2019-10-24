import React, {useState} from 'react';

function Testar2(){
    const [user, setUser] = useState([{bairro:'a', rua:'a', num:'a'},
    {bairro:'b', rua:'b', num:'b'},{bairro:'c', rua:'c', num:'c'}])
    const [values, setValues] = useState({bairro:'', rua:'', num:''});
    const [editing, setEditing] = useState(false)
    const [editor, setEditor] = useState(0)

    const add = address => {
        if(editing){
            setEditing(false)
            return user.splice(editor, 1, address)
        }
        setUser([...user, address])
    }

    const del = index => {
        let newUsers = [...user];
        newUsers.splice(index, 1);
        setUser(newUsers);
    }


    const edit = index => {
        let editUser = [...user];
        let newEditUser = editUser.splice(index, 1);
        setValues({bairro: newEditUser[0].bairro, rua: newEditUser[0].rua, num: newEditUser[0].rua})
        setEditing(true);
        setEditor(index)
    }


    const onSubmit = e => {
        e.preventDefault();
        add(values);
        setValues({bairro:'', rua:'', num:''})
    }

    const handleChange = e => {
        const auxValues = {...values};
        auxValues[e.target.name] = e.target.value;
        setValues(auxValues);
    }

    return(
        <div className="container">
            <form>
            BAIRRO<input type="text" onChange={handleChange} name="bairro" value={values.bairro} />
            RUA<input type="text" onChange={handleChange} name="rua" value={values.rua}/>
            NUM<input type="text" onChange={handleChange} name="num" value={values.num} />
            <button onClick={onSubmit}>SAVE</button>
        </form>
            <div>
                {console.log(user)}
                {user.map((e, index) => (
                    <div>
                        <p>BAIRRO:{e.bairro}   </p>
                        <p>RUA:{e.rua}   </p>
                        <p>NUM:{e.num}</p>
                        <button onClick={() => del(index)}>DEL</button>
                        <button onClick={() => edit(index)}>ATUALIZAR</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testar2