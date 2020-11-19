const addCounter = (data) =>{
    return (dispatch)=>{
        dispatch({
            type: 'COUNT_ADD',
            payload:  data
        })
    }
}
export default addCounter;