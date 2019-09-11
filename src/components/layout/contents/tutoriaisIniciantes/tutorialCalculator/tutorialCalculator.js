import React, {Component} from 'react';
import {Body, CalculatorGrid, Output, PreviousOperand, CurrentOperand, BackButton} from './styledCalculator';
import {Button} from './ButtonCalculator';


class Calculator extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: "",
            previousOperand: "",
            prev:"",
            currentOperand: "",
            operator: ""
        };
    }

    clear = () => {
        this.setState({input: '', prev:''})
    }

    delete = () => {
        this.setState({input:(this.state.input).slice(0, -1)})
    }

    updateValue = val => {
        this.setState({input: this.state.input + val});
    }

    updateZeroValue = val => {
        if(this.state.input !== ''){
            this.setState({input: this.state.input + val})
        }
    }

    updateDecimalValue = val => {
        // só adicionar ponto se nao tiver nenhum decimal já setado
        if(this.state.input.indexOf(".") === -1){
            this.setState({input: this.state.input + val})
        }
    }

    handleOperations = val => {
        this.state.previousOperand = this.state.input;
        this.prev = this.state.previousOperand + val;
        this.setState({input: '', prev: this.prev});
        switch(val){
            case "+":
            this.setState({operator: "+"})
            break;
            case "-":
            this.setState({operator: "-"})
            break;
            case "*":
            this.setState({operator: "*"})
            break;
            case "÷":
            this.setState({operator: "÷"})
            break;
            default:
            return 
        }
    }

    result = () => {
        this.state.currentOperand = this.state.input;
        switch(this.state.operator){
            case "+":
                return this.setState({
                    input:parseFloat(this.state.previousOperand) + parseFloat(this.state.currentOperand)
                });
            case "-":
                return this.setState({
                    input:parseFloat(this.state.previousOperand) - parseFloat(this.state.currentOperand)
                });
            case "*":
                return this.setState({
                    input:parseFloat(this.state.previousOperand) * parseFloat(this.state.currentOperand)
                });   
            case "÷":
                return this.setState({
                    input:parseFloat(this.state.previousOperand) / parseFloat(this.state.currentOperand)
                });  
            default:
                return   
            }
        }
        
        render(){
            return(
                <Body>
        <CalculatorGrid>
            <Output>
                <PreviousOperand>{this.state.prev}</PreviousOperand>
                <CurrentOperand>{this.state.input}</CurrentOperand>
            </Output>
            <button onClick={this.clear} style={{gridColumn:'span 2'}}>AC</button>
            <button onClick={this.delete}>DEL</button>
            <Button handleClick={this.handleOperations}>÷</Button>
            <Button handleClick={this.updateValue}>1</Button>
            <Button handleClick={this.updateValue}>2</Button>
            <Button handleClick={this.updateValue}>3</Button>
            <Button handleClick={this.handleOperations}>*</Button>
            <Button handleClick={this.updateValue}>4</Button>
            <Button handleClick={this.updateValue}>5</Button>
            <Button handleClick={this.updateValue}>6</Button>
            <Button handleClick={this.handleOperations}>+</Button>
            <Button handleClick={this.updateValue}>7</Button>
            <Button handleClick={this.updateValue}>8</Button>
            <Button handleClick={this.updateValue}>9</Button>
            <Button handleClick={this.handleOperations}>-</Button>
            <Button handleClick={this.updateDecimalValue}>.</Button>
            <Button handleClick={this.updateZeroValue}>0</Button>
            <button onClick={this.result} style={{gridColumn:'span 2'}}>=</button>
            <a href="/"><BackButton>Voltar</BackButton></a>
        </CalculatorGrid>
        </Body>
        )
    }
}

export default Calculator