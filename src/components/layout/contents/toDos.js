import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { createProject } from '../../../store/actions/projectActions'
import { compose } from 'redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import firebase from '../../../config/fbConfig'



class Todos extends Component {

    state = {
        content: '',
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.create(this.state)
        this.setState({
            content: ''
        })
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    delete = e => {
        firebase.firestore().collection("projects").doc(e).delete()
        
    }

    load = (content, id) => {
        this.setState({
            content
        })
        firebase.firestore().collection('projects').doc(id).delete()
    }


    renderAdd() {
        return (
            <div className="form-group container">
                <div className="row">
                    <div className="col-6">
                        <form>
                            <label className="mt-4 font-weight-bold mb-1">Adicionar Tarefa:</label>
                            <input type="text" className="form-control"
                                value={this.state.content}
                                placeholder="O que você lembrou de fazer?..."
                                name="content"
                                value={this.state.content}
                                onChange={this.handleChange}
                            />
                        </form>
                    </div>
                    <div className="col-2" style={{marginTop:'40px'}}>
                        <button className="btn btn-primary mt-2"
                            onClick={this.handleSubmit}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    renderTodo(){
        const { project, auth } = this.props
        return(
            <div className="row mt-5 text-center ">
                    <div className="col-2 abc mb-2">DATA</div>
                    <div className="col-8 abc mb-2">TO DO</div>
                    <div className="col-2 abc mb-2">AÇÕES</div>
                    {project && project.map(project => {
                        if(auth === project.authorId) 
                        return (
                            <div className="row table" style={{border:'1px solid #E4E4E6'}}>
                                <div className="col-2" >{moment(project.createdAt.toDate()).calendar()}</div>
                                <div className="col-8 mt-2">{project.content}</div>
                                <div className="col-2" >
                                    <button className="btn btn-warning" onClick={() => this.load(project.content, project.id)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button className="btn btn-danger ml-2" onClick={()=> this.delete(project.id)}>
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
        )
    }


    render() {
        return (
            <div className="container ">
                {this.renderTodo()}
                {this.renderAdd()}
            </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        create: dados => dispatch(createProject(dados))
    }
}

const mapStateToProps = (state) => {
    return {
        project: state.firestore.ordered.projects,
        auth: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'projects', orderBy:['createdAt'] }
    ])
)(Todos);

