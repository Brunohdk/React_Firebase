const initState = {
    contas:[]
}

const contasReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_CONTAS':
            console.log('conta incluida', action.contas)
        return state;
        case 'CREATE_CONTAS_ERROR':
            console.log('erro', action.e)
            return state;
        case 'UPDATE_CONTAS':
            console.log('update done', action.contas)
            return state
        case'UPDATE_ERROR':
            console.log('update error', action.e)
            return state        
        default:
            return state
        }
}