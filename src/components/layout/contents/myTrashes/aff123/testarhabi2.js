import React, {useState} from 'react';


const FormCenter = props => {
    const initialForm = {id:null, bairro:'', rua:'', num:null}
    const [end, setEnd] = useState()

    const onSubmit = e => {
        e.preventDefault()
        props.add(end)
        setEnd(initialForm)
    }
    const handleChange = e => {
        const {name, value} = e.target
        setEnd({...end, [name]:value})
    }

    return(
        <form>
            <input type="text" onChange={handleChange} name="bairro" />
            <input type="text" onChange={handleChange} name="rua" />
            <input type="text" onChange={handleChange} name="num" />
            <button onClick={onSubmit}>SAVE</button>
        </form>
    )
}


function Testar2(){
    const initialData = [{id:null, bairro:'Centro', rua:'Benedito Calixto', num:125}]
    const [user, setUser] = useState(initialData)

    const add = end => {
        setUser([...user, end])
    }


    return(
        <div className="container">
            <FormCenter add={add} />
            <div>
                {console.log(user)}
                {user.map(e => (
                    <div>
                        <p>{e.bairro}</p>
                        <p>{e.rua}</p>
                        <p>{e.num}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testar2