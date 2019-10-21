import React, {Component} from 'react'
import ProjectList from './projectList'
import RecentPost from './recentPost'
import DashRow from './dashRow'
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'



class dashboard extends Component{

    render(){
        const {articles} = this.props
        return(
            <div className="container" id="projects">
                <ProjectList articles={articles}/> 
                <DashRow articles={articles}/>
                {/* <div style={{marginTop:'80px'}}>
                <RecentPost articles={articles}/>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        articles: state.firestore.ordered.articlesRJS
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'articlesRJS'}
    ])
)(dashboard)