import React from 'react'

const AddUserForm = props => {
	const initialFormState = {local: '', data: '', desc:'', price:'' }

	const currentUser = props.currentUser;
	const addUser = props.addUser;
	const setCurrentUser = props.setCurrentUser;

	const handleInputChange = e => {
		const newValues = {...currentUser};
		newValues[e.target.name] = e.target.value;
		setCurrentUser(newValues)
	}

	const onSubmit = e => {
		e.preventDefault();
		if (currentUser.local && currentUser.price)
			addUser(currentUser)
		setCurrentUser(initialFormState);	
	}

	return (
		<form style={{display:'flex', justifyContent:'center'}}
			onSubmit={onSubmit}>
				{console.log(currentUser)}
	<div style={{display:'inline-block'}}>
				<h2 style={{padding:'10px 0px', fontSize:'30px', fontWeight:'500'}}>Adicionar conta</h2>
		<div style={{display:'flex'}}>
			<div style={{display:'inline-block', marginRight:'20px'}}>
				<label style={{marginBottom:'2px'}}>Local</label>
				<input type="text" name="local" value={currentUser.local} placeholder="Extra, McDonalds..." 
				onChange={handleInputChange} className="form-control" style={{width:'300px'}}/>
			</div>
			<div style={{display:'inline-block'}}>
				<label style={{marginBottom:'2px'}}>Data</label>
				<input type="text" name="data" value={currentUser.data} placeholder="23/07/19..."
				onChange={handleInputChange} className="form-control" style={{width:'105px'}}/>
			</div>
		</div>
		<div style={{display:'flex', marginTop:'10px'}}>
			<div style={{display:'inline-block', marginRight:'20px'}}>
				<label style={{marginBottom:'2px'}}>Descrição</label>
				<input type="text" name="desc" value={currentUser.desc} placeholder="Compra do mês, farmácia..." 
				onChange={handleInputChange} className="form-control" style={{width:'300px'}}/>
			</div>
			<div style={{display:'inline-block'}}>
				<label style={{marginBottom:'2px'}}>Valor</label>
				<input type="number" name="price" value={currentUser.price} placeholder="R$..."
				onChange={handleInputChange} className="form-control" style={{width:'105px'}}/>
			</div>
		</div>
			<button style={{marginTop:'5px', width:'425px', fontSize:'18px'}} className="btn btn-dark"
			>Salvar</button>
	</div>
		</form>
	)
}

export default AddUserForm