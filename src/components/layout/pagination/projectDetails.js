import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'

const projectDetails = (props) => {
    const {art} = props
    if(art){
    return(
        <div className="container section" style={{backgroundColor:'grey'}}>
            <div className="card z-depth-0" style={{margin:'20px'}}>
                <div className="card-content" style={{padding:'25px'}}>
                    <span className="card-title" style={{justifyContent:'center'}}><h3>{art.title}</h3></span>
                    <p style={{marginTop:'30px'}}>{art.content}</p>
                </div>
                <div className="card-action">
                    <div>Posted by {art.author}</div>
                    <div>{moment(art.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )}else{
            return(
                <div className="container center">Loading project...</div>
            )
        }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const article = state.firestore.data.articlesRJS
    const articles = article ? article[id] : null
    return{
        art : articles
    }
}

export default  compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'articlesRJS'}
    ])
)(projectDetails)