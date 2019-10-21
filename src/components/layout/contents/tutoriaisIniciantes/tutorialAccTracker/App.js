import React, { useState, Fragment } from 'react';
import AddUserForm from './AddAccTracker';
import EditUserForm from './EditAccTracker';
import UserTable from './tabelaAccTracker';
import styled from 'styled-components';



const App = () => {
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
	display:flex;
	`

	const initialFormState = { local: '', data: '', desc:'', price:'' }
	const usersData = [
		{data:'02/01', local:'Supermercado', desc:'Compra do mês', price:645},
        {data:'03/01', local:'Conta de casa', desc:'Conta de luz', price:189},
        {data:'12/02', local:'Sorveteria', desc:'3 potes 1,5l', price:39},
	]

	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [indexOfWillBeEdited, setIndexOfWillBeEdited] = useState(0)

	
	const addUser = user => {
		if(editing){
			setEditing(false)
			return users.splice(indexOfWillBeEdited, 1, currentUser)
		}
		setUsers([ ...users, user ])
	}

	const deleteUser = index => {
		let newUsers = [...users];
		newUsers.splice(index, 1);
		setUsers(newUsers);
	}

	const editRow = index => {
		setEditing(true);
		setIndexOfWillBeEdited(index)
		let usersClone = [...users];
		let editItem = usersClone.splice(index, 1);
		return setCurrentUser({local: editItem[0].local, data: editItem[0].data, desc: editItem[0].desc, price: editItem[0].price })
	}
    

	return (
		<div className="" style={{backgroundColor:'rgba(218, 223, 225, 1)', height:'100vh'}}>
			<Title>Account Tracker</Title>
            <Hr/>
			<div className="flex-row container">
				<div className="flex-large" style={{marginTop:'-25px'}}>
					<AddUserForm addUser={addUser} currentUser={currentUser}
					setCurrentUser={setCurrentUser}/>
				</div>
				<div className="flex-large">
					<UserTable users={users} editRow={editRow}
					 deleteUser={deleteUser} />
				</div>
			</div>
			<div style={{display:'flex', justifyContent:'center'}}>
			<a href="/"><BackButton>Voltar</BackButton></a>
			</div>
		</div>
	)
}

export default App