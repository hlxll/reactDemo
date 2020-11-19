
const addTitle = (dispatch) =>{
        dispatch({
            type: 'TITLE_ADD',
            payload: [{title: '老大'}]
        })
}
export default addTitle
