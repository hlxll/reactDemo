const counterReducer = function(state = {count: 1}, action){
    switch(action.type){
        case 'COUNT_ADD':
            return{
                ...state, count: state.count + action.payload
            }
        default :
            return state
    }
}
export default counterReducer;