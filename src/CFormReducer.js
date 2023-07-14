const CFormReducer=(state,action)=>{
    switch(action.type){
    case "HANDLE TEXT INPUT":
    return { 
        ...state,
        [action.field]:action.payload,
    }
    case 'SELECT_DATE':
        return { ...state, 
            BDate: action.payload };
    default:
        return state; 
}
}
export default CFormReducer;