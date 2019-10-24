import styled from 'styled-components';

export const Body = styled.div`
    box-sizing: border-box;
    font-family: Gotham Rounded, sans-serif;
    padding:0;
    margin: 0%;
    background: linear-gradient(to right, #f1f2b5, #135058);
    height: 100vh;
    width: 100vw;
`;

export const CalculatorGrid = styled.div`
    display:grid;
    justify-content:center;
    align-content:center;
    min-height: 100vh;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    button{
        cursor: pointer;
        font-size:2rem;
        border: 1px solid white;
        outline: none;
        background-color: rgba(255, 255, 255, .75);
        &:hover{
            background-color: rgba(255, 255, 255, .95);
        }
    }
`;

export const ButtonCalculator = styled.button`
        
        cursor: pointer;
        font-size:2rem;
        border: 1px solid white;
        outline: none;
        background-color: rgba(255, 255, 255, .75);
        &:hover{
            background-color: rgba(255, 255, 255, .95);
        }
`

export const Output = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(0, 0, 0, .60);
    display:flex;
    align-items: flex-end;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
`

export const PreviousOperand = styled.div`
    color:rgba(255, 255, 255, .75);
    font-size: 1.5rem;
`

export const CurrentOperand = styled.div`
    color: #ffff;
    font-size: 2.5rem;
`

export const BackButton = styled.button`
    padding:10px 20px;
    background-color:white;
    border-radius:10px;
    margin-left:140px;
    margin-top:30px;
    border-color: 2px rgba(0, 0, 0, .60);
`

export const BackA = styled.a`
&:hover{
    outline: none !important;
}`