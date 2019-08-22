import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createArticle} from '../../../store/actions/articlesActions'



import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class dash extends Component{

    state={
        title:'',
        subtitle:'',
        desc:'',
        content:''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createArticle(this.state)
        this.setState({title:'', desc:'', content:''})
    }
    
    render(){
        return(
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col">
                    <ThemeProvider><TextField style={{width:'300px', size:'10px'}}
                        label="Título..." type="text" name="title"  variant="outlined" 
                         id="mui-theme-provider-outlined-input" value={this.state.title} onChange={this.handleChange}/></ThemeProvider>
                    </div>
                    <div className="col"><ThemeProvider><TextField style={{width:'300px', size:'10px'}}
                        label="Subtítulo..." type="text" name="subtitle"  variant="outlined" 
                        id="mui-theme-provider-outlined-input" value={this.state.subtitle} onChange={this.handleChange}/></ThemeProvider>
                    </div>
                    <div className="col"><ThemeProvider><TextField style={{width:'400px', size:'10px'}}
                        label="Descrição..." type="text" name="desc"  variant="outlined" 
                        id="mui-theme-provider-outlined-input" value={this.state.desc} onChange={this.handleChange}/></ThemeProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="col" style={{marginTop:'20px'}}>
                    <ThemeProvider><TextField style={{width:'1200px', size:'10px'}}
                         label="Conteúdo..." type="text" name="content"  variant="outlined" 
                         id="mui-theme-provider-outlined-input" value={this.state.content} onChange={this.handleChange}/></ThemeProvider>
                    </div>
                    <div style={{marginTop:'30px'}}>
                    <Button onClick={this.handleSubmit} variant="contained">Default</Button>
                    </div>
                </div>
            </div>
        

        )}
}

const mapDispatchToProps = dispatch => {
    return{
        createArticle: dados => dispatch(createArticle(dados))
    }
}

export default connect(null, mapDispatchToProps)(dash)