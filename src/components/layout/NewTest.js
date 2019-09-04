import React, {Component} from 'react'
import styled from 'styled-components'
import NewTest1 from './NewTest1'
import NewTest2 from './NewTest2'

const Body = styled.div`
font-family: sans-serif;
line-height:1.15;
-webkit-text-size-adjust: 100%;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
&:after{
-webkit-box-sizing: border-box;
box-sizing: border-box;
};
&:before{
-webkit-box-sizing: border-box;
box-sizing: border-box;
};
margin:0;
font-size:1rem;
font-weight:400;
color: #212529;
text-align: left;
background-color: #fff;
width: 100%;
height: 100%;
min-width: 992px !important;
`

class NewTeste extends Component{
    state={

    }

    render(){
        return(
            <Body>
                <NewTest1/>
                <NewTest2/>
            </Body>
        )
    }
}

export default NewTeste