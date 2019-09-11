import React, { useState, Fragment } from 'react';
import AddUserForm from './AddAccTracker';
import EditUserForm from './EditAccTracker';
import UserTable from './tabelaAccTracker';
import styled from 'styled-components';



const App = () => {

	const usersData = [
		{id:1, data:'02/01', local:'Supermercado', desc:'Compra do mês', price:645},
        {id:2, data:'03/01', local:'Conta de casa', desc:'Conta de luz', price:189},
        {id:3, data:'12/02', local:'Sorveteria', desc:'3 potes 1,5l', price:39},
	]

	const initialFormState = { id: null, local: '', data: '', desc:'', price:'' }


	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, local: user.local, data: user.data, desc: user.desc, price: user.price })
    }
    
    const Title = styled.h1`
    padding-top:25px;
    display:flex;
    justify-content:center;
    @media(max-width:576px){
        font-size:3.3rem;
    }`
    const Hr = styled.hr`
    width:33rem;
    border-width:0.2rem;
    border-color:#ffff;
    margin:0 auto;
    @media(max-width:576px){
        width:21.1rem;
	}`
	const BackButton = styled.button`
    padding:10px 20px;
    background-color:white;
    border-radius:10px;
    margin: 0 auto;
	display:flex;
	&:hover{
		outline: none !important;
	}
	`

	return (
		<div className="" style={{backgroundColor:'rgba(218, 223, 225, 1)', height:'100vh'}}>
			<Title>Account Tracker</Title>
            <Hr/>
			<div className="flex-row container">
				<div className="flex-large" style={{marginTop:'-25px'}}>
					{editing ? (
						<Fragment>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
			<a href="/"><BackButton>Voltar</BackButton></a>
		</div>
	)
}

export default App