
export const createContas = contas =>{
    return(dispatch, getState, {getFirebase, getFirestore}) => {

        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('contas').add({
            ...contas,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId
        }).then(()=>{
            dispatch({type:'CREATE_CONTAS', contas})
        }).catch(e => {
            dispatch({type:'CREATE_CONTAS_ERROR', e})
        })
    }
}

export const updateContas = (contas, id) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore()
        
        firestore.collection('contas').doc(id).set({
            ...contas
        }).then(()=>{
            dispatch({type:'UPDATE_CONTAS', contas})
        }).catch(e=>{
            dispatch({type:'UPDATE_ERROR', e})
        })
    }
}