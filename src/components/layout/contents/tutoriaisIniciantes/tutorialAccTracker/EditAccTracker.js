import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form style={{display:'flex', justifyContent:'center'}}
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
      }}>
    <div style={{display:'inline-block'}}>
    <h2 style={{padding:'10px 0px', fontSize:'30px', fontWeight:'500'}}>Editar</h2>
		<div style={{display:'flex'}}>
			<div style={{display:'inline-block', marginRight:'20px'}}>
				<label style={{marginBottom:'2px'}}>Local</label>
				<input type="text" name="local" value={user.local} placeholder="Extra, McDonalds..." 
				onChange={handleInputChange} className="form-control" style={{width:'300px'}}/>
			</div>
			<div style={{display:'inline-block'}}>
				<label style={{marginBottom:'2px'}}>Data</label>
				<input type="text" name="data" value={user.data} placeholder="23/07/19..."
				onChange={handleInputChange} className="form-control" style={{width:'105px'}}/>
			</div>
		</div>
		<div style={{display:'flex', marginTop:'10px'}}>
			<div style={{display:'inline-block', marginRight:'20px'}}>
				<label style={{marginBottom:'2px'}}>Descrição</label>
				<input type="text" name="desc" value={user.desc} placeholder="Compra do mês, farmácia..." 
				onChange={handleInputChange} className="form-control" style={{width:'300px'}}/>
			</div>
			<div style={{display:'inline-block'}}>
				<label style={{marginBottom:'2px'}}>Valor</label>
				<input type="number" name="price" value={user.price} placeholder="R$..."
				onChange={handleInputChange} className="form-control" style={{width:'105px'}}/>
			</div>
		</div>
    <button style={{marginRight:'2px', marginTop:'5px', width:'300px'}} className="btn btn-dark" 
      onClick={event => {
      event.preventDefault()
      props.updateUser(user.id, user)
    }}>Salvar</button>
    <button onClick={() => props.setEditing(false)} className="btn btn-danger" style={{marginTop:'5px', width:'122px'}}>
        Cancelar
      </button>
    </div>
    </form>
  )
}

export default EditUserForm