export const createArticle = article => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        
        firestore.collection('articlesRJS').add({
            ...article,
            author: profile.initials,
            authorId: authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:'CREATE_ARTICLE', article})
        }).catch(e => {
            dispatch({type:'ARTICLE_ERROR', e})
        })
    }
}