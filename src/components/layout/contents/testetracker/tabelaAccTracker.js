import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
margin:3px;
justify-content:center;
align-items:center;
display:flex;
`

const Td = styled.td`
@media(min-width:200px){
    font-size:14px;
    button{
        width:38px;
        height:28px; 
        font-size:13px;
    }
}
@media(min-width:576px){
    font-size:15px;
    button{
        width:40px;
        height:30px;
        font-size:14px;
    }
}
@media(min-width:768px){
    font-size:16px;
    button{
        width:45px;
        height:30px;
        font-size:15px;
    }
}
@media(min-width:992px){
    font-size:17px;
    button{
        width:50px;
        height:34px;
        font-size:16px;
    }
}
`

const UserTable = props => (
<div>
  <table style={{margin:'0 auto', marginTop:'50px'}}>
    <thead>
      <tr>
        <th style={{padding:'0px 5px', paddingBottom:'8px', fontSize:'28px', fontWeight:'500'}}>Data</th>
        <th style={{padding:'0px 15px', fontSize:'28px', fontWeight:'500'}}>Local</th>
        <th style={{padding:'0px 15px', fontSize:'28px', fontWeight:'500'}}>Desc</th>
        <th style={{fontSize:'28px', fontWeight:'500'}}>Valor</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? ( 
        props.users.map(user => (
          <tr key={user.id} style={{backgroundColor:'white', border:'3px solid black'}}>
            <Td style={{padding:'5px 5px'}}>{user.data}</Td>
            <Td style={{padding:'5px 15px'}}>{user.local}</Td>
            <Td style={{padding:'5px 15px'}}>{user.desc}</Td>
            <Td style={{padding:'5px 0px'}}>R${user.price}</Td>
            <Td style={{display:'flex'}}>
              <Button 
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-primary">
                <i className="fa fa-pencil">{console.log(user)}</i>
              </Button>
              <Button 
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger">
                <i className="fa fa-trash"></i>
              </Button>
            </Td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
  <p style={{marginTop:'20px', display:'flex', justifyContent:'center', fontWeight:'500'}}>
    Total de {props.users.length} contas e R${props.users.map(u => Number.parseInt(u.price)).reduce((a,b)=> a+b,0)} reais gastos.
  </p>
</div>  
)

export default UserTable