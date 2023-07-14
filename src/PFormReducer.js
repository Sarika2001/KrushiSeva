const PFormReducer=(state,action)=> { 
    switch (action.type) {
        case "HANDLE TEXT INPUT":
            return { 
                ...state,
                [action.field]:action.payload,
            }
        case 'SELECT_OPTION':
            return { ...state, 
                [action.field]: action.payload };
        case 'SELECT_DATE':
            return { ...state, 
                EDate: action.payload };
        default:
            return state;  
    }
 } 

 export default PFormReducer;