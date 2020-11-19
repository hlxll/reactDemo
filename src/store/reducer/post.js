const postReducer = function(state = {list: [{title: '你好'}]}, action){
    switch(action.type){
        case 'TITLE_ADD':
            return{
                ...state, list: action.payload
            }
        default :
            return state
    }
}
export default postReducer;