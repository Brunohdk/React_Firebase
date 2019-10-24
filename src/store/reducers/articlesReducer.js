const initState = {
    articles:[]
}

const articlesReducer = (state = initState, action) =>{
    switch(action.type){
        case 'CREATE_ARTICLE':
            console.log('created article', action.articles)
        return state;
        case 'ARTICLE_ERROR':
            console.log('error', action.e)
            return state;
        default:
            return state    
    }
}

export default articlesReducer