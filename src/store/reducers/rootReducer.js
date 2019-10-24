import authReducer from './authReducer'
import projectReducer from './projectReducer'
import contasReducer from './contasReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    contas: contasReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
})

export default rootReducer