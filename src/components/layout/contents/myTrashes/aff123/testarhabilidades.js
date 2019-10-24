import React, {Component} from 'react';

class Testar extends Component{

    state={
        count:0,
        content:'',
        todos:[]
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submit = e => {
        e.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.content],
            content:''
        })
    }

    del = index => {
        const newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({
            todos: newTodos
        });
    };

    addCount = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    render(){
        return(
            <div className="container">
            {console.log(this.state.count)}
                <form onSubmit={this.submit}>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                </form>
                <div className="output">
                    {this.state.todos.map((e, index) => <div>{e}<button onClick={()=>this.del(index)}>DEL</button></div>)}
                </div>
                <div className="count">
                    {this.state.count} <button onClick={this.addCount}>CLIK</button>
                </div>
            </div>
        )
    }
}

export default Testar




/* import React, {useState} from 'react';


function Form ({addTodo}){
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <input value={value} type="text" name='content' onChange={e => setValue(e.target.value)}/>
        </form>
    )
}

function App (){
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    }

    return(
        <div className="container">
            <Form addTodo={addTodo}/>
            {todos.map((e, index) => <div><p>{e.text}</p><button onClick={e => removeTodo(index)}>DELL</button></div>)}
            <div>
                {count} <button onClick={() => setCount(count +1)}>CLIK</button>
            </div>
        </div>
    )
}

export default App */