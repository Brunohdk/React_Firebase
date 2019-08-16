import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createContas, updateContas } from '../../../store/actions/contasAction'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import firebase from '../../../config/fbConfig'


class Contas extends Component {
    state = {
        data: '', local: '', desc: '', price: ''
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = e => {
        const {viewContas} = this.props
        e.preventDefault()
        this.props.createContas(this.state)
        this.setState({
            data: '', local: '', desc: '', price: ''
        })
    }

    delete = (id) => {
        firebase.firestore().collection("contas").doc(id).delete()
    }

    load = (vc, id) => {
        this.setState({
            data: vc.data,
            local: vc.local,
            desc: vc.desc,
            price: vc.price
        })
        firebase.firestore().collection("contas").doc(id).delete()
    }


    renderRegister() {
        return (
            <div className="form">
                <div className="form-group">
                    <div className="row">
                        <div className="col-8">
                            <label>Local:</label>
                            <input type="text" name="local" placeholder="Extra, McDonalds..."
                                className="form-control" onChange={this.handleChange}
                                value={this.state.local} />
                        </div>
                        <div className="col-4">
                            <label>Data:</label>
                            <input type="text" name="data" placeholder="23/07/19..."
                                className="form-control" onChange={this.handleChange}
                                value={this.state.data} />
                        </div>
                        <div className="col-8 mt-3">
                            <label>Descrição:</label>
                            <input type="text" name="desc" placeholder="Compra do mês, role..."
                                className="form-control" onChange={this.handleChange}
                                value={this.state.desc} />
                        </div>
                        <div className="col-4 mt-3">
                            <label>Valor:</label>
                            <input type="number" name="price" placeholder="R$..."
                                className="form-control" onChange={this.handleChange}
                                value={this.state.price} />
                        </div>
                    </div>
                    <button className="btn btn-dark col-12 mt-2"
                        onClick={this.handleSubmit}>Salvar</button>
                </div>
            </div>
        )
    }

    renderProducts() {
        const { viewContas, auth } = this.props
        const abc = firebase.firestore().collection('contas').get().then(
            snapshot => {
                snapshot.forEach(doc => {
                    let newCount = 0
                    let teste = parseInt(doc.data().price)
                    newCount += teste
                    /* return console.log(newCount) */
                })
            }
        )
        return (
            <div className=" table-wrapper-scroll-y my-custom-scrollbar">
                <table className="table table-fixed text-center table-bordered ">
                    <thead className="thead-dark">
                        <tr>
                            <th>Data</th>
                            <th>Local</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                    {viewContas && viewContas.map(vc => {
                        if(auth === vc.authorId)
                            return (
                                <tr key={vc.id}>
                                    <td>{vc.data}</td>
                                    <td>{vc.local}</td>
                                    <td>{vc.desc}</td>
                                    <td>R${vc.price}</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm"
                                        onClick={()=>this.load(vc, vc.id)}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn btn-danger btn-sm ml-2"
                                        onClick={()=> this.delete(vc.id)}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <span>{}R$ na conta</span>
                    </tfoot>
                </table>
            </div>
        )
    }


    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <h2 className="font-weight-bold text-center">Cadastro</h2>
                        {this.renderRegister()}
                    </div>
                    <div className="col-8">
                        <h2 className="font-weight-bold text-center">Histórico</h2>
                        {this.renderProducts()}
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        createContas: dados => dispatch(createContas(dados)),
        updateContas: dados => dispatch(updateContas(dados))
        
    }
}

const mapStateToProps = state => {
    return {
        viewContas: state.firestore.ordered.contas,
        auth: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'contas', orderBy: ['data'] }
    ])
)(Contas)
